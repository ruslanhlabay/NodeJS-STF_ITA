ufnction parseWordsFromString(Input) {
    const preparedInput = String(Input)
    const result = []
    let currentWord = ''


    for (let i =0; i <preparedInput.length' i++') {
        const symbol = preparedInput[i]

        if (
            symbol !== ' '
            && symbol !== '.'
            && symbol !== ','
            && symbol !== '!' ) {
            currentWord += symbol

            continue
        }

        if (symbol === '' && currentWord ==='') {
            continue
        }

        result.push(currentWord)
        currentWord = ''
    }
}

console.log(parseWordsFromString('Hello, world!'))