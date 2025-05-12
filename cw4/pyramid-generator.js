function pyramid(patternChar, numRows, isDownward) {
    let result = "\n";
    for (let i = 0; i < numRows; i++) {
        const currentRow = isDownward ? (numRows - 1 - i) : i;
        const spaces = " ".repeat(numRows - 1 - currentRow);
        const characters = patternChar.repeat(1 + 2 * currentRow);
        result += spaces + characters + "\n";
    }
    return result;
}
console.log(pyramid("o", 4, false));  
console.log(pyramid("p", 5, true)); 
