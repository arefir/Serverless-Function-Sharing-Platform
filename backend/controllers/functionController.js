import asyncHandler from "../middleware/asyncHandler.js";
import Function from "../models/functionModel.js";

// @desc    Upload function
//+ @route   POST /api/functions
// @access  Private
const uploadFunction = asyncHandler(async (req, res) => {
  const { name, description, code, language, environmentVariables } = req.body;
  const author = req.user.id;

  const functionExists = await Function.findOne({ name, author });

  if (!functionExists) {
    const fn = {
      name,
      description,
      code,
      language,
      environmentVariables,
      author,
    };

    fn.save();
  } else {
    res.status(400);
    throw new Error("User already exists");
  }
});

// @desc    Get All functions
//* @route   Get /api/functions
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
//* @route   Get /api/functions/:id
// @access  Private
const getFunction = asyncHandler(async (req, res) => {
  const fn = await Function.findById(req.params.id);

  if (fn) res.json(fn);
  else {
    res.status(404);
    throw new Error("Function not found");
  }
});

export { uploadFunction, getFunctions, getFunction };
