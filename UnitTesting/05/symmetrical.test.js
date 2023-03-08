const { expect } = require('chai');
const isSymmetric = require('./symmetrical');

describe('Symmetric check', () => {
    it('returns true with valid inputs', () => {
        expect(isSymmetric([1,1])).to.true;
    });

    it('returns false for valid non-symmetric inputs', () => {
        expect(isSymmetric([1,2])).to.be.false;
    });

    it('returns false for invalid argument', () => {
        expect(isSymmetric('a')).to.be.false;
    });

    it('returns true with valid odd inputs', () => {
        expect(isSymmetric([1, 1, 1])).to.true;
    });

    it('returns true with valid symmetric string inputs', () => {
        expect(isSymmetric(['a', 'a'])).to.true;
    });

    it('returns false with valid non-symetric string inputs', () => {
        expect(isSymmetric(['a', 'b'])).to.be.false;
    });

    it('returns false with type-coerced inputs', () => {
        expect(isSymmetric(['1', 1])).to.be.false;
    });
    
})