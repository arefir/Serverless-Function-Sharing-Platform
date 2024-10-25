import mongoose from "mongoose";
import bcrypt from "bcryptjs";
// import { encrypt } from "../utils/encrypt.js";
import Cryptr from "cryptr";

const iamSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  accessKey: {
    type: String,
    required: true,
  },
  secretKey: {
    type: String,
    required: true,
  },
  arn: {
    type: String,
    required: true,
  },
});
const notificationsSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    IAMs: [iamSchema],
    notifications: [notificationsSchema],
  },
  {
    timestamps: true,
  }
);

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password using bcrypt
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

  if (this.isModified("IAMs") && this.IAMs.length > 0) {
    const cryptr = new Cryptr(process.env.ENCRYPTION_SECRET);
    let newIAM = this.IAMs[this.IAMs.length - 1];

    newIAM.accessKey = cryptr.encrypt(newIAM.accessKey);
    newIAM.secretKey = cryptr.encrypt(newIAM.secretKey);

    this.IAMs.pop();
    this.IAMs.push(newIAM);
  }

  next();
});

const User = mongoose.model("User", userSchema);

export default User;
