import { FizzBuzz } from './fizzbuzz'

describe('Fizzbuzz', () => {
    let fizzbuzz: FizzBuzz;
    beforeEach(() => {
        fizzbuzz = new FizzBuzz();
    });
    it('should return 1 if number is 1', () => {
        expect(fizzbuzz.evaluate(1, 1)).toBe("1")
    })
    it("should return 2 if number is 2", (done) => {
        expect(fizzbuzz.evaluate(2, 2)).toBe("2");
        done();
    });
    it("should return fizz for multiple of 3", (done) => {
        expect(fizzbuzz.evaluate(3, 3)).toBe("fizz");
        done();
    });
    it("should return buzz for multiple of 5", (done) => {
        expect(fizzbuzz.evaluate(5, 5)).toBe("buzz");
        done();
    });
    it("Should return fizzbuzz for both multiple of 3 and 5", (done) => {
        expect(fizzbuzz.evaluate(15, 15)).toBe("fizzbuzz");
        done();
    });
    it("should return 30 if number is 30", (done) => {
        expect(fizzbuzz.evaluate(30, 30)).toBe("fizzbuzz");
        done();
    });

    it("should return 12 if number are 1 and 2", (done) => {
        expect(fizzbuzz.evaluate(1, 2)).toBe("12");
        done();
    });
    it("should return 2fizz if numbers are 2 and 3", (done) => {
        expect(fizzbuzz.evaluate(2, 3)).toBe("2fizz");
        done();
    });
    it("should return 12fizz if numbers are 1,2 and 3", (done) => {
        expect(fizzbuzz.evaluate(1, 3)).toBe("12fizz");
        done();
    });
})