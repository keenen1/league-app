exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        { id: 1, firstname: 'Steph', surname: 'Curry', number: 30, isCaptain: true, team_id: 1 },
        { id: 2, firstname: 'Draymond', surname: 'Green', number: 23, isCaptain: false, team_id: 1 },
        { id: 3, firstname: 'Klay', surname: 'Thompson', number: 11, isCaptain: false, team_id: 1 },
        { id: 4, firstname: 'Andrew', surname: 'Wiggins', number: 22, isCaptain: false, team_id: 1 },
        { id: 5, firstname: 'Paul', surname: 'George', number: 13, isCaptain: false, team_id: 2 },
        { id: 6, firstname: 'Kawhi', surname: 'Leonard', number: 2, isCaptain: true, team_id: 2 },
        { id: 7, firstname: 'Lou', surname: 'Williams', number: 23, isCaptain: false, team_id: 2 },
        { id: 8, firstname: 'Lebron', surname: 'James', number: 23, isCaptain: true, team_id: 3 },
        { id: 9, firstname: 'Anthony', surname: 'Davis', number: 3, isCaptain: false, team_id: 3 },
        { id: 10, firstname: 'Kyle', surname: 'Kuzma', number: 0, isCaptain: false, team_id: 3 },
        { id: 11, firstname: 'Dwight', surname: 'Howard', number: 39, isCaptain: false, team_id: 3 }
      ])
    })
}
