// Мінімум

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, 
// ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:

let shoppingList = [
     {
        nameProduct: "Bread",
        quantity: 1,
        bought: false,
        price: 20,
        sum: 20,
     },

     {
        nameProduct: "Ice cream",
        quantity: 2,
        bought: true,
        price: 15,
        sum: 30,
     },

     {
        nameProduct: "Apples",
        quantity: 5,
        bought: false,
        price: 5,
        sum: 25,
     },

     {
        nameProduct: "Water",
        quantity: 3,
        bought: false,
        price: 10,
        sum: 30,
     },

     {
        nameProduct: "Tomatoes",
        quantity: 3,
        bought: true,
        price: 6,
        sum: 18,
     },
]

// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// shoppingList.sort((a, b) => b.bought - a.bought);
// console.log(shoppingList);




// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

// let chekedProduct = function(name) {
//     for (let key of shoppingList) {
//         if (key.nameProduct == name) {
//             key.bought = true;
//         }
//     }
//     return shoppingList;
// }

// console.log(chekedProduct("Apples"));


// Норма

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)

// let deleteProduct = function(name) {
//     return shoppingList.filter(shoppingList => shoppingList.nameProduct !== name)
// }

// console.log(deleteProduct("Water"));


// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій 
// покупці, а не додавати нову. При цьому також повинна 
// змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

// let addProduct = function(name1, quantity1, bought1, price1) {
//     for(let key of shoppingList) {
//         if(key.nameProduct == name1) {
//             key.quantity = key.quantity + quantity1;
//             key.sum = key.sum + (quantity1 * price1);
//             return shoppingList;
//         } else {
//              shoppingList.push({
//                 nameProduct: name1,
//                 quantity: quantity1,
//                 bought: bought1,
//                 price: price1,
//                 sum: quantity1 * price1
//              });
//              return shoppingList
//         }
//     }
// }
// console.log(addProduct("Milk", 4, false, 20));
// console.log(addProduct("Bread", 2, false, 20));


// Максимум

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
// let sumAllProducts = function(arr) {
//     sumProducts = 0;
//     for (let key of arr) {
//         sumProducts = sumProducts + key.sum;
//     }
//     return sumProducts;
// }
// console.log(sumAllProducts(shoppingList));




// Підрахунок суми всіх (не) придбаних продуктів.

// let sumOfUnpurchased = function(arr) {
//     let sumUnpurchased = 0;
//     for (let key of arr) {
//         if (key.bought === false) {
//             sumUnpurchased = sumUnpurchased + key.sum;
//         }
//     }
//     return sumUnpurchased;
// }
// console.log(sumOfUnpurchased(shoppingList));



// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до 
// більшого, в залежності від параметра функції, який вона приймає)

// shoppingList.sort((a, b) => b.sum - a.sum);
// shoppingList.sort((a, b) => a.sum - b.sum);
// console.log(shoppingList);

// let sortProducts = function(arr, action1) {
//     if (action1 == ">" ) {
//       return arr.sort((a, b) => b.sum - a.sum);
//     } else if (action1 == "<" ) {
//         return arr.sort((a, b) => a.sum - b.sum);
//     }
// }
// console.log(sortProducts(shoppingList, "<"))

