import {Bowling} from "./bowlingGame";

describe("Bowling game", ()=> {
    let bowling:Bowling
    beforeEach(() => {
        bowling = new Bowling()
    })
    function rolls(pins:number, tries: number) {
        for (let i = 0; i < tries; i++) {
            bowling.roll(pins)
        }
    }
    function makeSpare() {
       return rolls(5, 2)
    }
    it('all gutters', ()=> {
        rolls(0, 20);
        expect(bowling.getScore()).toBe(0)
    })
    it('should knock downs all pins', () => {
        rolls(1, 20)
        expect(bowling.getScore()).toBe(20)
    })
    it('should make a spare and gutters', () => {
       makeSpare()
       rolls(0, 18);
       expect(bowling.getScore()).toBe(10)
    })
    it('should spare and knock downs some pins', () => {
        makeSpare()
        rolls(3, 18)
        expect(bowling.getScore()).toBe(67)
    })
    it('should strike and gutters ', () => {
        rolls(10, 1);
        rolls(0, 18)
        expect(bowling.getScore()).toBe(10)
    })
    it('should strike and gutters ', () => {
        rolls(10, 1);
        rolls(3, 18)
        expect(bowling.getScore()).toBe(70)
    })
    it('strike or spare in the perfect game', () => {
        rolls(10, 12)
        expect(bowling.getScore()).toBe(300)
    })

})