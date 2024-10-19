import {add, subtract, multiply, divide } from './mathModule.js';

import {toUpperCase, toLowerCase, reverseString, getStringLenght } from './stringManipulationModule.js';

console.log('Math Module:');
console.log('Addition (10 + 10):', add(10, 10));
console.log('Subtraction (20 - 5):', subtract(20, 5));
console.log('Multiplication (6 * 6):', multiply(6, 6));
console.log('Division (81 / 9):', divide(81, 9));
console.log('Division (18 / 0):', divide(18, 0)); // Throws an error

console.log('\nString Module:');
console.log('Uppercase ("the joker"):', toUpperCase('the joker'));
console.log('Lowercase ("THE JOKER"):', toLowerCase('THE JOKER'));
console.log('Reverse String ("The Joker vs Bane"):', reverseString('The Joker vs Bane'));
console.log('String Length ("Bane world"):', getStringLenght('Bane world'));
