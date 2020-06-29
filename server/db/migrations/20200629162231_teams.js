exports.up = function (knex) {
  return knex.schema.createTable('teams', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('league_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('teams')
}
