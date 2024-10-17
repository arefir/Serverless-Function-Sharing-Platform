import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const functionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    iamRole: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "IAMRole",
      required: true,
    },
    environmentVariables: {
      type: Map,
      of: String,
    },
    views: {
      type: Number,
      default: 0,
      required: true,
    },
    uses: {
      type: Number,
      default: 0,
      required: true,
    },
    reviews: [reviewSchema],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Function = mongoose.model("Function", functionSchema);

export default Function;
