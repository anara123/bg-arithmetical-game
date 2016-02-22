'use strict'

const Promises = require('bluebird')

const ArithmeticGame = require('./lib/arithmetic-game.js')
const OperatorTypes = require('./lib/operator-types.js')
const OPERATOR_ACTIONS = require('./lib/operation-handler.js')

module.exports = function arithmetic_game (options) {

  const seneca = this
  const act = Promises.promisify(seneca.act, {
    context: seneca
  })

  seneca.add('role:arithmetic-game, cmd:create', function (args, done) {
    Promises.all([
        act('role:operand-picker, cmd:pick'),
				act('role:operator-picker, cmd:pick')
			])
			.then(results => {
				const firstOperand = results[0].firstOperand
        const secondOperand = results[0].secondOperand
				const operator = results[1].operator

        let game

        if (OperatorTypes.DIV === operator) {
          let newFirstOperand = OPERATOR_ACTIONS[OperatorTypes.MULT](firstOperand, secondOperand)
          game = ArithmeticGame.create({
            firstOperand: newFirstOperand,
            secondOperand: secondOperand,
            operator: operator,
            result: firstOperand
          })
        } else {
          const result = OPERATOR_ACTIONS[operator](firstOperand, secondOperand)
          game = ArithmeticGame.create({
            firstOperand: firstOperand,
            secondOperand: secondOperand,
            operator: operator,
            result: result
          })
        }

        return done(null, game)
			})
			.catch(err => {
        return done(err)
			})
  })
}
