const express = require("express");
const projectsRouter = require("./API/projects-router.js");

const server = express();
server.use(express.json());
server.use("/api/projects", projectsRouter);

server.get("/", (req, res) => {
  res.json({ Message: "Welcome to your projects" });
});

module.exports = server;
