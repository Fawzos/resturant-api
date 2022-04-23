const mongoose = require("mongoose");

const menueSchema = mongoose.Schema(
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
  },
  { timestamps: true }
);
menueSchema.methods.toJSON = function () {
  return this.toObject();
};

const Menue = mongoose.model("Menue", menueSchema);
module.exports = Menue;
