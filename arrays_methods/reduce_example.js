export default class BasicCalculator {
    
    sum = (args) => {
        let sum = 0;
        args.forEach(x => sum = sum + x);
        return sum;
    };

    sumViaReduce = (args) => {
        return args.reduce((prev, current, index, args) => {
            return prev + current;
        }, 0);
    }

}

