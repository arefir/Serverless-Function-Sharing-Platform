// import crypto from "crypto";
// const key =
//   process.env.KEY ||
//   crypto
//     .createHash("sha256")
//     .update(String(process.env.ENCRYPTION_SECRET))
//     .digest("base64")
//     .substring(0, 16);
// const iv =
//   process.env.IV ||
//   crypto
//     .createHash("sha256")
//     .update(String(process.env.IV_SECRET))
//     .digest("base64")
//     .substring(0, 8);

// const encrypt = (text) => {
//   const cipher = crypto.createCipheriv("aes-128-gcm", key, iv);

//   const encrypted = Buffer.concat([
//     cipher.update(Buffer.from(text, "utf-8")),
//     cipher.final(),
//   ]);
//   console.log(key, iv, encrypted);
//   const authTag = cipher.getAuthTag();
//   return { encrypted: encrypted, authTag: authTag };
// };

// const decrypt = (encryptedText) => {
//   const decipher = crypto.createDecipheriv("aes-128-gcm", key, iv);

//   const decrypted = Buffer.concat([
//     decipher.update(encryptedText),
//     decipher.final(),
//   ]);
//   console.log(key, iv, decrypted);
//   return decrypted;
// };

// export { encrypt, decrypt };
