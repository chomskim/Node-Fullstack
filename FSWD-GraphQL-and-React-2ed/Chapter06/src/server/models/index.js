import Sequelize from 'sequelize'
import logger from '../helpers/logger'
require('dotenv').config()
logger.log({
  level: 'info',
  message: `model index.js process.env.NODE_ENV=${process.env.NODE_ENV}`,
})
if (process.env.NODE_ENV === 'development') {
  require('babel-plugin-require-context-hook/register')()
}
// require('babel-plugin-require-context-hook/register')();
export default (sequelize) => {
  let db = {}

  const context = require.context(
    '.',
    true,
    /^\.\/(?!index\.js).*\.js$/,
    'sync'
  )
  context
    .keys()
    .map(context)
    .forEach((module) => {
      const model = module(sequelize, Sequelize)
      db[model.name] = model
    })

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db)
    }
  })

  return db
}
