const path = require('path')
const express = require('express')
const server = express()

const leagues = require('./routes/leagues')
const teams = require('./routes/teams')
const players = require('./routes/players')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/leagues', leagues)
server.use('/api/v1/teams', teams)
server.use('/api/v1/players', players)

module.exports = server
