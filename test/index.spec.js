import chai from 'chai';
const expect = chai.expect;

import boilerPlate from '../src';

describe('JS Boilerplate Tests', () => {
    it('should return "Hello World"', () => {

        const response = boilerPlate();

        expect(response).to.equal('Hello World!');

    })
})