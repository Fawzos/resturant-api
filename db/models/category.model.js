const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
      require: false,
    },
    categoryImage: {
      type: String,
    },
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
  },
  { timestamps: true }
);
categorySchema.methods.toJSON = function () {
  return this.toObject();
};

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
