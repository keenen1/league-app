exports.up = function (knex) {
  return knex.schema.createTable('players', (table) => {
    table.increments('id').primary()
    table.string('firstname')
    table.string('surname')
    table.integer('number')
    table.boolean('isCaptain')
    table.integer('team_id')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('players')
}
