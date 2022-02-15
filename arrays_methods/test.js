import AdvancedCalculator from "./filter_example.js";
import { convertToMeters } from "./map_example.js";

const calculator = new AdvancedCalculator();
const input = [1,2,3,4];

const sumResult = calculator.sum(input);
console.log('sum result: ' + sumResult);

const sumViaReduceResult = calculator.sumViaReduce(input);
console.log('sum via reduce:' + sumViaReduceResult);

const squeredOddResult = calculator.squerOdd(input);
console.log('odd squered:' + squeredOddResult);

const instancesInCentemeters = [100, 200, 300];
const instancesInMeters = convertToMeters(instancesInCentemeters);
console.log(1 === instancesInMeters[0].distanceInMeters);
console.log(2 === instancesInMeters[1].distanceInMeters);
console.log(3 === instancesInMeters[2].distanceInMeters);