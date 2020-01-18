const express = require("express");
const projectsRouter = require("./API/projects-router.js");
const resourceRouter = require("./API/resources-router.js");
const taskRouter = require("./API/task-router.js");

const server = express();
server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use("/api/resources", resourceRouter);
server.use("/api/tasks", taskRouter);

server.get("/", (req, res) => {
  res.json({ Message: "Welcome to your projects" });
});

module.exports = server;
