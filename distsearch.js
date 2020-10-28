function _pushMultiple(ary, value, n) {
    for (let i = 0; i < n; i++) {
        ary.push(value);
    }
}

function indexOfWithDist(reference, searchvalue, distance, start = 0) {
    if (distance === 0) {
        return reference.indexOf(searchvalue, start);
    }
    
    // Fill
    let lastRow = [ 0 ];
    _pushMultiple(lastRow, 99999, searchvalue.length);
    
    for (let i = 0; i < reference.length; i++) {
        const refChar = reference.charAt(i);
        const currentRow = [ 0 ];
        for (let j = 0; j < searchvalue.length; j++) {
            const searchChar = searchvalue.charAt(j);
            if (refChar === searchChar) {
                currentRow.push(lastRow[j]);
            } else {
                currentRow.push(Math.min(
                    lastRow[j + 1] + 1, // Skip refChar
                    currentRow[j] + 1, // Skip searchChar
                    lastRow[j] + 1)); // Mismatch
            }
        }
        const dist = currentRow[currentRow.length - 1];
        console.log(currentRow);
        if (dist <= distance) {
            //return i;
        }
        lastRow = currentRow;
    }
    return -1;
}

console.log(indexOfWithDist("abcde", "cde", 1));

/*
console.assert(indexOfWithDist("abcdef", "bcd", 0) === 1, "Case 1 failed");
console.assert(indexOfWithDist("abcdef", "bce", 0) === -1, "Case 2 failed");
console.assert(indexOfWithDist("abcdef", "bCd", 0) === -1, "Case 3 failed");
console.assert(indexOfWithDist("abcde", "cde", 1) === 2, "Case 4 failed");
console.assert(indexOfWithDist("abcde", "cee", 1) === 2, "Case 5 failed");
console.assert(indexOfWithDist("abcde", "eee", 1) === -1, "Case 6 failed");

console.assert(indexOfWithDist("abcdef", "", 0) === 0, "Case 7 failed");
console.assert(indexOfWithDist("abcdef", "", 2) === 0, "Case 8 failed");
console.assert(indexOfWithDist("aabcdefghi", "acdef", 1) === 1, "Case 9 failed");

console.assert(indexOfWithDist("abc", "xxxabcxxx", 6) === 0, "Case 10 failed");
console.assert(indexOfWithDist("abc", "xxxabcxxx", 5) === -1, "Case 11 failed");
*/
