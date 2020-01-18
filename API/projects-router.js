const express = require("express");
const project = require("./projects-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await project.getProjects();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Something went wrong" });
  }
});

router.post("/", async (req, res) => {
  const newProject = req.body;
  try {
    const data = await project.addProject(newProject);
    res.status(201).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Could not post project" });
  }
});

module.exports = router;
