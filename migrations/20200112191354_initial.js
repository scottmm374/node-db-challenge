exports.up = async function(knex) {
  await knex.schema.createTable("projects", tbl => {
    tbl.increments("id");
    tbl.string("project_name").notNullable();
    tbl.string("project_desc");
    tbl.boolean("completed").defaultTo(false);
  });

  await knex.schema.createTable("resources", tbl => {
    tbl.increments("id");
    tbl.string("resource_name").notNullable();
    tbl.string("resource_desc");
  });

  await knex.schema.createTable("tasks", tbl => {
    tbl.increments("id");
    tbl.string("task_desc").notNullable();
    tbl.string("notes");
    tbl.boolean("completed").defaultTo(false);
    tbl
      .integer("project_id")
      .references("id")
      .inTable("project")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("projects_resources", tbl => {
    tbl
      .integer("projects_id")
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("resources_id")
      .notNullable()
      .references("id")
      .inTable("resources")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.primary(["projects_id", "resources_id"]);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects_resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};
