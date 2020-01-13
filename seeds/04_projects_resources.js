exports.seed = async knex => {
  await knex("resources").insert([
    {
      projects_id: 1,
      resources_id: 1
    },
    {
      projects_id: 1,
      resources_id: 2
    },
    {
      projects_id: 1,
      resources_id: 3
    },
    {
      projects_id: 2,
      resources_id: 1
    },
    {
      projects_id: 2,
      resources_id: 3
    },
    {
      projects_id: 2,
      resources_id: 4
    },
    {
      projects_id: 3,
      resources_id: 4
    },
    {
      projects_id: 3,
      resources_id: 1
    },
    {
      projects_id: 4,
      resources_id: 1
    },
    {
      projects_id: 4,
      resources_id: 2
    }
  ]);
};

// Error: Error while executing "D:\Webpt8\WebAPI-Node\node-db-challenge\seeds\04_projects_resources.js" seed: insert into `resources` (`projects_id`, `resources_id`) select 1 as `projects_id`, 1 as `resources_id` union all select 1 as `projects_id`, 2 as `resources_id` union all select 1 as `projects_id`, 3 as `resources_id` union all select 2 as `projects_id`, 1 as `resources_id` union all select 2 as `projects_id`, 3 as `resources_id` union all select 2 as `projects_id`, 4 as `resources_id` union all select 3 as `projects_id`, 4 as `resources_id` union all select 3 as `projects_id`, 1 as `resources_id` union all select 4 as `projects_id`, 1 as `resources_id` union all select 4 as `projects_id`, 2 as `resources_id` - SQLITE_ERROR: table resources has no column named projects_id
//     at Seeder._waterfallBatch (D:\Webpt8\WebAPI-Node\node-db-challenge\node_modules\knex\lib\seed\Seeder.js:120:23)
// Error: SQLITE_ERROR: table resources has no column named projects_id
