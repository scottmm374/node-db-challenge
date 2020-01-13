const db = require("../data/db-config");

function getTasks() {
  return db("tasks")
    .select(
      "t.id",
      "t.task_desc",
      "t.notes",
      "t.project_id",
      "p.project_name",
      "p.project_desc",
      "t.completed"
    )
    .from("tasks as t")
    .join("projects as p", "t.project_id", "p.id");
}

async function addTask(tasksData) {
  const [id] = await db("tasks").insert(tasksData);
  return db("tasks")
    .where({ id })
    .first();
}

module.exports = {
  getTasks,
  addTask
};
