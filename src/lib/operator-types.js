'use strict'

var OperatorTypes = {
  ADD: 1,
  MULT: 2,
  DIV: 3,
  SUB: 4,

  isOperator: function isOperator (operatorValue) {
    return operatorValue >= 1 && operatorValue <= 4
  }
}

module.exports = OperatorTypes
