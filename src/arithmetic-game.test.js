'use strict'

const assert = require('chai').assert
const seneca = require('seneca')()

seneca
  .use('./arithmetic-game.js')

const OperatorTypes = require('./lib/operator-types.js')
const ArithmeticGame = require('./lib/arithmetic-game.js')

describe('arithmetic game', function () {
  describe('creation of random game', function () {
    const args = {}
    let game

    before(function (beforeDone) {
      seneca
        .add('role:arithmetic-game, internal_cmd:pick-operands', function (args, done) {
          done(null, {
            firstOperand: 5,
            secondOperand: 3
          })
        })
        .add('role:arithmetic-game, internal_cmd:pick-operator', function (args, done) {
          done(null, {
            operator: OperatorTypes.ADD
          })
        })

      seneca
        .act('role:arithmetic-game, cmd:create', args, function (err, result) {
          if (err) throw err
          game = result
          beforeDone()
        })
    })

    it('game should have firstOperand', function () {
      assert.equal(game.firstOperand, 5)
    })

    it('game should have secondOperand', function () {
      assert.equal(game.secondOperand, 3)
    })

    it('game should have operator', function () {
      assert.equal(game.operator, OperatorTypes.ADD)
    })

    it('game should have result', function () {
      assert.equal(game.result, 8)
    })
  })
})
