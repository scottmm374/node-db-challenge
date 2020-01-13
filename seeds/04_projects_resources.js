exports.seed = async knex => {
  await knex("resources").insert([
    {
      project_id: 1,
      resource_id: 1
    },
    {
      project_id: 1,
      resource_id: 2
    },
    {
      project_id: 1,
      resource_id: 3
    },
    {
      project_id: 2,
      resource_id: 1
    },
    {
      project_id: 2,
      resource_id: 3
    },
    {
      project_id: 2,
      resource_id: 4
    },
    {
      project_id: 3,
      resource_id: 4
    },
    {
      project_id: 3,
      resource_id: 1
    },
    {
      project_id: 4,
      resource_id: 1
    },
    {
      project_id: 4,
      resource_id: 2
    }
  ]);
};

// Error: Error while executing "D:\Webpt8\WebAPI-Node\node-db-challenge\seeds\04_projects_resources.js" seed: insert into `resources` (`project_id`, `resources_id`) select 1 as `project_id`, 1 as `resources_id` union all select 1 as `project_id`, 2 as `resources_id` union all select 1 as `project_id`, 3 as `resources_id` union all select 2 as `project_id`, 1 as `resources_id` union all select 2 as `project_id`, 3 as `resources_id` union all select 2 as `project_id`, 4 as `resources_id` union all select 3 as `project_id`, 4 as `resources_id` union all select 3 as `project_id`, 1 as `resources_id` union all select 4 as `project_id`, 1 as `resources_id` union all select 4 as `project_id`, 2 as `resources_id` - SQLITE_ERROR: table resources has no column named project_id
//     at Seeder._waterfallBatch (D:\Webpt8\WebAPI-Node\node-db-challenge\node_modules\knex\lib\seed\Seeder.js:120:23)
// / Error: SQLITE_ERROR: table resources has no column named project_id
