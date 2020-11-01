# neofuzzy
Fuzzy search string in text with arbitrary edit distance threshold.

## Install
```
npm install neofuzzy
```

## Example
```
var indexOfWithDist = require("neofuzzy").indexOfWithDist;

indexOfWithDist("a quick brown fox jumps over the lazy dog", "brwn", 1); // 8
indexOfWithDist("a quick brown fox jumps over the lazy dog", "lazydo", 1); // 33
```

## Author
Jeanno <jeanno.cheung@gmail.com>
