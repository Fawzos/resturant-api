const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
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
});
categorySchema.methods.toJSON = function () {
  const data = this.toObject();
  delete data.__v;
  return data;
};

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
