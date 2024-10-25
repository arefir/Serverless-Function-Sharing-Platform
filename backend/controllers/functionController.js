import asyncHandler from "../middleware/asyncHandler.js";
import Function from "../models/functionModel.js";
import AWS from "aws-sdk";
// import { decrypt } from "../utils/encrypt.js";
import Cryptr from "cryptr";
import JSZip from "jszip";
import fs, { fdatasync } from "fs";

// @desc    Upload function
//+ @route   POST /api/functions
// @access  Private
const uploadFunction = asyncHandler(async (req, res) => {
  const { name, description, code, runtime, environmentVariables } = req.body;
  const author = req.user.id;

  const functionExists = await Function.findOne({ name, author });

  if (!functionExists) {
    const data = {
      name,
      description,
      code,
      runtime,
      environmentVariables,
      author,
    };

    const fn = new Function(data);

    fn.save();

    res.json(fn);
  } else {
    res.status(400);
    throw new Error("Function already exists");
  }
});

// @desc    Get All functions
//* @route   GET /api/functions
// @access  Private
const getFunctions = asyncHandler(async (req, res) => {
  const functions = await Function.find({});

  if (functions) res.json(functions);
  else {
    res.status(404);
    throw new Error("No functions found");
  }
});

// @desc    Get function
//* @route   GET /api/functions/:id
// @access  Private
const getFunction = asyncHandler(async (req, res) => {
  const fn = await Function.findById(req.params.id);

  if (fn) res.json(fn);
  else {
    res.status(404);
    throw new Error("Function not found");
  }
});

// @desc    Update function
//+ @route   POST /api/functions/:id
// @access  Private
const updateFunction = asyncHandler(async (req, res) => {
  let fn = await Function.findById(req.params.id);

  if (fn)
    if (fn.author == req.user.id)
      fn = await Function.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
    else {
      res.status(401);
      throw new Error("Not Authorized");
    }

  if (fn) res.json(fn);
  else {
    res.status(404);
    throw new Error("Function not found");
  }
});

// @desc    Delete function
//! @route   DELETE /api/functions/:id
// @access  Private
const deleteFunction = asyncHandler(async (req, res) => {
  let fn = await Function.findById(req.params.id);

  if (fn)
    if (fn.author == req.user.id)
      fn = await Function.findByIdAndDelete(req.params.id);
    else {
      res.status(401);
      throw new Error("Not Authorized");
    }

  if (fn) res.json({ message: "Function deleted successfully" });
  else {
    res.status(404);
    throw new Error("Function not found");
  }
});

// @desc    Deploy function
//+ @route   POST /api/functions/deploy/:id
// @access  Private
const deployFunction = asyncHandler(async (req, res) => {
  const { functionName, iam, region } = req.body;

  const fn = await Function.findById(req.params.id);

  if (fn) {
    const cryptr = new Cryptr(process.env.ENCRYPTION_SECRET);
    const accessKey = cryptr.decrypt(iam.accessKey);
    const secretKey = cryptr.decrypt(iam.secretKey);

    console.log(`accessKey: ${accessKey}, secretKey: ${secretKey}`);

    configureAWS(accessKey, secretKey, region);
    const lambda = new AWS.Lambda({
      region: region,
    });

    const code = Buffer.from(fn.code, "utf8");
    let zip = new JSZip();
    zip.file("index.js", code);
    await zip
      .generateAsync({ type: "nodebuffer", compression: "DEFLATE" })
      .then(async function callback(buffer) {
        fs.writeFileSync("code.zip", buffer);
      });

    const params = {
      FunctionName: functionName,
      Runtime: fn.runtime,
      Role: iam.arn,
      Handler: "index.handler",
      Code: {
        ZipFile: fs.readFileSync("code.zip"), // The code in zip or plain text form
      },
      // Environment: { // Environment
      //   Variables: { // EnvironmentVariables
      //     "<keys>": "STRING_VALUE",
      //   },
      // },
    };

    try {
      const response = await lambda.createFunction(params).promise();
      fs.unlinkSync("code.zip"); // Delete the zip file
      res
        .status(200)
        .json({ message: "Function deployed successfully", data: response });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
});

const configureAWS = (accessKey, secretKey, region) => {
  AWS.config.update({
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
    region: region, // Example region
  });
};

export {
  uploadFunction,
  getFunctions,
  getFunction,
  updateFunction,
  deleteFunction,
  deployFunction,
};
