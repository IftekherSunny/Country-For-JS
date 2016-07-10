### Country

[![Build Status](https://travis-ci.org/IftekherSunny/Country-For-JS.svg?branch=master)](https://travis-ci.org/IftekherSunny/Country-For-JS) [![Total Downloads](https://img.shields.io/npm/dt/sun-country.svg)](https://www.npmjs.com/package/sun-country) [![Version](https://img.shields.io/npm/v/sun-country.svg)](https://www.npmjs.com/package/sun-country) [![License](https://img.shields.io/github/license/iftekhersunny/country-for-js.svg)](https://github.com/iftekhersunny/Country-For-JS/blob/master/LICENSE)

Sun Country is the package that helps you to get country name and dialing code by the country ISO 3166-1 Alpha-2 code.

### Installation Process

##### Node

```
npm install --save sun-country
```

##### Browser

```html
<script src="/path/to/country.min.js"></script>
```

### Basic Uses

##### Get all countries name and dialing code

```javascript
var country = new Country;
country.get();
```

##### Get a country name and dialing code

```javascript
var country = new Country;
country.get('BD');
```

##### Get multiple countries name and dialing code

```javascript
var country = new Country;
country.get(['BD', 'US']);
```

##### Get a country name

```javascript
var country = new Country;
country.getName('BD');
```

##### Get a country dialing code

```javascript
var country = new Country;
country.getDialingCode('BD');
```

### Build

```
npm run build
```

### Test

##### Run tests

```
npm test
```

##### Run tests in watch mode

```
npm test:watch
```

### License
This package is licensed under the [MIT License](https://github.com/iftekhersunny/Country-For-JS/blob/master/LICENSE)