'use strict'

const OperatorTypes = require('./operator-types.js')

module.exports = {
  [OperatorTypes.ADD]: function (first, second) {
    return first + second
  },

  [OperatorTypes.SUB]: function (first, second) {
    return first - second
  },

  [OperatorTypes.MULT]: function (first, second) {
    return first * second
  },

  [OperatorTypes.DIV]: function (first, second) {
    return first / second
  }
}
