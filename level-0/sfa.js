const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  const weapon = getWeaponsInArmory(req.query.weapon)

  const monsters = findingMonsters()

  const success = fightingMonsters(weapon, monsters)

  if (!success) {
    res.status(503).send('Oh no! Too many monsters! Try again!')
    return
  }

  res.status(200).send('The world is saved !')
})

const server = app.listen(3000, function () {
  console.log(`App running on port ${server.address().port}.`)
})

function getWeaponsInArmory(weapon = 'sword') {
  return `a ${weapon}`
}

function findingMonsters() {
  return 1 + Math.floor(Math.random() * 10)
}

function fightingMonsters(weapon, monsters) {
  return (weapon.length > monsters)
}
