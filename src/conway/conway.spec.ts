import {Conway} from "./conway";

describe('Suite de conway', function () {
    it('should draw next line 11', () => {
        let conway: Conway = new Conway()
        expect(conway.draw("1")).toEqual('1\n1 1');
    })
    it('should draw next line 1 2', () => {
        let conway: Conway = new Conway()
        expect(conway.draw("2")).toEqual('2\n1 2');
    })
    it('should draw next line 2 2', () => {
        let conway: Conway = new Conway()
        expect(conway.draw("2 2")).toEqual('2 2\n2 2');
    })
    it('should draw next line 1 2 1 1', () => {
        let conway: Conway = new Conway()
        expect(conway.draw("2 1")).toEqual('2 1\n1 2 1 1');
    })
});