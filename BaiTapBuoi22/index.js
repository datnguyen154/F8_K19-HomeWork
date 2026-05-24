const invoiceData = {
    meta: {
        invoiceNo: "WM-20260521-0001",
        saleDate: "2026/05/21",
        currency: "VND",
        paymentMethod: "Cash",
    },
    seller: {
        name: "WinMark 2 Hai Bà Trưng",
        address: "2 Bà Trưng - Hoàn Kiếm - HN",
        phone: "012345678",
        representative: "Đại diện WinMark",
    },
    customer: {
        name: "Nguyễn Văn A",
        age: 20,
        address: "Hà Đông, Hà Nội",
    },
    items: [
        { no: 1, name: "Ao Thun", size: "XL", quantity: 1, price: 200000 },
        { no: 2, name: "Ao Thun", size: "XL", quantity: 1, price: 200000 },
    ],
    promotion: {
        description: "Khuyến mãi 50% dành cho Khách hàng thân thiết",
        discountPercent: 50,
    },
};

const formatMoney = (amount) => {
    let strAmount = String(amount);
    let result = "";
    let count = 0;

    for (let i = strAmount.length - 1; i >= 0; i--) {
        result = strAmount[i] + result;
        count++;
        if (count === 3 && i !== 0) {
            result = "." + result;
            count = 0;
        }
    }
    return result + " đ";
};

const subTotal = invoiceData.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
);
const discountAmount = subTotal * (invoiceData.promotion.discountPercent / 100);
const finalTotal = subTotal - discountAmount;

const app = document.getElementById("invoice-app");

if (app) {
    app.innerHTML = `
        <div class="flex justify-between mb-12">
            <div class="flex flex-col gap-1.5">
                <div class="flex items-center gap-2.5 text-[26px] font-bold text-zinc-900">
                    <span class="bg-zinc-900 text-white px-2.5 py-1 rounded-lg text-xl font-extrabold tracking-wide">WM</span>
                    <span>${invoiceData.seller.name}</span>
                </div>
                <div class="text-zinc-400 text-sm mt-1">Cung cấp sản phẩm thời trang cao cấp & thiết kế độc quyền.</div>
            </div>
            <div class="text-right leading-relaxed text-sm text-zinc-600">
                <div class="bg-teal-50 text-teal-600 px-4 py-1.5 rounded text-[11px] font-bold inline-block mb-2.5 uppercase tracking-wide">Hóa đơn bán lẻ</div>
                <div><strong class="text-zinc-900 font-semibold">Mã số:</strong> ${invoiceData.meta.invoiceNo}</div>
                <div>Ngày bán: ${invoiceData.meta.saleDate}</div>
            </div>
        </div>

        <div class="flex justify-between mb-10 border-t border-zinc-100 pt-8">
            <div class="w-[48%]">
                <div class="text-xs text-zinc-400 uppercase font-semibold tracking-wide mb-4">Đơn vị bán hàng (Seller)</div>
                <div class="text-base font-bold text-zinc-900 mb-3">${invoiceData.seller.name}</div>
                <div class="flex items-center gap-2.5 text-zinc-500 text-sm mb-2.5">
                    <svg class="w-4 h-4 fill-current text-zinc-400" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    <span>${invoiceData.seller.address}</span>
                </div>
                <div class="flex items-center gap-2.5 text-zinc-500 text-sm mb-2.5">
                    <svg class="w-4 h-4 fill-current text-zinc-400" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                    <span>${invoiceData.seller.phone}</span>
                </div>
            </div>
            
            <div class="w-[48%]">
                <div class="text-xs text-zinc-400 uppercase font-semibold tracking-wide mb-4">Khách hàng (Buyer)</div>
                <div class="text-base font-bold text-zinc-900 mb-3">${invoiceData.customer.name}</div>
                <div class="flex items-center gap-2.5 text-zinc-500 text-sm mb-2.5 pl-[26px]">
                    <span>Tuổi: ${invoiceData.customer.age}</span>
                </div>
                <div class="flex items-center gap-2.5 text-zinc-500 text-sm mb-2.5">
                    <svg class="w-4 h-4 fill-current text-zinc-400" viewBox="0 0 24 24"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>
                    <span>${invoiceData.customer.address}</span>
                </div>
            </div>
        </div>

        <table class="w-full border-collapse mb-12">
            <thead>
                <tr>
                    <th class="w-[50px] py-4 px-2 text-center text-[11px] text-zinc-400 uppercase font-semibold tracking-wide border-y border-zinc-100">STT</th>
                    <th class="py-4 px-2 text-left text-[11px] text-zinc-400 uppercase font-semibold tracking-wide border-y border-zinc-100">TÊN SẢN PHẨM</th>
                    <th class="py-4 px-2 text-center text-[11px] text-zinc-400 uppercase font-semibold tracking-wide border-y border-zinc-100">SIZE</th>
                    <th class="py-4 px-2 text-center text-[11px] text-zinc-400 uppercase font-semibold tracking-wide border-y border-zinc-100">SL</th>
                    <th class="py-4 px-2 text-right text-[11px] text-zinc-400 uppercase font-semibold tracking-wide border-y border-zinc-100">ĐƠN GIÁ</th>
                    <th class="py-4 px-2 text-right text-[11px] text-zinc-400 uppercase font-semibold tracking-wide border-y border-zinc-100">THÀNH TIỀN</th>
                </tr>
            </thead>
            <tbody>
                ${invoiceData.items
                    .map(
                        (item) => `
                    <tr>
                        <td class="py-4 px-2 text-center font-semibold text-zinc-300">${item.no}</td>
                        <td class="py-4 px-2 text-[15px] font-medium text-zinc-700">${item.name}</td>
                        <td class="py-4 px-2 text-center text-[15px] font-medium text-zinc-700">${item.size}</td>
                        <td class="py-4 px-2 text-center text-[15px] font-medium text-zinc-700">${item.quantity}</td>
                        <td class="py-4 px-2 text-right text-[15px] font-medium text-zinc-700">${formatMoney(item.price)}</td>
                        <td class="py-4 px-2 text-right text-[15px] font-bold text-zinc-900">${formatMoney(item.price * item.quantity)}</td>
                    </tr>
                `,
                    )
                    .join("")}
            </tbody>
        </table>

        <div class="flex justify-between items-start border-t border-zinc-100 pt-8">
            <div class="bg-teal-50 border border-teal-100 rounded-lg py-4 px-5 w-[55%] flex items-center gap-3">
                <div class="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                    <h4 class="text-xs text-teal-700 uppercase font-bold mb-1 tracking-wide">Khuyến mãi / Trợ giá</h4>
                    <p class="text-[13px] text-zinc-700">${invoiceData.promotion.description}</p>
                </div>
            </div>

            <div class="w-[38%]">
                <div class="flex justify-between mb-3 text-[15px] text-zinc-600">
                    <span>Cộng tiền hàng:</span>
                    <span>${formatMoney(subTotal)}</span>
                </div>
                <div class="flex justify-between mb-3 text-[15px] text-teal-600">
                    <span>Khấu trừ giảm giá:</span>
                    <span>-${formatMoney(discountAmount)}</span>
                </div>
                <div class="flex justify-between items-center mt-4 pt-4 border-t border-dashed border-zinc-200 text-base font-bold text-zinc-900">
                    <span>Tổng thanh toán:</span>
                    <span class="text-2xl text-teal-600">${formatMoney(finalTotal)}</span>
                </div>
            </div>
        </div>
    `;
}
