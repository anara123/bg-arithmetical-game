'use strict'

const assert = require('chai').assert
const seneca = require('seneca')()

seneca
  .use(require('../operator-picker.js'))

var OperatorTypes = require('../operator-types')

describe('role:operator-picker', function () {
  describe('cmd:pick execute 100 times', function () {
    it('should return one of the operators ADD, DIV, MULT, SUB', function (testDone) {
      for (var i = 0; i <= 100; i += 1) {
        seneca.act('role:operator-picker, cmd:pick', function (testIndex, err, result) {
          assert.ok(OperatorTypes.isOperator(result.operator))
          
          if (testIndex === 100) {
            testDone()
          }
        }.bind(this, i))
      }
    })
  })
})
