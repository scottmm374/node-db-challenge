const db = require("../data/db-config");

function getResources() {
  return db("resources").select();
}

async function addResource(resourceData) {
  const [id] = await db("resources").insert(resourceData);
  return db("resources")
    .where({ id })
    .first();
}

module.exports = {
  getResources,
  addResource
};
