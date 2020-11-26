import { rangeOfWithDist, indexOfWithDist } from './neofuzzy.js';

function assertEqual(actual, expected) {
    if (actual !== expected) {
        throw "Expected " + expected + ", but get " + actual;
    }
}

function cmpArray(arrayA, arrayB) {
    if (arrayA === null && arrayB === null) {
        return true;
    }
    if (arrayA === null || arrayB === null) {
        return false;
    }
    if (arrayA.length !== arrayB.length) {
        return false;
    }
    for (let i = 0; i < arrayA.length; i++) {
        if (arrayA[i] !== arrayB[i]) {
            return false;
        }
    }
    return true;
}

assertEqual(indexOfWithDist("a", "a", 2), 0);
assertEqual(indexOfWithDist("a", "b", 1), 0);
assertEqual(indexOfWithDist("ab", "bb", 1), 1);

assertEqual(indexOfWithDist("abcdef", "bcd", 0), 1);
assertEqual(indexOfWithDist("abcdef", "bce", 0), -1);
assertEqual(indexOfWithDist("abcde", "cde", 1), 2);
assertEqual(indexOfWithDist("abcde", "cee", 1), 2);
assertEqual(indexOfWithDist("abcde", "eee", 1), -1);

assertEqual(indexOfWithDist("abcdef", "", 0), 0);
assertEqual(indexOfWithDist("abcdef", "", 2), 0);
assertEqual(indexOfWithDist("aabcdefghi", "acdef", 1), 3);
assertEqual(indexOfWithDist("aacxdefghi", "acdef", 1), 1);

assertEqual(indexOfWithDist("abc", "xxxabcxyz", 6), 0);
assertEqual(indexOfWithDist("abc", "xxxabcxxx", 5), -1);
assertEqual(indexOfWithDist("abcdef", "bCd", 0), -1);


assertEqual(rangeOfWithDist("abcdef", "bCd", 0), null);
assertEqual(cmpArray(rangeOfWithDist("abcdef", "bcd", 0), [1, 4]), true);
assertEqual(cmpArray(rangeOfWithDist("aabcdefghi", "acdef", 1), [3, 7]), true);
assertEqual(cmpArray(rangeOfWithDist("aacxdefghi", "acdef", 1), [1, 7]), true);

console.log("All tests are complete.");

