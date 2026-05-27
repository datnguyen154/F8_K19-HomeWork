let cartCount = 0;

async function getProducts() {
    const gridContainer = document.getElementById("products-grid");
    const countSpan = document.getElementById("product-count");
    const cartBadge = document.getElementById("cart-badge");

    try {
        const response = await fetch("https://fakestoreapi.com/products");

        const products = await response.json();
        countSpan.textContent = products.length;

        const htmlCards = products
            .map((product) => {
                return `
                <div class="product-card">
                    <span class="tag-category">${product.category}</span>
                    <div class="img-wrapper">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <h3 class="product-title" title="${product.title}">${product.title}</h3>
                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <span>${product.rating ? product.rating.rate : "0"}</span>
                        <span class="rating-count">(${product.rating ? product.rating.count : "0"})</span>
                    </div>
                    <div class="card-footer">
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <button class="btn-add-cart" title="Thêm vào giỏ hàng">
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            `;
            })
            .join("");

        gridContainer.innerHTML = htmlCards;

        const addToCartButtons = document.querySelectorAll(".btn-add-cart");

        addToCartButtons.forEach((button) => {
            button.addEventListener("click", () => {
                cartCount++;

                cartBadge.textContent = cartCount;

                button.style.backgroundColor = "#4f46e5";
                setTimeout(() => {
                    button.style.backgroundColor = "#0f172a";
                }, 200);
            });
        });
    } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
        gridContainer.innerHTML = `
            <div class="loading" style="color: #ef4444;">
                <i class="fa-solid fa-circle-exclamation"></i> Không thể tải dữ liệu sản phẩm.
            </div>
        `;
    }
}

getProducts();
