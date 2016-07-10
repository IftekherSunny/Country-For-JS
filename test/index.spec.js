"use strict";

import { expect }   from 'chai';
import Country      from './../src/index';


describe('Country', () => {

    /**
     * Instance of country class.
     */
    let country;


    /**
     * Setup
     */
    before(() => {
        country = new Country();
    });


    it('returns an array of all countries name and dialing code', () => {
        expect(Object.keys(country.get()).length).to.be.equal(245);
    });


    it('returns a country name and dialing code for the given country alpha 2 code', function() {
        expect(Object.keys(country.get('BD')).length).to.be.equal(2);

        expect(country.get('BD')).to.deep.equal({
            code:'+880',
            name:'Bangladesh'
        });
    });


    it('returns an array that contains different object of country name and dialing code respect to the given country alpha 2 code', () => {
        expect(Object.keys(country.get(['BD', 'UK'])).length).to.be.equal(2);

        expect(country.get(['BD', 'UK'])).to.deep.equal([
            {
                code:'+880',
                name:'Bangladesh'
            },
            {
                code:'+44',
                name:'United Kingdom'
            }
        ]);
    });


    it('returns the dialing code of a country for the given country alpha 2 code', () => {
        expect(country.getDialingCode('BD')).to.be.equal('+880');
    });


    it('returns the name of a country for the given country alpha 2 code', () => {
        expect(country.getName('BD')).to.be.equal('Bangladesh');
    });


    it('throws an exception when we will try to get a country name and dialing code using invalid alpha 2 code', () => {
        expect(country.get.bind(country, 'unknown')).to.throw('The country ISO 3166-1 Alpha-2 code [ UNKNOWN ] does not exists.')
    });


    it('throws an exception when we will try to get an array of country name and dialing code using an array of country alpha 2 codes where contains an invalid alpha 2 code', () => {
        expect(country.get.bind(country, ['BD', 'unknown'])).to.throw('The country ISO 3166-1 Alpha-2 code [ UNKNOWN ] does not exists.')
    });


    it('throws an exception when we will try to get a country name using invalid alpha 2 code', () => {
        expect(country.getName.bind(country, 'unknown')).to.throw('The country ISO 3166-1 Alpha-2 code [ UNKNOWN ] does not exists.')
    });


    it('throws an exception when we will try to get a country dialing code using invalid alpha 2 code', () => {
        expect(country.getDialingCode.bind(country, 'unknown')).to.throw('The country ISO 3166-1 Alpha-2 code [ UNKNOWN ] does not exists.')
    });
});