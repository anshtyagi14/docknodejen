// Import the 'assert' module for performing assertions in tests
var assert = require('assert');

// Define a simple test function
function test() {
  // Assert that 2 + 2 equals 4
  assert.equal(2 + 2, 4);
}

// Check if this module is the main module being executed
if (module == require.main) {
  // If so, run the test function using the 'test' module
  require('test').run(test);
}
