'use strict'

var assert = require('assert')

var Operators = require('./operators')
var ArithmeticGame = require('./arithmetic-game.js')

function numberPickerFake (first, second) {
  var index = 0
  return {
    pick: function () {
      if (index === 0) {
        index += 1
        return first
      } else {
        return second
      }
    }
  }
}

function operatorPickerFake (operator) {
  return {
    pick: function () {
      return operator
    }
  }
}

describe('arithmetic game model', function () {
  describe('#createRandom', function () {
    var game
    before(function () {
      game = ArithmeticGame.createRandom({
        numberPicker: numberPickerFake(5, 3),
        operatorPicker: operatorPickerFake(Operators.ADD)
      })
    })

    it('should contain firstOperand', function () {
      assert.equal(game.firstOperand, 5)
    })

    it('should contain secondOperand', function () {
      assert.equal(game.secondOperand, 3)
    })

    it('should contain operator', function () {
      assert.equal(game.operator, Operators.ADD)
    })

    it('should contain the result', function () {
      assert.equal(game.result, 8)
    })
  })
})
