function getNumberFromString(input) {
    const preparedInput = String(input)
    let result = ''

    for (const symbol of preparedInput) {

        if (isNaN(Number(symbol))) {
            continue
        }

        result += symbol
    }

    return result ? Number(result) : NaN
}


console.log(getNumberFromString('12njfhnkdj5fj'))
console.log('r')