const db = require("../data/db-config");

function getProjects() {
  return db("projects").select();
}

async function addProject(projectData) {
  const [id] = await db("projects").insert(projectData);
  return db("projects")
    .where({ id })
    .first();
}

module.exports = {
  getProjects,
  addProject
};
