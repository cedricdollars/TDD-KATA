export class FizzBuzz {
    evaluate(minNumber: number, maxNumber: number) {
        let result: string = "";
        while (minNumber <= maxNumber) {
            result += this.evaluateNumber(minNumber);
            minNumber++;
        }

        return result;
    }
    private evaluateNumber(myNumber: number) {
        if (myNumber % 15 === 0) return "fizzbuzz";
        if (myNumber % 3 === 0) return "fizz";
        if (myNumber % 5 === 0) return "buzz";
        return myNumber;
    }
}