const testListGood = [6, 2, -5, 3, 1, 4, 1, 4, 6, 9, 9, 9, 0, -8]
const testList1 = [6, '2a', -5, 3, 1, 4, 1, 4, 6, 9, 9, 9, 0, -8]
const testList2 = [6, 2, -5]
const testList3 = [ 1, 1, 4,  4, 1, 1]
const testList4 = [6]

function sortArray(inputList) {

    const result = []
    let intermediateList = []
    let minValue

// перевірка чи всі елементи в заданому масиві числа    
    for (const item of inputList) {
        if ( isNaN(item) ) {
            return NaN
        }
    }

    if (inputList.length === 1) {
        return inputList
    }

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

    console.log('minValue - ', minValue)

// формуємо масиви 'result' додаванням знайденого вище мінімального елементу і проміжний - з елементів, що залишились
    for (const item of inputList) {
        if ( item === minValue ) {
            result.push(item)            
        }
            else {
                intermediateList.push(item)
            }
    }

    console.log('intermediateOtherList before check: ', intermediateList)

    if ( (intermediateList.length) === 0 ) {
        console.log('intermediateList.length-', intermediateList.length);
        break
    } else 
    {
        inputList = intermediateList
        intermediateList = []
    }



    } //

console.log('=========================================')

return result
}

console.log('Відсортований масив - ', sortArray(testListGood) )
console.log('Початковий масив - ', testListGood )

//   АЛГОРИТМ - шукаємо мінімальні значення в заданому масиві і в кожній ітерації це мінімальне значення видаляємо із заданого масиву і додаємо до результуючого!
// 
//
// створюєм пустий результуючий масив і проміжний масиви
// шукаєм мінімальне значення в заданому масиві і додаємо його до результуючого
// шукаєм мінімальне значення в залишковому масиві
// обнуляєм залишковий
// перебираєм масив і якщо зустрічається це мінімальне значення то додаємо його в новий масив(результ), а інакше (інші елементи) додаємо в залишковий масив 
//