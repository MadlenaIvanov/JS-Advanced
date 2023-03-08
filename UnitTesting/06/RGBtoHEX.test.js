const { expect } = require('chai');
const rgbToHexColor = require('./RGBtoHEX');

describe('RBGtoHEX', () => {
    it('convert black to hex', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('convert white to hex', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('returns undefinited for string params', () => {
        expect(rgbToHexColor('a', 'a', 'a')).to.be.undefined;
    });

    it('converts 151, 104, 172 to hex', () => {
        expect(rgbToHexColor(151, 104, 172)).to.equal('#9768AC');
    });

    it('returns undefinited for negative input', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });

    it('return undefined for input below zero', ()=>{
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    });

    it('return undefined for input below zero', ()=>{
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });

    it('return undefined for input bigger than 255', ()=>{
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });
});;