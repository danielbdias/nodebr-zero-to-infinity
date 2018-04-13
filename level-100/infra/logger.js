const { transports: { Console } } = require('winston')
const WinstonLogger = require('winston').Logger

class Logger {
  constructor (transport, injection) {
    Object.assign(this, {
      error: this.callLogger.bind(this, 'error'),
      warn: this.callLogger.bind(this, 'warn'),
      info: this.callLogger.bind(this, 'info'),
      verbose: this.callLogger.bind(this, 'verbose'),
      debug: this.callLogger.bind(this, 'debug'),
      silly: this.callLogger.bind(this, 'silly')
    })

    this.transport = transport
    this.loggerInstance = new WinstonLogger({ transports: [this.transport] })
  }

  getExecution (deep) {
    const stack = new Error().stack
    return stack.split('\n')[deep]
  }

  callLogger (level, message, contents) {
    const execution = this.getExecution(3)
    const logObject = { execution, message, contents }

    this.loggerInstance.log(level, logObject)
  }
}

const consoleTransport = new Console({
  json: true,
  stringify: true,
  level: 'info'
})

module.exports = new Logger(consoleTransport)
