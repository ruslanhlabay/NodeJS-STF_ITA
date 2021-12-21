const unmoderatedString = 'A Hello world, two or dot? to one! The world is dot! O, dot, dot, one, two or dot? Hi one! bitonecoin! will cost? a half million one !!! Dot, bot, dot, abdot?'

function parseWordsFromString(input) {
    const preparedInput = String(input)
    const result = []
    let currentWord = ''

    for (let i = 0; i < preparedInput.length; i++) {
        const symbol = preparedInput[i]

        if (symbol === ' ' && currentWord === '') {
            continue
        }

        if (
            symbol === '.'
            || symbol === ','
            || symbol === '!'
            || symbol === '?'
            
        ) {
            if (currentWord  !== '') {
                result.push(currentWord)
            }
            result.push(symbol)
            currentWord = ''
            continue
        }

        if (symbol !== ' ') {
            currentWord += symbol
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
    let word = ''
    let nextWord = ''
    let result

    for (let i=0; i<words.length; i++) {
        word = words[i]
        nextWord = words[i+1]
        if ( word === 'one' || word === 'dot' || word === 'number' ) {
            if ( nextWord ===',' ) {
                i++
            }
            continue
        }
        moderatedWords.push(word)
    }
    

    result = moderatedWords[0]
    for (let i = 1; i < moderatedWords.length; i++) {
        word = moderatedWords[i]

        if (word.length===1) {
            if (word === ','
            || word === '!'
            || word === '?'
            || word === '.' 
            ) {
                result += word
                continue
            }
        }
            result = result + ' ' + word
        
    }

    return result
}

console.log(unmoderatedString);
console.log(moderateString(unmoderatedString))