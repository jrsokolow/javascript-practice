class BasicCalculator {
    
    sum = (args) => {
        let sum = 0;
        args.forEach(x => sum = sum + x);
        return sum;
    };

    sumViaReduce = (args) => {
        return args.reduce((prev, current, index, args) => {
            // console.log('prev: ' + prev);
            // console.log('current: ' + current);
            return prev + current;
        }, 0);
    }

}

class AdvancedCalculator extends BasicCalculator {
    squerOdd = (args) => {
        return args.filter(value => value % 2 > 0).map(value => value * value);
    }
}

const calculator = new AdvancedCalculator();
const input = [1,2,3,4];

const sumResult = calculator.sum(input);
console.log('sum result: ' + sumResult);

const sumViaReduceResult = calculator.sumViaReduce(input);
console.log('sum via reduce:' + sumViaReduceResult);

const squeredOddResult = calculator.squerOdd(input);
console.log('odd squered:' + squeredOddResult);

