import BasicCalculator from './reduce_example.js';

export default class AdvancedCalculator extends BasicCalculator {
    squerOdd = (args) => {
        return args.filter(value => value % 2 > 0).map(value => value * value);
    }
}