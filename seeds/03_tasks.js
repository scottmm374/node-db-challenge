exports.seed = async knex => {
  await knex("tasks").insert([
    {
      task_desc: "About me",
      notes: "Fun",
      completed: false,
      project_id: 1
    },
    {
      task_desc: "Blog Tables",
      notes: "Blog",
      completed: false,
      project_id: 1
    },
    {
      task_desc: "Alter Recipe tables",
      notes: "recipe",
      completed: false,
      project_id: 2
    },
    {
      task_desc: "Css-Style",
      notes: "Better",
      completed: false,
      project_id: 2
    },
    {
      task_desc: "Create endpoints",
      notes: "Backend",
      completed: false,
      project_id: 3
    }
  ]);
};
