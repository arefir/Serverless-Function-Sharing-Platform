import asyncHandler from "../middleware/asyncHandler.js";
import { generateToken, logoutToken } from "../utils/generateToken.js";
import User from "../models/userModel.js";

// @desc    Auth user & get token
//+ @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Logout & replace token
//* @route   GET /api/users/logout
// @access  Private
const logoutUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    logoutToken(res, user._id);

    res.send("successfully loggedout");
  } else {
    res.status(401);
    throw new Error("Not logged in");
  }
});

// @desc    Register a new user
//+ @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Get profile
//* @route   GET /api/users/profile
// @access  Private (user get their profile)
const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      bio: user.bio,
      email: user.email,
      IAMs: user.IAMs,
      notifications: user.notifications,
      isAdmin: user.isAdmin,
    });
  }
});

// @desc    Update profile
//+ @route   POST /api/users/profile
// @access  Private (user can update their own profile)
const updateProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.bio = req.body.bio || user.bio;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      bio: updatedUser.bio,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update Account (email or password)
//+ @route   POST /api/users/account
// @access  Private
const updateAccount = asyncHandler(async (req, res) => {
  const { password, confirmPassword } = req.body;
  const user = await User.findById(req.user._id);

  if (user) {
    user.email = req.body.email || user.email;
    if (req.body.password && req.body.confirmPassword)
      if (password.length > 0 && confirmPassword.length > 0)
        if (password === confirmPassword) user.password = password;

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      email: updatedUser.email,
    });
  }
});

// @desc    Add IAM
//+ @route   POST /api/users/iam
// @access  Private
const addIAM = asyncHandler(async (req, res) => {
  const { name, accessKey, secretKey, arn } = req.body;
  const user = await User.findById(req.user._id).select("-password");

  if (user) {
    const iamExists = await user.IAMs.some((iam) => iam.arn === arn);
    if (!iamExists) {
      user.IAMs.push({
        name,
        accessKey,
        secretKey,
        arn,
      });
      await user.save();
      res.json(user);
    } else {
      res.status(400);
      throw new Error("IAM already exists");
    }
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Delete IAM
//! @route   DELETE /api/users/iam
// @access  Private
const deleteIAM = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const user = await User.findById(req.user._id).select("-password");

  if (user) {
    const iamIndex = user.IAMs.findIndex((iam) => iam.name === name);
    if (iamIndex !== -1) {
      user.IAMs.splice(iamIndex, 1);
      await user.save();
      res.json(user);
    } else {
      res.status(400);
      throw new Error("IAM not found");
    }
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  authUser,
  logoutUser,
  registerUser,
  getProfile,
  updateProfile,
  updateAccount,
  addIAM,
  deleteIAM,
};
