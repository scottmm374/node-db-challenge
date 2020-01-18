exports.seed = async knex => {
  await knex("resources").insert([
    {
      resource_name: "css tricks",
      resource_desc: "css help"
    },
    {
      resource_name: "reacstrap",
      resource_desc: "app layout and components"
    },
    {
      resource_name: "react",
      resource_desc: "build app"
    },
    {
      resource_name: "SQL",
      resource_desc: " DB"
    }
  ]);
};
