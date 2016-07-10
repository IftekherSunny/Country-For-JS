"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _country = require('./../data/country.json');

var _country2 = _interopRequireDefault(_country);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Country = function () {
    function Country() {
        _classCallCheck(this, Country);
    }

    _createClass(Country, [{
        key: 'get',

        /**
         * Get country name & dialing code by the country ISO 3166-1 Alpha-2 code.
         *
         * @param {string|array} countryCode - Country ISO 3166-1 Alpha-2 code.
         * @return {object|array}
         */
        value: function get() {
            var _this = this;

            var countryCode = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

            // if the given country code will null
            // then it returns all countries dialing code and name
            if (_lodash2.default.isNull(countryCode)) {
                return _country2.default;
            }

            // if the given country code will string
            // then it returns a single country dialing code and name
            if (_lodash2.default.isString(countryCode)) {
                return this._getDialingCodeAndName(countryCode.toUpperCase());
            }

            // if the given country code will an array
            // then it returns an array of country dialing code and name
            // respect to the given country code
            if (_lodash2.default.isArray(countryCode)) {
                return countryCode.map(function (code) {
                    return _this._getDialingCodeAndName(code.toUpperCase());
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

    }, {
        key: '_getDialingCodeAndName',
        value: function _getDialingCodeAndName(countryCode) {
            if (_lodash2.default.has(_country2.default, countryCode)) {
                return _lodash2.default.get(_country2.default, countryCode);
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

    }, {
        key: 'getName',
        value: function getName(countryCode) {
            return this._getDialingCodeAndName(countryCode.toUpperCase()).name;
        }

        /**
         * Get country dialing code by the country ISO 3166-1 Alpha-2 code.
         *
         * @param {string} countryCode - Country ISO 3166-1 Alpha-2 code.
         * @return {string}
         */

    }, {
        key: 'getDialingCode',
        value: function getDialingCode(countryCode) {
            return this._getDialingCodeAndName(countryCode.toUpperCase()).code;
        }
    }]);

    return Country;
}();

/**
 * Set Country global variable.
 *
 * @global
 */


global.Country = Country;

module.exports = Country;