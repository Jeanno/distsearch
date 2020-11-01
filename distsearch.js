function _pushIncreasing(ary, value, n) {
    for (let i = 0; i < n; i++) {
        ary.push(i);
    }
}

function _backtrack(reference, searchvalue, distTable) {
    let rowIdx = distTable.length - 1;
    let colIdx = searchvalue.length;
    while (colIdx !== 0 && rowIdx !== 0) {
        const refChar = reference.charAt(rowIdx - 1);
        const searchChar = searchvalue.charAt(colIdx - 1);
        const prevRow = distTable[rowIdx -  1];
        const currentRow = distTable[rowIdx];
        const val = currentRow[colIdx];
        if (currentRow[colIdx - 1] + 1 === val) {
            colIdx--;
        } else if (prevRow[colIdx] + 1 === val) {
            rowIdx--;
        } else if ((prevRow[colIdx - 1] + (refChar === searchChar ? 0 : 1)) === val)  {
            rowIdx--;
            colIdx--;
        } else {
            throw "Backtracking error";
        }
    }
    return rowIdx;
}

export function indexOfWithDist(reference, searchvalue, distance) {
    if (distance === 0) {
        return reference.indexOf(searchvalue);
    }
    if (searchvalue.length <= distance) {
        return 0;
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
    return -1;
}

