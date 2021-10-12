const expres = require("express");
const router = expres.Router();
const connectDB = require("./utilities/connection");
const auth = require("./utilities/auth");

//add new project
router.post("/addProject", auth.authToken, async (req, res, err) => {
  try {
    const data = req.body;
    const projectModel = await connectDB.getProjects();
    const newProject = new projectModel(data);
    const updateProject = await newProject.save();
    res.status(200).json(updateProject);
  } catch (err) {
    next(err);
  }
});
//edit project
router.put("/editProject", auth.authToken, async (req, res, err) => {
  try {
    const data = req.body;
    const projectModel = await connectDB.getProjects();
    const updateProject = await projectModel.findOneAndUpdate(
      { _id: data._id },
      { $set: data }
    );
    res.status(200).json("project updated");
  } catch (err) {
    next(err);
  }
});

//add about
router.post("/addAbout", auth.authToken, async (req, res, err) => {
  try {
    const data = req.body;
    const aboutModel = await connectDB.getAbout();
    const newAbout = new aboutModel(data);
    const updateProject = await newAbout.save();
    res.status(200).json(newAbout);
  } catch (err) {
    next(err);
  }
});
//edit about
router.put("/editAbout", auth.authToken, async (req, res, err) => {
  try {
    const data = req.body;
    const aboutModel = await connectDB.getAbout();
    const updateAbout = await aboutModel.findOneAndUpdate(
      { _id: data._id },
      { $set: data }
    );
    res.status(200).json("about updated");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
