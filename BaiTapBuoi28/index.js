const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    const submitBtn = document.querySelector(".login-btn");
    submitBtn.textContent = "Đang xử lý...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: usernameInput,
                password: passwordInput,
                expiresInMins: 60,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);

            alert("Đăng nhập thành công!");

            window.location.href = "profile.html";
        } else {
            alert(
                "Đăng nhập thất bại: " +
                    (data.message || "Sai thông tin đăng nhập"),
            );
        }
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        alert("Có lỗi kết nối xảy ra. Vui lòng kiểm tra lại mạng!");
    } finally {
        submitBtn.textContent = "Đăng Nhập";
        submitBtn.disabled = false;
    }
});
