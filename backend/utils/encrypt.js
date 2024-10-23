import crypto from "crypto";
const key = crypto
  .createHash("sha256")
  .update(String(process.env.ENCRYPTION_KEY))
  .digest("base64")
  .substring(0, 16);
const iv = crypto.randomBytes(8);

const encrypt = (text) => {
  const cipher = crypto.createCipheriv("aes-128-gcm", key, iv);

  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

const decrypt = (encryptedText) => {
  const decipher = crypto.createDecipheriv("aes-128-gcm", key, iv);

  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};

export { encrypt, decrypt };
