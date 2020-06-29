exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        { id: 1, firstname: 'Steph', surname: 'Curry', number: 30, isCaptain: true, team_id: 1 },
        { id: 2, firstname: 'Draymond', surname: 'Green', number: 23, isCaptain: false, team_id: 1 },
        { id: 3, firstname: 'Klay', surname: 'Thompson', number: 11, isCaptain: false, team_id: 1 },
        { id: 4, firstname: 'Andrew', surname: 'Wiggins', number: 22, isCaptain: false, team_id: 1 }
      ])
    })
}
