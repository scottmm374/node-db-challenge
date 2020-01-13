exports.up = async function(knex) {
  await knex.schema.createTable("projects", tbl => {
    tbl.increments("id");
    tbl
      .string("project_name")
      .unique()
      .notNullable();
    tbl.string("project_desc");
    tbl.boolean("completed").defaultTo(false);
  });

  await knex.schema.createTable("resources", tbl => {
    tbl.increments("id");
    tbl
      .string("resource_name")
      .unique()
      .notNullable();
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

  await knex.schema.createTable("projects_resources", table => {
    table
      .integer("project_id")
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("resource_id")
      .notNullable()
      .references("id")
      .inTable("resource")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.primary(["project_id", "resource_id"]);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects_resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};
