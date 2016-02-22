'use strict'

module.exports = function operand_picker (options) {
  const seneca = this

  seneca.add('role:operand-picker, cmd:pick', function (args, done) {
  	const min = args.min || 1
  	const max = args.max || 100

    const firstOperand = Math.round(Math.random() * (max - min) + min)
    const secondOperand = Math.round(Math.random() * (max - min) + min)

    return done(null, { 
    	firstOperand: firstOperand,
    	secondOperand: secondOperand
    }) 
  })
}
