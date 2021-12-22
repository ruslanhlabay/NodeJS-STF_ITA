const testListGood = [6, 2, -5, 3, 1, 4, 1, 4, 6, 9, 9, 9, 0, -8]
const testList1 = [6, '2a', -5, 3, 1, 4, 1, 4, 6, 9, 9, 9, 0, -8]
const testList2 = ['2b']
const testList3 = [1, 1, 4, 0,  4, 1, 1]
const testList4 = [6]
const testList5 = []

function sortArray(inputList) {

    const result = []
    let preparedList = [...inputList]
    let intermediateList = []
    let minValue

    // перевірка чи всі елементи в заданому масиві числа
    for (const item of preparedList) {
        if (isNaN(item)) {
            return NaN
        }
    }

    if (preparedList.length <= 1) {
        return preparedList
    }

    // Початок сортування
    for (const item of preparedList) {

        minValue = preparedList[0]
        // знаходим мінімальне значення у заданому масиві
        for (const item of preparedList) {
            if (item >= minValue) {
                continue
            }
            minValue = item
        }

        // формуєм масиви 'result'(відсортований) додаванням знайденого вище мінімального елементу і проміжний - з елементів, що залишились
        for (const item of preparedList) {
            if (item === minValue) {
                result.push(item)
            }
            else {
                intermediateList.push(item)
            }
        }

        // перевірка чи заповнився проміжний масив і достроковий вихід з основного циклу якщо цей масив пустий
        if ((intermediateList.length) === 0) {
            break
        }
            preparedList = intermediateList
            intermediateList = []
    }

    return result

}


console.log('Початковий масив - ', testListGood)
console.log('Відсортований масив - ', sortArray(testListGood))
console.log('================================================');
console.log('Початковий масив - ', testList5)
console.log('Відсортований масив - ', sortArray(testList5))
console.log('================================================');
console.log('Початковий масив - ', testList4)
console.log('Відсортований масив - ', sortArray(testList4))
console.log('================================================');
console.log('Початковий масив - ', testList3)
console.log('Відсортований масив - ', sortArray(testList3))
console.log('================================================');
console.log('Початковий масив - ', testList2)
console.log('Відсортований масив - ', sortArray(testList2))
console.log('================================================');
console.log('Початковий масив - ', testList1)
console.log('Відсортований масив - ', sortArray(testList1))

//   АЛГОРИТМ - шукаємо мінімальні значення в заданому масиві і в кожній ітерації це мінімальне значення видаляємо із заданого масиву і додаємо до результуючого!
//
// створюєм пустий результуючий масив і пустий проміжний масив
// шукаєм мінімальне значення в заданому масиві і додаємо його до результуючого
// елементи які залишились додаємо до проміжного масиву
// в заданий масив копіюєм проміжний масив і обнуляємо останній