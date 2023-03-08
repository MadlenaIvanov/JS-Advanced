const { sum } = require('./myModule');
const { expect} = require('chai');

describe('Sum function', () => {
    it('works', () => {

        //WITH CHAI
        expect(sum(1, 2)).to.equal(3);

        //IF WE DON'T HAVE CHAI
        // const result = sum(1, 2);
        // if (result != 3) {
        //     throw Error();
        // }
    });

    it('return NaN with invalid valies', () => {
        expect(sum('a', 'a')).to.be.NaN;
    });
});
