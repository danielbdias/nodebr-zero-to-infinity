module.exports = function saveTheWorld(weaponOption) {
  const weapon = getWeaponsInArmory(weaponOption)

  const monsters = findingMonsters()

  const success = fightingMonsters(weapon, monsters)

  const message = success ? 'The world is saved !' : 'Oh no! Too many monsters! Try again!'

  return { success, message }
}

function getWeaponsInArmory(weapon = 'sword') {
  return `a ${weapon}`
}

function findingMonsters() {
  return 1 + Math.floor(Math.random() * 10)
}

function fightingMonsters(weapon, monsters) {
  return (weapon.length > monsters)
}
