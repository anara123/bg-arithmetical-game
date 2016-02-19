'use strict'

const assert = require('assert')

var ArithmeticGame = {
  create: function (args) {
    return Object.create(ArithmeticGame).init(args)
  },

  init: function (args) {
    assert.ok(args.firstOperand, 'required firstOperand')
    assert.ok(args.secondOperand, 'required secondOperand')
    assert.ok(args.operator, 'required operator')
    assert.ok(args.result, 'required result')

    this.firstOperand = args.firstOperand
    this.secondOperand = args.secondOperand
    this.operator = args.operator
    this.result = args.result

    return this
  }
}

module.exports = ArithmeticGame
