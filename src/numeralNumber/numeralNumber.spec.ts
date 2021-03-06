import { RomanNumeral } from "./numeralNumber";

let romanNumeral: RomanNumeral;
beforeEach(() => {
    romanNumeral = new RomanNumeral();
});
describe("Roman numeral tests suites", () => {
    it("should converts the number 1 into roman numeral", () => {
        expect(romanNumeral.convertToRoman(1)).toEqual("I");
    });
    it("should converts the number 2 into a roman numeral", () => {
        expect(romanNumeral.convertToRoman(2)).toEqual("II");
    });
    it("should converts the number 3 into roman numeral", () => {
        expect(romanNumeral.convertToRoman(3)).toEqual("III");
    });

    it("should converts the number 4 into a roman numeral", () => {
        expect(romanNumeral.convertToRoman(4)).toEqual("IV");
    });
    it("should converts the number 5 into roman numeral", () => {
        expect(romanNumeral.convertToRoman(5)).toEqual("V");
    });
    it("should converts the number 6 into roman numeral", () => {
        expect(romanNumeral.convertToRoman(6)).toEqual("VI");
    });
    it("should converts the number 234 into roman numeral", () => {
        expect(romanNumeral.convertToRoman(234)).toEqual("CCXXXIV");
    });
    it("should converts the number 5430 into roman numeral", () => {
        expect(romanNumeral.convertToRoman(5430)).toEqual("MMMMMCCCCXXX");
    });
});