# Country-For-JS

Sun Country is the package that helps you to get country name and dialing code by the country ISO 3166-1 Alpha-2 code.

## Basic Uses

#### Get all countries name and dialing code

```javascript
var country = new Country;
country.get();
```

#### Get a country name and dialing code

```javascript
var country = new Country;
country.get('BD');
```

#### Get multiple countries name and dialing code

```javascript
var country = new Country;
country.get(['BD', 'US']);
```

#### Get a country name

```javascript
var country = new Country;
country.getName('BD');
```

#### Get a country dialing code

```javascript
var country = new Country;
country.getDialingCode('BD');
```

## License
This package is licensed under the [MIT License](https://github.com/iftekhersunny/Country-For-JS/blob/master/LICENSE)
