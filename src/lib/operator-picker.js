'use strict'

module.exports = function operator_picker (options) {
  const seneca = this

  seneca.add('role:operator-picker, cmd:pick', function (args, done) {
    var operator = Math.floor(Math.random() * 4) + 1
    return done(null, { operator: operator }) 
  })
}
