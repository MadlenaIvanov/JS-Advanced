const lookupChar = require('./03');
const { expect} = require('chai');

describe('look up char', () => {
    it('correct input', () => {
        expect(lookupChar('first', 1)).to.equal('i');
    })

    it('wrong first input', () => {
        expect(lookupChar(1, 1)).to.be.undefined;
    })
    it('typeOfInput', () => {
        expect(lookupChar('abv', 1.2)).to.be.undefined;
    });

    it('wrong index input', () => {
        expect(lookupChar('first', 'a')).to.be.undefined;
    })

    
    it('wrong index input 2', () => {
        expect(lookupChar('first', -1)).to.equal('Incorrect index');
    })

    
    it('wrong index input 3', () => {
        expect(lookupChar('first', 5)).to.equal('Incorrect index');
    })

})