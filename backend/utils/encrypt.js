import crypto from "crypto";
const encryptionKey = process.env.ENCRYPTION_KEY;

const encrypt = (text) => {
  const cipher = crypto.createCipheriv(
    "aes-256-ccm",
    encryptionKey,
    Buffer.from(encryptionKey)
  );

  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

const decrypt = (encryptedText) => {
  const decipher = crypto.createDecipheriv(
    "aes-256-ccm",
    encryptionKey,
    Buffer.from(encryptionKey)
  );
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};

export { encrypt, decrypt };
