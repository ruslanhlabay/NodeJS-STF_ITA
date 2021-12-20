const testList = [6, 2, -5, 3, 1, 4, 1, 4, 6, 9]

function sortArray(inputList) {
    let iterationNumber = 0
    let minValue = inputList[0]
    let intermediateValue
    let intermediateList = []
    let result = []
    let preparedList = []
    let flagOfEndSorting = 0
    let itemKey
    
    console.log('inputList:  ', inputList)
    console.log('intermediate List:  ', intermediateList)

    // for (const item of inputList) {
    //     const preparedItem = Number(item)

    //     if ( !isNaN(preparedItem) ) {
    //             inputList.push(preparedItem)
    //     }
    //     else {
    //         console.log('Помилка у вхідних даних')

    //         return NaN
    //     }
    // }


    for (const item of inputList) {



// знаходим мінімальне значення у масиві
    for (const item of inputList) {
        if ( !(item <= minValue) ) {
            continue
        } 
            else {
                minValue = item
                flagOfEndSorting = 1
            }
        
    }

    if ( !minValue) {
        console.log('!!!!!!! - NO MIN VALUE');
        exit
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


    // if ( (!flagOfEndSorting) || (intermediateList===[]) ){
    //     console.log('!!!!!!!');
    //     break
    // }

    console.log('result list', result)
    console.log('intermediateList: ', intermediateList)

    inputList = intermediateList
    minValue = intermediateList[0]
    flagOfEndSorting = 0
    intermediateList = []
    iterationNumber++

    }

console.log(iterationNumber, '- ітерацій')

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

