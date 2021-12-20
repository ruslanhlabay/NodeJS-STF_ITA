//const testList = [6, 2, -5, 3, 1, 4, 1, 4, 6, 9]
const testList = [6, 2]

function sortArray(inputList) {
    let iterationNumber = 0
    let minValue = inputList[0]
    let intermediateList = []
    let result = []
    let preparedList = []
    
    //console.log('intermediate List:  ', intermediateList)

    for (const item of inputList) {

    minValue = inputList[0]

// знаходим мінімальне значення у масиві
    for (const item of inputList) {
        if ( !(item <= minValue) ) {
            continue
        } 
            else {
                minValue = item
            }
    }

    if (isNaN(minValue)) {
        console.log('!!!!!!! - NO MIN VALUE');
        break
    }

    console.log('minValue - ', minValue)

// формуємо масиви 'result' з мінімальних(ого) значень(ня) і проміжний - зі всіма іншими значеннями    
    for (const item of inputList) {
        if ( item === minValue ) {
            result.push(item)            
        }
            else {
                intermediateList.push(item)
            }
    }

    console.log('intermediateResult list', result)
    console.log('intermediateOtherList: ', intermediateList)

    inputList = intermediateList
    intermediateList = []
    iterationNumber++

    } //

console.log('====================')
console.log(iterationNumber, '- ітерацій')
console.log('====================')

return result
}

console.log('Відсортований масив - ', sortArray(testList) )
console.log('Початковий масив - ', testList )

//   АЛГОРИТМ
// присвоєму залишковому масиву вхідний масив
// шукаємо мінімальне значення в залишковому масиві
// обнуляємо залишковий
// перебираємо масив і якщо зустрічаємо це мінімальне значення то додаємо його в новий масив(результ), а інакше (інші елементи) додаємо в залишковий масив 
//

