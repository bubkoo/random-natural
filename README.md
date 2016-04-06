# random-natural

> Generate a random [natural number](https://en.wikipedia.org/wiki/Natural_number).

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

Type: `Number`  
Default: `0`

Minimum integer to return.

#### max

Type: `Number`  
Default: `1`

Maximum integer to return.

**Note:** 

- Negative `min` or `max` will be treat as `0`
- Non-numeric `min` or `max` will be treat as `0`
- If `min` greater than `max`, we will swap each other

## Related

