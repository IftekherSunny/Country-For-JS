"use strict";

import _           from 'lodash';
import CountryList from './../data/country.json';


class Country
{
    /**
     * Get country name & dialing code by the country ISO 3166-1 Alpha-2 code.
     *
     * @param {string|array} countryCode - Country ISO 3166-1 Alpha-2 code.
     * @return {object|array}
     */
    get(countryCode = null)
    {
        // if the given country code will null
        // then it returns all countries dialing code and name
        if(_.isNull(countryCode)) {
            return CountryList;
        }

        // if the given country code will string
        // then it returns a single country dialing code and name
        if(_.isString(countryCode)) {
            return this._getDialingCodeAndName(countryCode.toUpperCase());
        }

        // if the given country code will an array
        // then it returns an array of country dialing code and name
        // respect to the given country code
        if(_.isArray(countryCode)) {
            return countryCode.map((code) => {
                return this._getDialingCodeAndName(code.toUpperCase());
            });
        }

        return countryCode;
    }


    /**
     * Get country dialing code and name.
     *
     * @param countryCode - Country ISO 3166-1 Alpha-2 code.
     * @throws The country ISO 3166-1 Alpha-2 code [ countryCode ] does not exists.
     * @return {object}
     * @private
     */
    _getDialingCodeAndName(countryCode) {
        if(_.has(CountryList, countryCode)) {
            return _.get(CountryList, countryCode);
        } else {
            throw Error('The country ISO 3166-1 Alpha-2 code [ ' + countryCode + ' ] does not exists.');
        }
    }


    /**
     * Get country name by the country ISO 3166-1 Alpha-2 code.
     *
     * @param {string} countryCode - Country ISO 3166-1 Alpha-2 code.
     * @return {string}
     */
    getName(countryCode) {
        return this._getDialingCodeAndName(countryCode.toUpperCase()).name;
    }


    /**
     * Get country dialing code by the country ISO 3166-1 Alpha-2 code.
     *
     * @param {string} countryCode - Country ISO 3166-1 Alpha-2 code.
     * @return {string}
     */
    getDialingCode(countryCode) {
        return this._getDialingCodeAndName(countryCode.toUpperCase()).code;
    }
}


/**
 * Set Country global variable.
 *
 * @global
 */
global.Country = Country;


module.exports = Country;