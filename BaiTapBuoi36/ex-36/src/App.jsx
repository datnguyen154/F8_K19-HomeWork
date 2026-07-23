import { useState } from "react";
import "./App.css";

// 1. DỮ LIỆU SẢN PHẨM

const products = [
    {
        id: 1,
        name: "iPhone 17 Pro Max 256GB | Chính hãng",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-max_3.jpg",
        price: 35990000,
        oldPrice: 37000000,
        discountPercent: 5,
        smemberDiscount: 360000,
        reviews: 5,
    },
    {
        id: 2,
        name: "Samsung Galaxy S26 Ultra 5G 12GB 256GB",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s26-ultra-1.jpg",
        price: 30890000,
        oldPrice: 35990000,
        discountPercent: 16,
        smemberDiscount: 309000,
        studentDiscount: 500000,
        reviews: 5,
    },
    {
        id: 3,
        name: "OPPO Find X9 Ultra 12GB 512GB",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-oppo-find-x9-ultra-cam-8.jpg",
        price: 48990000,
        oldPrice: 49990000,
        discountPercent: 2,
        smemberDiscount: 490000,
        studentDiscount: 300000,
        reviews: 5,
    },
    {
        id: 4,
        name: "Samsung Galaxy Z Fold7 12GB 256GB",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-z-fold-7.jpg",
        price: 41990000,
        oldPrice: 46000000,
        discountPercent: 11,
        smemberDiscount: 420000,
        studentDiscount: 500000,
        reviews: 5,
        isAI: true,
    },
    {
        id: 5,
        name: "Samsung Galaxy S26 5G 12GB 256GB",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s26-10_5.jpg",
        price: 21490000,
        oldPrice: 25990000,
        discountPercent: 17,
        smemberDiscount: 215000,
        studentDiscount: 500000,
        reviews: null,
    },
    {
        id: 6,
        name: "Xiaomi Redmi Note 14 Pro Plus 5G 8GB 256GB",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-note-14-pro-plus.jpg",
        price: 8490000,
        oldPrice: 10800000,
        discountPercent: 21,
        smemberDiscount: 85000,
        studentDiscount: 300000,
        reviews: 5,
    },
    {
        id: 7,
        name: "Samsung Galaxy S25 Ultra 12GB 256GB",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25-ultra_3__3.png",
        price: 27790000,
        oldPrice: 33380000,
        discountPercent: 17,
        smemberDiscount: 278000,
        studentDiscount: 500000,
        reviews: 4.7,
        isAI: true,
    },
    {
        id: 8,
        name: "Samsung Galaxy A07 5G 4GB 128GB",
        image: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-a07-5g-2_3.jpg",
        price: 4790000,
        oldPrice: 5000000,
        discountPercent: 6,
        smemberDiscount: 48000,
        studentDiscount: 239500,
        reviews: null,
    },
];

function formatPrice(value) {
    return value.toLocaleString("vi-VN") + "đ";
}

// 2. COMPONENT CON: 1 THẺ SẢN PHẨM
// Component nhận vào 1 sản phẩm (product) và hàm xử lý khi bấm tim (onToggleLike)
function ProductCard({ product, liked, onToggleLike }) {
    const {
        name,
        image,
        price,
        oldPrice,
        discountPercent,
        smemberDiscount,
        studentDiscount,
        reviews,
        isAI,
    } = product;

    return (
        <div className="product-card">
            {/* Badge giảm giá góc trái */}
            {discountPercent && (
                <span className="badge badge-discount">
                    Giảm {discountPercent}%
                </span>
            )}

            {/* Badge trả góp 0% góc phải */}
            <span className="badge badge-installment">Trả góp 0%</span>

            {/* Ảnh sản phẩm (thay bằng emoji placeholder) */}
            <div className="product-image">
                <img src={image} alt={name} className="product-img" />
                {isAI && <span className="badge-ai">⚡ Galaxy AI</span>}
            </div>

            <div className="product-info">
                {/* Tên sản phẩm */}
                <h3 className="product-name">{name}</h3>

                {/* Giá */}
                <div className="product-price-row">
                    <span className="product-price">{formatPrice(price)}</span>
                    {oldPrice && (
                        <span className="product-old-price">
                            {formatPrice(oldPrice)}
                        </span>
                    )}
                </div>

                {/* Ưu đãi thành viên */}
                {smemberDiscount && (
                    <div className="tag tag-orange">
                        Smember giảm đến {formatPrice(smemberDiscount)}
                    </div>
                )}
                {studentDiscount && (
                    <div className="tag tag-blue">
                        S-Student giảm thêm {formatPrice(studentDiscount)}
                    </div>
                )}

                {/* Ghi chú trả góp */}
                <p className="installment-note">
                    Trả góp 0% - 0đ phụ phí - 0đ trả trước - kỳ hạn đến 12 tháng
                </p>

                {/* Footer: giao hàng + đánh giá + tim */}
                <div className="product-footer">
                    <span className="delivery-tag">🚚 2 Giờ</span>
                    {reviews && <span className="rating">⭐ {reviews}</span>}
                    <button
                        className="like-button"
                        onClick={() => onToggleLike(product.id)}
                        aria-label="Yêu thích"
                    >
                        {liked ? "❤️" : "🤍"}
                    </button>
                </div>
            </div>
        </div>
    );
}

function App() {
    // State lưu danh sách id sản phẩm đang được "thích"
    const [likedIds, setLikedIds] = useState([]);

    // Hàm bật/tắt "yêu thích" cho đúng sản phẩm theo id
    function handleToggleLike(id) {
        setLikedIds(
            (prevIds) =>
                prevIds.includes(id)
                    ? prevIds.filter((itemId) => itemId !== id) // đã thích -> bỏ thích
                    : [...prevIds, id], // chưa thích -> thêm vào
        );
    }

    return (
        <div className="app-container">
            <h2 className="section-title">Danh sách sản phẩm</h2>

            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        liked={likedIds.includes(product.id)}
                        onToggleLike={handleToggleLike}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
