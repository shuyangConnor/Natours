const _ = require('lodash');
const AppError = require('./utils/appError');

const originalInstance = new AppError('Something went wrong', 404);

// Clone the instance using _.cloneDeep()
const clonedInstance = _.cloneDeep(originalInstance);

// Example usage of clonedInstance
console.log(clonedInstance.message); // Output: 'Something went wrong'
console.log(clonedInstance.statusCode); // Output: 404
console.log(clonedInstance.status); // Output: 'fail'
console.log(clonedInstance instanceof AppError); // Output: true
