const employees = [
    { id: 1, name: "Alice", age: 23, status: "working" },
    { id: 3, name: "Bob", age: 25, status: "working" },
    { id: 6, name: "John", age: 27, status: "working" },
    { id: 8, name: "David", age: 23, status: "quit_job" },
    { id: 10, name: "Eve", age: 20, status: "working" },
];

const products = [
    { id: 1, name: "Phone", price: 1200 },
    { id: 2, name: "Laptop", price: 3000 },
    { id: 3, name: "Tab", price: 2000 },
    { id: 4, name: "PC", price: 800 },
    { id: 5, name: "Monitor", price: 1500 },
];

const orders = [
    { id: 1, employeeId: 1, productId: 4, quantity: 1 },
    { id: 2, employeeId: 3, productId: 2, quantity: 4 },
    { id: 3, employeeId: 1, productId: 5, quantity: 3 },
    { id: 4, employeeId: 6, productId: 1, quantity: 2 },
    { id: 5, employeeId: 3, productId: 5, quantity: 3 },
    { id: 6, employeeId: 8, productId: 1, quantity: 1 },
    { id: 7, employeeId: 10, productId: 3, quantity: 2 },
];

// HÀM DÙNG CHUNG: Tìm giá trị lớn nhất trong một Object
function getMaxValueFromMap(mapObj) {
    const keys = Object.keys(mapObj);
    if (keys.length === 0) return 0;

    let maxValue = mapObj[keys[0]]; // Đặt lính canh là giá trị đầu tiên

    for (let i = 1; i < keys.length; i++) {
        const currentValue = mapObj[keys[i]];
        if (currentValue > maxValue) {
            maxValue = currentValue;
        }
    }
    return maxValue;
}

// Ex1:

// function getWorkingEmployees() {
//     return employees.filter((employee) => employee.status === "working");
// }

// const workingStaff = getWorkingEmployees();
// console.log("Danh sach nhan vien dang lam viec: ", workingStaff);

// Ex2:

// function getOldestEmployee() {
//     const ages = employees.map((emp) => emp.age);
//     let maxAge = ages[0];
//     for (let i = 0; i < ages.length; i++) {
//         if (ages[i] > maxAge) {
//             maxAge = ages[i];
//         }
//     }

//     return employees.filter((emp) => emp.age === maxAge);
// }

// const oldestStaff = getOldestEmployee();
// console.log("Nhan vien lon tuoi nhat la: ", oldestStaff);

// Ex 3:

// function getCheapestProduct() {
//     const prices = products.map((product) => product.price);

//     let minPrice = prices[0];
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] < minPrice) {
//             minPrice = prices[i];
//         }
//     }

//     return products.filter((product) => product.price === minPrice);
// }

// const cheapestPro = getCheapestProduct();
// console.log("San pham gia re nhat la: ", cheapestPro);

// Ex 4:

// function getBestSellingProductByQuantity() {
//     const quantityMap = {};
//     for (let i = 0; i < orders.length; i++) {
//         const order = orders[i];
//         if (quantityMap[order.productId]) {
//             quantityMap[order.productId] += order.quantity;
//         } else {
//             quantityMap[order.productId] = order.quantity;
//         }
//     }

//     const maxQuantity = getMaxValueFromMap(quantityMap);

//     return products.filter(
//         (product) => quantityMap[product.id] === maxQuantity,
//     );
// }

// const bestSellingProduct = getBestSellingProductByQuantity();
// console.log("San pham ban chay nhat la:", bestSellingProduct);

// Ex 5:

// function getHighestRevenueProducts() {
//     const revenueMap = {};
//     for (let i = 0; i < orders.length; i++) {
//         const order = orders[i];
//         const product = products.find((p) => p.id === order.productId);

//         if (!product) continue;
//         const orderRevenue = order.quantity * product.price;

//         if (revenueMap[order.productId]) {
//             revenueMap[order.productId] += orderRevenue;
//         } else {
//             revenueMap[order.productId] = orderRevenue;
//         }
//     }

//     const maxRevenue = getMaxValueFromMap(revenueMap);

//     return products.filter((product) => revenueMap[product.id] === maxRevenue);
// }

// const topRevenueProducts = getHighestRevenueProducts();
// console.log("San pham co doanh thu cao nhat ( nhieu tien nhat ) la:  ", topRevenueProducts);

// Ex 6:

// function getTopSellingEmployees() {
//     const salesMap = {};
//     for (let i = 0; i < orders.length; i++) {
//         const order = orders[i];
//         if (salesMap[order.employeeId]) {
//             salesMap[order.employeeId] += order.quantity;
//         } else {
//             salesMap[order.employeeId] = order.quantity;
//         }
//     }

//     const maxQuantity = getMaxValueFromMap(salesMap);

//     return employees.filter((emp) => salesMap[emp.id] === maxQuantity);
// }
// const bestEmployees = getTopSellingEmployees();
// console.log("Nhan vien ban nhieu hang nhat la:", bestEmployees);

// Ex 7:

// function getTopRevenueEmployees() {
//     const revenueMap = {};

//     for (let i = 0; i < orders.length; i++) {
//         const order = orders[i];

//         const product = products.find((p) => p.id === order.productId);
//         if (!product) continue;

//         const orderRevenue = order.quantity * product.price;

//         if (revenueMap[order.employeeId]) {
//             revenueMap[order.employeeId] += orderRevenue;
//         } else {
//             revenueMap[order.employeeId] = orderRevenue;
//         }
//     }

//     const maxRevenue = getMaxValueFromMap(revenueMap);

//     return employees.filter((emp) => revenueMap[emp.id] === maxRevenue);
// }

// const topRevenueStaff = getTopRevenueEmployees();
// console.log("Nhan vien co doanh thu cao nhat la: ", topRevenueStaff);

// Ex 10:

// function getEmployeesSortedByRevenue() {
//     const revenueMap = {};

//     for (let i = 0; i < orders.length; i++) {
//         const order = orders[i];
//         const product = products.find((p) => p.id === order.productId);

//         if (!product) continue;
//         const orderRevenue = order.quantity * product.price;

//         if (revenueMap[order.employeeId]) {
//             revenueMap[order.employeeId] += orderRevenue;
//         } else {
//             revenueMap[order.employeeId] = orderRevenue;
//         }
//     }

//     const employeeRevenues = employees.map((emp) => {
//         const revenue = revenueMap[emp.id] || 0;

//         return {
//             ...emp,
//             totalRevenue: revenue,
//         };
//     });

//     employeeRevenues.sort((a, b) => b.totalRevenue - a.totalRevenue);

//     return employeeRevenues;
// }

// const sortedStaff = getEmployeesSortedByRevenue();
// console.log("Danh sach nhan vien xep theo doanh thu giam dan");
// console.log(sortedStaff);
