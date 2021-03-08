export class Bowling {
    private throws:Array<number> = []

    public roll(pinsDown: number): void {
        this.throws.push(pinsDown)
    }
    public getScore():number {
        let score = 0
        for(let frameIndex = 0, throwIndex = 0; frameIndex < 10; frameIndex ++, throwIndex+=2){
           score+= this.throws[throwIndex];
           score+= this.throws[throwIndex + 1];
           if(this.isSpare(throwIndex)) {
               score+= this.throws[throwIndex + 2]
           }
           if(this.isStrike(throwIndex)) {
               throwIndex--;
               score += this.throws[throwIndex + 2]
           }

        }
        return score
    }
    private isSpare(throwIndex:number) {
        return this.throws[throwIndex] + this.throws[throwIndex + 1] === 10
    }
    private isStrike(throwIndex:number) {
        return this.throws[throwIndex] === 10;
    }
}