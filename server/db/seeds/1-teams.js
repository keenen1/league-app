exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('teams').del()
    .then(function () {
      // Inserts seed entries
      return knex('teams').insert([
        { id: 1, name: 'Warriors', league_id: 3 },
        { id: 2, name: 'Raptors', league_id: 3 },
        { id: 3, name: 'Lakers', league_id: 3 }
      ])
    })
}
