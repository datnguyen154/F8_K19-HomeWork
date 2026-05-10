const products = [
    { id: 1, name: "iPhone", price: 2000 },
    { id: 2, name: "Samsung", price: 1500 },
    { id: 3, name: "Xiaomi", price: 1000 },
    { id: 4, name: "Oppo", price: 1200 },
];
const orders = [
    {
        id: 1,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 1 },
        ],
    },
    {
        id: 2,
        items: [
            { productId: 1, quantity: 1 },
            { productId: 3, quantity: 3 },
        ],
    },
    {
        id: 3,
        items: [
            { productId: 2, quantity: 2 },
            { productId: 4, quantity: 1 },
        ],
    },
];

function getTopRevenueProduct(products, orders) {
    const quantityMap = {};
    for (let i = 0; i < orders.length; i++) {
        const currentOrder = orders[i];
        for (let j = 0; j < currentOrder.items.length; j++) {
            const currentItem = currentOrder.items[j];
            if (quantityMap[currentItem.productId]) {
                quantityMap[currentItem.productId] += currentItem.quantity;
            } else {
                quantityMap[currentItem.productId] = currentItem.quantity;
            }
        }
    }

    let maxRevenue = 0;
    let topProduct = null;

    for (let k = 0; k < products.length; k++) {
        const currentProduct = products[k];


        let totalQuantity = 0;
        if (quantityMap[currentProduct.id]) {
            totalQuantity = quantityMap[currentProduct.id];
        }

        const revenue = currentProduct.price * totalQuantity;

   
        if (revenue > maxRevenue) {
            maxRevenue = revenue;
            topProduct = {
                id: currentProduct.id,
                name: currentProduct.name,
                totalQuantity: totalQuantity,
                revenue: revenue,
            };
        }
    }

    return topProduct;
}

const result = getTopRevenueProduct(products, orders);
console.log(result);
