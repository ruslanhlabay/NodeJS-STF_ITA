function inverseString(input) {
    const preparedInput = String(input)
    const result = ''

    for (let i = preparedInput.length-1; i>=0; i--) {
        result += preparedInput[i]
    }
    return result
}

console.log(inverseString('test'))