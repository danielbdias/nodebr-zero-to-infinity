const logger = require('../infra/logger')

module.exports = function saveTheWorld(weaponOption) {
  const weapon = getWeaponsInArmory(weaponOption)

  const monsters = findingMonsters()

  const success = fightingMonsters(weapon, monsters)

  const message = success ? 'The world is saved !' : 'Oh no! Too many monsters! Try again!'

  return { success, message }
}

function getWeaponsInArmory(weapon = 'sword') {
  logger.info('Getting weapon in armory...', { weapon })
  return `a ${weapon}`
}

function findingMonsters() {
  logger.info('Finding monsters to defeat...')
  return 1 + Math.floor(Math.random() * 10)
}

function fightingMonsters(weapon, monsters) {
  logger.info('Fighting monsters !')

  const success = (weapon.length > monsters)

  if (!success) {
    logger.warn('Woops! We cannot use this weapon to fight all monsters!', { weapon, monsters })
  }

  return success
}
