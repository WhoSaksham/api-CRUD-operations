const express = require("express");
const Detail = require("../models/detail");
const router = express.Router();


// Get All Details
router.get("/", async (req, res) => {
  try {
    const getdetail = await Detail.find();
    res.json(getdetail);
  } catch (err) {
    res.json(err);
  }
});


// Get Single details by id
router.get("/:detailId", async (req, res) => {
  const getId = req.params.detailId;
  try {
    const getIdDetail = await Detail.find({_id: getId});
    res.json(getIdDetail);
  } catch (err) {
    res.json(err);
  }
});


// Post details
router.post("/", async (req, res) => {
  try {
    const postDetails = await Detail.create(req.body);
    res.json(postDetails);
  } catch (err) {
    res.json(err);
  }
});


// Update details by id
router.put("/:detailId", async (req, res) => {
  const detailsId = req.params.detailId;
  try {
    const updateDetails = await Detail.updateOne(
      { _id: req.params.detailsId },
      req.body
    );
    res.json(updateDetails);
  } catch (err) {
    res.json(err);
  }
});


// Delete details by id
router.delete("/:detailId", async (req, res) => {
  try {
    await Detail.deleteOne({ _id: req.params.detailId });
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    res.json(err);
  }
});


module.exports = router;
