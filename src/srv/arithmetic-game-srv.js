'use strict'

const APP_PORT = process.env.APP_PORT || 8080
const SRV_HOST = process.env.SRV_HOST || '0.0.0.0'

const seneca = require('seneca')()

seneca
	.use('../arithmetic-game.js')
	.use('../lib/operand-picker.js')
	.use('../lib/operator-picker.js')


if (process.env.NODE_ENV !== 'test') {
	seneca
		.listen({
	    pin:  'role:arithmetic-game, cmd:*',
	    port: APP_PORT,
	    host: SRV_HOST
	  })	
}

module.exports = seneca
