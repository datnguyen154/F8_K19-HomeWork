document.addEventListener("DOMContentLoaded", async function () {
    let accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
        alert("Bạn chưa đăng nhập!");
        window.location.href = "index.html";
        return;
    }

    async function fetchUserProfile(token) {
        return await fetch("https://dummyjson.com/auth/me", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    async function refreshAccessToken() {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) return null;

        try {
            const response = await fetch("https://dummyjson.com/auth/refresh", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    refreshToken: refreshToken,
                    expiresInMins: 60,
                }),
            });

            if (response.ok) {
                const data = await response.json();

                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("refreshToken", data.refreshToken);
                console.log("Đã làm mới token thành công!");
                return data.accessToken;
            } else {
                return null;
            }
        } catch (error) {
            console.error("Lỗi khi gọi API refresh:", error);
            return null;
        }
    }

    try {
        let response = await fetchUserProfile(accessToken);

        if (response.status === 401 || response.status === 403) {
            console.warn(
                "Access Token hết hạn, tiến hành gọi Refresh Token...",
            );

            const newAccessToken = await refreshAccessToken();

            if (newAccessToken) {
                accessToken = newAccessToken;
                response = await fetchUserProfile(accessToken);
            } else {
                throw new Error("Phiên đăng nhập đã hết hạn hoàn toàn");
            }
        }

        if (response.ok) {
            const userData = await response.json();

            document.getElementById("loading").style.display = "none";
            document.getElementById("profile-content").style.display = "block";

            document.getElementById("avatar").src = userData.image;
            document.getElementById("full-name").textContent =
                `${userData.firstName} ${userData.lastName}`;
            document.getElementById("user-name").textContent =
                userData.username;
            document.getElementById("email").textContent = userData.email;
            document.getElementById("gender").textContent =
                userData.gender === "female" ? "Nữ" : "Nam";
        } else {
            throw new Error("Lỗi không xác định khi lấy thông tin");
        }
    } catch (error) {
        console.error(error);
        alert(
            "Phiên đăng nhập đã hết hạn hoặc không hợp lệ. Vui lòng đăng nhập lại.",
        );

        localStorage.clear();
        window.location.href = "index.html";
    }

    document
        .getElementById("logout-btn")
        .addEventListener("click", function () {
            localStorage.clear();
            window.location.href = "index.html";
        });
});
