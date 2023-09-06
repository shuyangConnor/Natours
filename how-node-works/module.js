console.log(arguments)

//module.exports
const C = require('./test-module-1.js')
const calc1 = new C()
console.log(calc1.add(2, 5))

//exports
// const calc2 = require('./test-module-2.js')
const { add: calc2add } = require('./test-module-2.js')
console.log(calc2add(2, 6))

//caching
require('./test-module-3.js')()
require('./test-module-3.js')()
require('./test-module-3.js')()
