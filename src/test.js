import { indexOfWithDist } from './neofuzzy.js';

function assertEqual(actual, expected, message) {
    if (actual !== expected) {
        if (message) {
            console.log(message);
        }
        console.log("Expected", expected, ", but get", actual);
    }
}

assertEqual(indexOfWithDist("a", "a", 2), 0, "Case 1 failed");
assertEqual(indexOfWithDist("a", "b", 1), 0, "Case 2 failed");
assertEqual(indexOfWithDist("ab", "bb", 1), 1, "Case 3 failed");

assertEqual(indexOfWithDist("abcdef", "bcd", 0), 1, "Case 4 failed");
assertEqual(indexOfWithDist("abcdef", "bce", 0), -1, "Case 5 failed");
assertEqual(indexOfWithDist("abcde", "cde", 1), 2, "Case 6 failed");
assertEqual(indexOfWithDist("abcde", "cee", 1), 2, "Case 7 failed");
assertEqual(indexOfWithDist("abcde", "eee", 1), -1, "Case 8 failed");

assertEqual(indexOfWithDist("abcdef", "", 0), 0, "Case 9 failed");
assertEqual(indexOfWithDist("abcdef", "", 2), 0, "Case 10 failed");
assertEqual(indexOfWithDist("aabcdefghi", "acdef", 1), 3, "Case 11 failed");
assertEqual(indexOfWithDist("aacxdefghi", "acdef", 1), 1, "Case 12 failed");

assertEqual(indexOfWithDist("abc", "xxxabcxyz", 6), 0, "Case 13 failed");
assertEqual(indexOfWithDist("abc", "xxxabcxxx", 5), -1, "Case 14 failed");
assertEqual(indexOfWithDist("abcdef", "bCd", 0), -1, "Case 15 failed");
console.log("All tests are complete.");

