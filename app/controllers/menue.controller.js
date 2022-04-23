const menueModel = require("../../db/models/menue.model");
class Menue {
  static addMenue = async (req, res) => {
    try {
      const data = new menueModel(req.body);
      await data.save();
      res.status(200).send({
        apiStatus: true,
        data: data,
        message: "Added",
      });
    } catch (e) {
      res.status(400).send({
        apiStatus: false,
        data: e,
        message: e.message,
      });
    }
  };
  static allMenues = async (req, res) => {
    try {
      const menues = await menueModel.find();
      res.status(200).send({
        apiStatus: true,
        data: menues,
        message: "All Menues",
      });
    } catch (e) {
      res.status(400).send({
        apiStatus: false,
        data: e,
        message: e.message,
      });
    }
  };
  static singleMenue = async (req, res) => {
    try {
      const menue = await menueModel.findById(req.params.id);
      res.status(200).send({
        apiStatus: true,
        data: menue,
        message: "Single Menue",
      });
    } catch (e) {
      res.status(400).send({
        apiStatus: false,
        data: e,
        message: e.message,
      });
    }
  };
  static editMenue = async (req, res) => {
    try {
      const menue = await menueModel.findByIdAndUpdate(
        req.params.id,
        req.body,

        { runValidators: true, new: true }
      );
      res.status(200).send({
        apiStatus: true,
        data: menue,
        messgae: "Edit Menue",
      });
    } catch (e) {
      res.status(400).send({
        apiStatus: false,
        data: e,
        messgae: e.message,
      });
    }
  };
  static deleteMenue = async (req, res) => {
    try {
      const menue = await categoryModel.findByIdAndDelete(req.params.id);
      res.status(200).send({
        apiStatus: true,
        data: menue,
        message: "Delete Category",
      });
    } catch (e) {
      res.status(400).send({
        apiStatus: false,
        message: e.message,
      });
    }
  };
}

module.exports = Menue;
