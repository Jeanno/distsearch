# neofuzzy
Quick fuzzy search string in text with arbitrary edit distance threshold.

## Install
```
npm install neofuzzy
```

## Example
```
const { rangeOfWithDist, indexOfWithDist } = require("neofuzzy");

const text = "a quick brown fox jumps over the lazy dog";
indexOfWithDist(text, "brwn", 1); // 8
indexOfWithDist(text, "lazydo", 1); // 33
indexOfWithDist(text, "not found", 2); // -1

rangeOfWithDist(text, "jump oer", 2) // [18, 28]
rangeOfWithDist(text, "not found", 2) // null 
```

## Author
Jeanno <jeanno.cheung@gmail.com>
