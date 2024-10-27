import { Buffer } from "node:buffer";
import AWS from "aws-sdk";
const { stringify } = JSON;

AWS.config.update({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_SECRET,
  region: "ap-northeast-2",
});

const lambda = new AWS.Lambda({
  apiVersion: "2015-03-31",
  endpoint: "http://localhost:3030",
});
const handler = async (body) => {
  const clientContextData = stringify({
    foo: "foo",
  });
  try {
    const payload = stringify(body);
    const params = {
      ClientContext: Buffer.from(clientContextData).toString("base64"),
      // FunctionName is composed of: service name - stage - function name, e.g.
      FunctionName: "FunctionTesting-dev-handler",
      InvocationType: "RequestResponse",
      Payload: payload,
    };
    const response = await lambda.invoke(params).promise();
    console.log("Response:", response);
    return stringify(response);
  } catch (err) {
    return err;
  }
};

export default handler;
