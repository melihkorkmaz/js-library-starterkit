import chai from 'chai';
const expect = chai.expect;

import jsStarterkit from '../src';

describe('JS Starter Kit Tests', () => {
    it('should return "Hello World"', () => {

        const response = jsStarterkit();

        expect(response).to.equal('Hello World!');

    })
})