# random-natural

> Return a [natural number](https://en.wikipedia.org/wiki/Natural_number).


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-natural/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-natural/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-natural)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-natural/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-natural)


## Install

```
$ npm install --save random-natural
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-natural/blob/master/test/spec/index.js)


```js
var randomNatural = require('random-natural');

// API
// - randomNatural()
// - randomNatural(max)
// - randomNatural(min, max)

randomNatural();
// => randomInt(0, 9007199254740991);
// => 9527

randomNatural(5);
// => randomNatural(0, 5);
// => 3

randomNatural(10, 100);
// => 66
```

These `min` and `max` are **inclusive**, so they are included in the range.

This means `randomNatural(1, 3)` would return either `1`, `2`, or `3`.


## Related

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-natural/issues/new).
