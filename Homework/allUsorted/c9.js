let moderatedString = ''

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
        ) {
            result.push(currentWord)
            result.push(symbol)
            currentWord = ''

            continue
        }

        if (symbol !== ' ') {
            currentWord += symbol

            continue
        }

        if (symbol === ' ' && currentWord === '') {
            continue
        }

        result.push(currentWord)
        currentWord = ''
    }

    return result
}




function moderateString(input) {
    const preparedInput = String(input)
    const words = parseWordsFromString(preparedInput)
    const moderatedWords = []
    let result = ''

    for (const word of words) {
        if (word === 'one' || word === 'dot' || word === 'number') {
            continue
        }

        moderatedWords.push(word)
    }

    return result

    for (let i = 0; i < moderatedWords.length; i++) {
        result += moderatedWords[i]
    }


}





moderatedString = parseWordsFromString(', Hello, dot, one, world! dot')


console.log(moderatedString)

console.log(moderateString(moderatedString))