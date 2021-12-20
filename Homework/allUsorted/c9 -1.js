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
    let currentWord = ''
    let word = ''
    let nextWord = ''
    let result = ''

    console.log(preparedInput);
    console.log(words);

    for (let i=0; i<words.length; i++) {
        word = words[i]
        nextWord = words[i+1]
        if (word==='' || word === 'one' || word === 'dot' || word === 'number') {
            if (nextWord ===',') {
                i++
            }
            continue
        }

        moderatedWords.push(word)
    }

    console.log(moderatedWords)
    


    for (let i = 0; i < moderatedWords.length; i++) {
        currentWord = moderatedWords[i]
        nextWord = moderatedWords[i+1]

        if (currentWord.length===1) {
            if (currentWord === ','
            || currentWord === '!'
            || currentWord === '?'
            || currentWord === '.')  {

                if (nextWord === currentWord) {
                    i++
                    continue
                }

                currentWord += ' '
            }
        }

        result = result + currentWord
    }

    return result
}





//moderatedString = parseWordsFromString(', Hello, dot, one, world! dot')


// console.log(moderatedString)

console.log(moderateString('Hello world, two or dot? to one! The world is dot! O, dot, dot, one, two or dot? Hi one! bitcoin!will cost? a half million one !!'))