'use strict'

var Operators = require('./operators')
var numberPicker = require('./number-picker')
var operatorPicker = require('./operator-picker')

var OPERAND_ACTIONS = {
  [Operators.ADD]: function (first, second) {
    return first + second
  },

  [Operators.SUB]: function (first, second) {
    return first - second
  },

  [Operators.MULT]: function (first, second) {
    return first * second
  },

  [Operators.DIV]: function (first, second) {
    return first / second
  }
}

var ArithmeticGame = {
  createRandom: function (args) {
    return Object.create(ArithmeticGame).init(args)
  },

  init: function (args) {
    var numberPicker = args.numberPicker || numberPicker
    var operatorPicker = args.operatorPicker || operatorPicker

    this.firstOperand = numberPicker.pick(0, 100)
    this.secondOperand = numberPicker.pick(0, 100)

    this.operator = operatorPicker.pick()

    this.result = OPERAND_ACTIONS[this.operator](this.firstOperand, this.secondOperand)

    return this
  },

}

module.exports = ArithmeticGame
