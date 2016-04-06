# random-natural

> Generate a random [natural number](https://en.wikipedia.org/wiki/Natural_number).


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/random-natural/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/random-natural/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/random-natural)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/random-natural/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/random-natural)


## Install

```
$ npm install --save random-natural
```

## Usage

```js
var randomNatural = require('random-natural');

randomNatural();
// => 0 or 1

randomNatural(5);
// => 3

randomNatural(10, 100);
// => 66
```

## API

### randomNatural()

Returns an integer from `0` to `1`.

### randomNatural(max)

Returns an integer from `0` to `max`.

### randomNatural(min, max)

Returns an integer from `min` to `max`.

#### min

Type: `Int`  
Default: `0`

Minimum integer to return.

#### max

Type: `Int`  
Default: `1`

Maximum integer to return.

**Note:** 

- Negative `min` or `max` will be treat as `0`
- Non-numeric `min` or `max` will be treat as `0`
- If `min` greater than `max`, we will swap each other

## Related

