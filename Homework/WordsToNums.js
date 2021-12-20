const unmoderatedString = 'A one boy ate three apples. nine trees seven eggs three ten! ate eight'

const numberedWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']


function parseWordsFromString(input) {
    const preparedInput = String(input)
    const result = []
    let currentWord = ''

    for (let i = 0; i < preparedInput.length; i++) {
        const symbol = preparedInput[i]

        if (
            symbol === '.'
            || symbol === ','
            || symbol === '!'
            || symbol === '?'
            || symbol === '-'
            || symbol === ' '

        ) {
            result.push(currentWord)
            result.push(symbol)
            currentWord = ''
            continue
        }
        currentWord += symbol
    }

    if (currentWord != '') {
        result.push(currentWord)
    }

    return result
}


function moderateString(input) {
    const preparedInput = String(input)
    const words = parseWordsFromString(preparedInput)
    let result = ''

    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        for (let j = 0; j < numberedWords.length; j++) {
            const numberedWord = numberedWords[j]

            if (word === numberedWord) {
                words[i] = String(j)
            }
        }
    }

    for (let i = 0; i < words.length; i++) {
        result += words[i]
    }

    return result

}


console.log(unmoderatedString)
console.log(moderateString(unmoderatedString))