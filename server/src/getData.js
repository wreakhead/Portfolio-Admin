const express = require("express");
const router = express.Router();
const connectDB = require("./utilities/connection");

router.get("/projects", async (req, res, nxt) => {
  try {
    let db = await connectDB.getProjects();
    let data = await db.find();
// .sort({ addedOn: -1 })
    res.status(200).json(data);
  } catch (error) {
    nxt(error);
  }
});
router.get("/about", async (req, res, nxt) => {
  try {
    let db = await connectDB.getAbout();
    let data = await db.find();

    res.status(200).json(data);
  } catch (error) {
    nxt(error);
  }
});

router.get("/project/:id", async (req, res, nxt) => {
  try {
    let id = req.params.id;
    let db = await connectDB.getProjects();
    let data = await db.find({ _id: id });

    res.json(data);
  } catch (error) {
    nxt(error);
  }
});

module.exports = router;
