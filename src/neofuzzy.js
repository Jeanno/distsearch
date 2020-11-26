function _pushIncreasing(ary, value, n) {
    for (let i = 0; i < n; i++) {
        ary.push(i);
    }
}

function _backtrack(reference, searchvalue, distTable) {
    let rowIdx = distTable.length - 1;
    let colIdx = searchvalue.length;
    let insertLength = 0;
    while (colIdx !== 0 && rowIdx !== 0) {
        const refChar = reference.charAt(rowIdx - 1);
        const searchChar = searchvalue.charAt(colIdx - 1);
        const prevRow = distTable[rowIdx -  1];
        const currentRow = distTable[rowIdx];
        const val = currentRow[colIdx];
        if (currentRow[colIdx - 1] + 1 === val) {
            colIdx--;
            insertLength--;
        } else if (prevRow[colIdx] + 1 === val) {
            rowIdx--;
            insertLength++;
        } else if ((prevRow[colIdx - 1] + (refChar === searchChar ? 0 : 1)) === val)  {
            rowIdx--;
            colIdx--;
        } else {
            throw "Backtracking error";
        }
    }
    return [rowIdx, rowIdx + searchvalue.length + insertLength];
}

export function rangeOfWithDist(reference, searchvalue, distance) {
    if (distance === 0) {
        const index = reference.indexOf(searchvalue);
        return index === -1 ? null : [index, index + searchvalue.length]
    }
    if (searchvalue.length <= distance) {
        return [0, Math.min(searchvalue.length, reference.length)];
    }
    
    // Fill
    let prevRow = [];
    _pushIncreasing(prevRow, 0, searchvalue.length + 1);
    const rows = [ prevRow ];
    
    for (let i = 0; i < reference.length; i++) {
        const refChar = reference.charAt(i);
        const currentRow = [ 0 ];
        for (let j = 0; j < searchvalue.length; j++) {
            const searchChar = searchvalue.charAt(j);
            currentRow.push(Math.min(
                prevRow[j + 1] + 1, // Skip refChar
                currentRow[j] + 1, // Skip searchChar
                prevRow[j] + (refChar === searchChar ? 0 : 1))); // match or mismatch
        }
        const dist = currentRow[currentRow.length - 1];
        prevRow = currentRow;
        rows.push(prevRow);
        if (dist <= distance) {
            return _backtrack(reference, searchvalue, rows);
        }
    }
    return null;
}

export function indexOfWithDist(reference, searchvalue, distance) {
    const range = rangeOfWithDist(reference, searchvalue, distance);
    return range ? range[0] : -1;
}

