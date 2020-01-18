const express = require("express");
const resource = require("./resources-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await resource.getResources();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Something went wrong" });
  }
});

router.post("/", async (req, res) => {
  const newResource = req.body;
  try {
    const data = await resource.addResource(newResource);
    res.status(201).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Could not post resource" });
  }
});

module.exports = router;
