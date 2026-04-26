// Bai 1
// function isEvenNumber(number) {
//     return number % 2 === 0;
// }

// console.log(isEvenNumber(10));


// Bai 2

// function getElectricityBill(kwh) {
//     if (kwh <= 50) {
//         return kwh * 1678;
//     } else if (kwh <= 100) {
//         return 50 * 1678 + (kwh - 50) * 1734;
//     } else if (kwh <= 200) {
//         return 50 * 1678 + 50 * 1734 + (kwh - 100) * 2014;
//     } else if (kwh <= 300) {
//         return 50 * 1678 + 50 * 1734 + 100 * 2014 + (kwh - 200) * 2536;
//     } else if (kwh <= 400) {
//         return (
//             50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (kwh - 300) * 2834
//         );
//     } else {
//         return (
//             50 * 1678 +
//             50 * 1734 +
//             100 * 2014 +
//             100 * 2536 +
//             100 * 2834 +
//             (kwh - 400) * 2927
//         );
//     }
// }

// console.log(getElectricityBill(70));

// console.log(getElectricityBill(120));


// Bai 3

// function cleanName(name, keyword) {
//     name = name.trim().toLowerCase();

//     keyword = keyword.toLowerCase();

//     return name.includes(keyword);
// }

// console.log(cleanName("   NGUYEN Van An   ", "an"));
// console.log(cleanName("   Tran Thi B ", "hoang"));
