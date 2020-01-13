const express = require("express");
const tasks = require("./task-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await tasks.getTasks();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Something went wrong" });
  }
});

router.post("/projects/:id/", async (req, res) => {
  const newTask = req.body;
  const { id } = req.params;
  try {
    const data = await tasks.addTask(newTask);
    res.status(201).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Could not post task" });
  }
});

module.exports = router;
