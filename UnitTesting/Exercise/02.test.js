const isOddOrEven = require('./02');
const { expect} = require('chai');

describe('odd or even', () => {
    it('even', () => {
        expect(isOddOrEven('aa')).to.equal('even');
    })

    it('odd', () => {
        expect(isOddOrEven('a')).to.equal('odd');
    })

    it('wrong parameter', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    })

})