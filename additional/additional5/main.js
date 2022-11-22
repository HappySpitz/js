//Всі функції повинні бути описані стрілочним типом!!!!
//    - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

//const min = (a, b, c) => {
//    if (a < b && a < c) {
//        console.log(a);
//    } else if (b < a && b < c) {
//        console.log(b);
//    } else if (c < a && c < b) {
//        console.log(c);
//    }
//}
//min(1,2,5);

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

//const max = (a, b, c) => {
//    if (a > b && a > c) {
//        console.log(a);
//    } else if (b > a && b > c) {
//        console.log(b);
//    } else if (c > a && c > b) {
//        console.log(c);
//    }
//}
//max(1,2,5);

//- створити функцію яка повертає найбільше число з масиву

//let a = [1, 3, 8, 90, 100, 35, 56, 2, 0.1, 67];
//const max = (array) => {
//    let max = array[0];
//    for (const arr of array) {
//        if (arr > max) {
//            max = arr;
//        }
//    }
//    return max
//}
//console.log(max(a))

//- створити функцію яка повертає найменьше число з масиву

//let a = [1, 3, 8, 90, 100, 35, 56, 2, 0.1, 67];
//const min = (array) => {
//    let min = array[0];
//    for (const arr of array) {
//        if (arr < min) {
//            min = arr;
//        }
//    }
//    return min
//}
//console.log(min(a))

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13

//let a = [1,2,10];
//const sum = (numbers) => {
//    let count = 0;
//    for (let i = 0; i < numbers.length; i++) {
//        let number = numbers[i];
//        count += number;
//    }
//    return count
//}
//console.log(sum(a))

//- Дано натуральное число n. Выведите все числа от 1 до n.

//let number = (n) => {
//    for (let i = 1; i <= number; i++) {
//        console.log(i)
//                }
//        }
//number(9)

//- Даны два целых числа A и В .
// Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.

//let numbers = (a, b) => {
//    for (let i = a, j = a; i <= b, j >= b; i++, j--) {
//       if (a < b) {
//           console.log(i)
//       }
//       else if (a > b) {
//           console.log(j)
//       }
//               }
//        }
//numbers(27, 1)

//-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//  EXAMPLE:
//  foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//  foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//  foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

//function numbArr(array, num) {
//    for (let i = 0; i < array.length; i++) {
//        if (array[i+1]) {
//            let asd = array[num];
//            array[num] = array [num+1];
//            array[num+1] = asd
//        }
//        else {
//            console.log('error')
//        }
//    }
//    return array
//}
//
//let foo = [9, 8, 0, 4];
//console.log(numbArr(foo, 2))

//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
//Двожина масиву від 2 до 100
//EXAMPLE:
//[1,0,6,0,3] => [1,6,3,0,0]
//[0,1,2,3,4] => [1,2,3,4,0]
//[0,0,1,0]   => [1,0,0,0]

let foo = [9, 8, 0, 4, 100, 0, 9, 8, 8];
function numbArr(array) {
    const newArr = [];
    let counter = 0;
    let index = 0;
    for (let i = 0; i < array.length; i++) {
    array[i] ? newArr[index++] = array[i]:counter++
    }
    const  num = newArr.length;
    for (let i = num; i < num + counter; i++) {
        newArr[i] = 0;
    }
    return newArr
}
console.log(numbArr(foo))