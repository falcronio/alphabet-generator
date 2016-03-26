# Alphabet Generator
[![Build Status](https://travis-ci.org/falcronio/alphabet-generator.svg?branch=master)](https://travis-ci.org/falcronio/alphabet-generator)
[![npm version](https://badge.fury.io/js/alphabet-generator.svg)](https://badge.fury.io/js/alphabet-generator)
> Simple Alphabet Generator

### How to use
```javascript
var alpha = require('alphabet-generator');

// Get array of alphabets
console.log(alpha.get());

// Get alphabets in range
console.log(alpha.range('A', 'F').get());

// Get random alphabets
console.log(alpha.random().get());

// Get 3 random alphabets
console.log(alpha.random(3).get());

// Get lowercase/uppercase alphabets
console.log(alpha.upper().get());
console.log(alpha.lower().get());

// Chainable
console.log(alpha.range('A', 'F').random().lower().get());
```

### License
MIT