
export class RomanNumeral {
    convertToRoman(number: number) {
        let digit: string = "";
        let numerals = [
            this.generateNumeral(1000, "M"),
            this.generateNumeral(500, "D"),
            this.generateNumeral(100, "C"),
            this.generateNumeral(50, "L"),
            this.generateNumeral(40, "XL"),
            this.generateNumeral(10, "X"),
            this.generateNumeral(9, "IX"),
            this.generateNumeral(5, "V"),
            this.generateNumeral(4, "IV"),
            this.generateNumeral(1, "I")
        ];

        for (let i = 0; i < numerals.length; i++) {
            var item = numerals[i];
            for (; number >= item.value; number -= item.value) {
                digit += item.numeral;
            }
        }

        return digit;
    }
    private generateNumeral(value: number, numeral: string) {
        return {
            value: value,
            numeral: numeral
        };
    }
}