# neofuzzy
Quick fuzzy search string in text with arbitrary edit distance threshold.

## Install
```
npm install neofuzzy
```

## Example
```
var { rangeOfWithDist, indexOfWithDist } = require("neofuzzy");

indexOfWithDist("a quick brown fox jumps over the lazy dog", "brwn", 1); // 8
indexOfWithDist("a quick brown fox jumps over the lazy dog", "lazydo", 1); // 33
indexOfWithDist("a quick brown fox jumps over the lazy dog", "not found", 2); // -1

rangeOfWithDist("a quick brown fox jumps over the lazy dog", "jump oer", 2) // [18, 28]
rangeOfWithDist("a quick brown fox jumps over the lazy dog", "not found", 2) // null 
```

## Author
Jeanno <jeanno.cheung@gmail.com>
