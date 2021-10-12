const mongoose = require("mongoose");
const { Schema } = require("mongoose");

mongoose.Schema.promise = global.Promise;

mongoose.set("useCreateIndex", true);

require("dotenv").config();
const URL = process.env.URL;

const projectData = Schema(
  {
    title: String,
    tech: String,
    describe: String,
    linkSource: String,
    linkAction: String,
    type: String,
  },
  { timestamps: true },
  { collection: "projects" }
);

const aboutData = Schema(
  {
    title: String,
    image: String,
    describe: String,
  },
  { timestamps: true },
  { collection: "about" }
);

const admin = Schema(
  {
    mobile: {
      type: String,
      require: true,
      min: 10,
      max: 10,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
      max: 20,
    },
  },
  { collection: "admin" }
);

let collection = {};

collection.getProjects = async () => {
  try {
    let database = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    let model = await database.model("projects", projectData);
    return model;
  } catch (error) {
    let err = new Error("projectDB connection failed");
    err.status = 500;
    throw err;
  }
};
collection.getAbout = async () => {
  try {
    let database = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    let model = await database.model("about", aboutData);
    return model;
  } catch (error) {
    let err = new Error("aboutDB connection failed");
    err.status = 500;
    throw err;
  }
};

collection.getAdmin = async () => {
  try {
    let database = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    let model = await database.model("admin", admin);
    return model;
  } catch (error) {
    let err = new Error("adminDB connection failed");
    err.status = 500;
    throw err;
  }
};
module.exports = collection;
