'use strict'

module.exports = function operand_picker (options) {
  const seneca = this

  seneca.add('role:operand-picker, cmd:pick', function (args, done) {
  	const min = args.min
  	const max = args.max

    const firstOperand = Math.random() * (max - min) + min
    const secondOperand = Math.random() * (max - min) + min

    return done(null, { 
    	firstOperand: firstOperand,
    	secondOperand: secondOperand
    }) 
  })
}
