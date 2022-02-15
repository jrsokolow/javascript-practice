import AdvancedCalculator from "./filter_example.js";
import { convertToMeters } from "./map_example.js";

const calculator = new AdvancedCalculator();
const input = [1,2,3,4];

const sumResult = calculator.sum(input);
console.assert(10 === sumResult, "For each example test failed");

const sumViaReduceResult = calculator.sumViaReduce(input);
console.assert(10 === sumViaReduceResult), "Reduce example test failed";

const squeredOddResult = calculator.squerOdd(input);
console.assert(1,9 === squeredOddResult, "Filter example test failed");

const instancesInCentemeters = [100, 200, 300];
const instancesInMeters = convertToMeters(instancesInCentemeters);
console.assert(1 === instancesInMeters[0].distanceInMeters, "Filter map test failed for 1m");
console.assert(2 === instancesInMeters[1].distanceInMeters, "Filter map test failed for 2m");
console.assert(3 === instancesInMeters[2].distanceInMeters, "Filter map test failed for 3m");