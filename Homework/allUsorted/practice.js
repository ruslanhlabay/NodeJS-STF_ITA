function getDigits(input) {
    const result = []
    const preparedNumber = typeof(input) || String(Math.abs(input)) ? '';

    for (const digit of preparedNumber) {
        result.push(Number(digit))
    }
    return result
}

console.log( getDigits(-hgfhgfhf) )