const express = require("express");
const router = express.Router();
const bcrpyt = require("bcrypt");
const auth = require("./utilities/auth");
const connectDB = require("./utilities/connection");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const TOKEN_KEY = process.env.TOKEN_KEY;

router.post("/signup", async (req, res, err) => {
  try {
    const data = req.body;
    //hashing password
    const salt = await bcrpyt.genSalt();
    const hashedPass = await bcrpyt.hash(data.password, salt);
    //updating user
    const adminModel = await connectDB.getAdmin();
    const newAdmin = await new adminModel({
      mobile: data.mobile,
      password: hashedPass,
    });
    const update = await newAdmin.save();
    res.status(200).json(update);
  } catch (err) {
    next(err);
  }
});

//login
router.post("/login", async (req, res, err) => {
  try {
    const data = req.body;
    const adminModel = await connectDB.getAdmin();
    const findUser = await adminModel.findOne({ mobile: data.mobile });
    if (findUser) {
      const validatePass = await bcrpyt.compare(
        data.password,
        findUser.password
      );
      if (validatePass) {
        const token = await jwt.sign({ mobile: findUser.mobile }, TOKEN_KEY, {
          expiresIn: "20h",
        });
        res.status(200).json({ token: token, mobile: findUser.mobile });
      } else res.status(403).json("Unauthorized password");
    } else res.status(403).json("Unauthorized user");
  } catch (err) {
    next(err);
  }
});

//update admin
router.put("/update", auth.authToken, async (req, res, err) => {
  try {
    const data = req.body;
    const adminModel = await connectDB.getAdmin();
    const findUser = await adminModel.findOne({ mobile: req.id.mobile });
    if (findUser) {
      const validatePass = await bcrpyt.compare(
        data.password,
        findUser.password
      );
      if (validatePass) {
        const salt = await bcrpyt.genSalt();
        const newHashedPass = await bcrpyt.hash(data.newPassword, salt);
        const updateAdmin = await adminModel.findOneAndUpdate(
          {
            mobile: req.id.mobile,
          },
          { $set: { password: newHashedPass } }
        );
        if (updateAdmin) res.status(200).json("Updated");
        else res.status(500).json("update error");
      } else res.status(403).json("wrong password");
    } else res.status(403).json("not admin!");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
