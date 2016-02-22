'use strict'

const assert = require('chai').assert

const seneca = require('../srv/arithmetic-game-srv.js')
const OPERATOR_ACTIONS = require('../lib/operation-handler.js')

describe('arithmetic-game-srv integration test', function () {
	describe('create random game', function () {
		let game

		before(function (beforeDone) {
			seneca.act('role:arithmetic-game, cmd:create', function (err, result) {
				if (err) throw err

				game = result
				beforeDone()
			})
		})

		it('should have result equal to <firstOperand> [operation] <secondOperand>', function () {
			assert.equal(
				OPERATOR_ACTIONS[game.operator](game.firstOperand, game.secondOperand) === game.result,
				true)
		})
	})
})
