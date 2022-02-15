import AdvancedCalculator from "./filter_example.js";

const calculator = new AdvancedCalculator();
const input = [1,2,3,4];

const sumResult = calculator.sum(input);
console.log('sum result: ' + sumResult);

const sumViaReduceResult = calculator.sumViaReduce(input);
console.log('sum via reduce:' + sumViaReduceResult);

const squeredOddResult = calculator.squerOdd(input);
console.log('odd squered:' + squeredOddResult);