const db = require("../data/db-config");

async function getProjects() {
  const data = await db("projects").select();
  return data.map(project => {
    return {
      ...project,
      completed: project.completed === 1 ? true : false
    };
  });
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
