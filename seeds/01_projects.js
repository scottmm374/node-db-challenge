exports.seed = async knex => {
  await knex("projects").insert([
    {
      project_name: "My Portfolio",
      project_desc: "Portfolio",
      completed: false
    },
    {
      project_name: "Recipe App",
      project_desc: "Family recipes",
      completed: false
    },
    {
      project_name: "Med-App",
      project_desc: "Micro journal for Medication interactions",
      completed: false
    }
  ]);
};
