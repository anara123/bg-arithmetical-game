'use strict'

const assert = require('chai').assert
const seneca = require('seneca')()

seneca
  .use(require('../operand-picker.js'))

describe('role:operand-picker', function () {
  describe('cmd:pick execute 100 times', function () {
    it('should return numbers between 1-100', function (testDone) {
      const args = { 
        min: 1, 
        max: 100 
      }

      for (var i = 0; i <= 100; i += 1) {
        seneca.act('role:operand-picker, cmd:pick', args, function (testIndex, err, operands) {
          assert.isTrue(operands.firstOperand >= 1 && operands.firstOperand <= 100, 'firstOperand is invalid ' + operands.firstOperand)
          assert.isTrue(operands.secondOperand >= 1 && operands.secondOperand <= 100, 'secondOperand is invalid ' + operands.secondOperand)
          
          if (testIndex === 100) {
            testDone()
          }
        }.bind(this, i))
      }
    })
  })
})
