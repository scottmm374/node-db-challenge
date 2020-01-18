const db = require("../data/db-config");

async function getTasks() {
  const data = await db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select(
      "t.id",
      "t.task_desc",
      "t.notes",
      "t.project_id",
      "p.project_name",
      "p.project_desc",
      "t.completed"
    );

  return data.map(task => {
    return {
      ...task,
      completed: task.completed === 1 ? true : false
    };
  });
}

async function addTask(task) {
  const [id] = await db("tasks").insert(task);
  return db("tasks")
    .where({ id })
    .first();
}
module.exports = {
  getTasks,
  addTask
};
