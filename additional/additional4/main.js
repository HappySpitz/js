//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

//let numbers = function min(a,b,c)  {
//    if (a < b && a < c) {
//        return a;
//    } else if (b < a && b < c) {
//        return b;
//    } else if (c < a && c < b) {
//        return c
//    }
//}
//let number = numbers(5,2,7)
//console.log(number)

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

//let numbers = function max(a,b,c)  {
//    if (a > b && a > c) {
//        return a;
//    } else if (b > a && b > c) {
//        return b;
//    } else if (c > a && c > b) {
//        return c
//    }
//}
//let number = numbers(5,2,7)
//console.log(number)

//- створити функцію яка повертає найбільше число з масиву

//let a = [1, 3, 8, 90, 100, 35, 56, 2, 0.1, 67];
//const max = function (array) {
//    let count = array[0];
//    for (const arr of array) {
//        if (arr > count) {
//            count = arr;
//        }
//    }
//    return count
//}
//let max1 = max(a)
//console.log(max1)

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

//let a = [100, 2, 6];
//const arithmeticMean = function (array) {
//    let count = 0;
//    for (arr of array) {
//        count += arr
//    }
//    return count/array.length
//}
//let arithmeticMean1 = arithmeticMean(a);
//console.log(arithmeticMean1)

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

//let numbers = function (...xxx) {
//    let min = xxx[0];
//    let max = xxx[0];
//    for (const x of xxx) {
//        if (x < min) {
//            min = x;
//        }
//        if (x > max) {
//            max = x;
//        }
//    }
//    console.log(max);
//    return min
//}
//let a = numbers(0, -9, 92, 7)
//let b = numbers(6, -7, 5, 8, 1000, 100, 9, 5, -1000);

//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

//let numbers = function(array) {
//    for (let i = 0; i < 100; i++) {
//    array[i] = Math.round(Math.random()*100)
//    }
//}
//let a = [];
//numbers(a)
//console.log(a)

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.

//let numbers = function(array,limit) {
//    for (let i = 0; i < 100; i++) {
//        array[i] = Math.round(Math.random()*limit)
//    }
//}
//let a = [];
//let count = 12;
//numbers(a, count)
//console.log(a)

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

//let arr = [1, 2, 3];
//const rra = [];
//let newArr = function (array, numbers) {
//    for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
//       numbers[j] = array[i]
//    }
//    return numbers
//}
//let a = newArr(arr, rra)
//console.log(a)

//- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

//function calc() {
//    if (arguments.length === 1) {
//        return arguments[0];
//    } else if (arguments.length === 2) {
//        return arguments[0] + arguments[1]
//    }
//}
//console.log(calc(2));
//console.log(calc(12, 9))

//- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//    EXAMPLE:
//[1,2,3,4]
//    [2,3,4,5]
//результат
//    [3,5,7,9]

//let a = [1, 2, 3];
//let b = [2, 3, 4];
//let c = [];
//let sum = function (arr1, arr2, newArr) {
//    for (let i = 0, j = 0, k = 0; i < arr1.length, j < arr2.length; i++, j++, k++) {
//        newArr[k] = arr1[i]+arr2[j]
//    }
//    return newArr
//}
//sum(a, b, c)
//console.log(c)

//- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//EXAMPLE:
//    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

//let a = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//let b = [];
//let arrKey = function (array, newArr) {
//    for (arr of array) {
//        for (let key in arr) {
//            let newArr = [key]
//            console.log(newArr)
//        }
//    } return newArr
//}
//arrKey(a, b)

//    - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//EXAMPLE:
//    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

//let a = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//let b = [];
//let arrKey = function (array, newArr) {
//    for (arr of array) {
//        for (let key in arr) {
//            let newArr = [arr[key]];
//            console.log(newArr)
//        }
//    } return newArr
//}
//let abc = arrKey(a, b)

