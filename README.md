# distsearch
Searching string in text with arbitary edit distance threshold.

## Install
```
npm install distsearch
```

## Example
```
var indexOfWithDist = require("distsearch").indexOfWithDist;

indexOfWithDist("a quick brown fox jumps over the lazy dog", "brwn", 1); // 8
indexOfWithDist("a quick brown fox jumps over the lazy dog", "lazydo", 1); // 33
```

## Author
Jeanno <jeanno.cheung@gmail.com>
