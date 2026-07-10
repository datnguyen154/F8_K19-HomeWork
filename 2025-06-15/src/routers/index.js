import Navigo from "navigo";

const router = new Navigo("/");

router.on("/products/", function () {
    console.log("Day la product");
});

router.on("/customers/", function () {
    console.log("Day la customer");
});

router.resolve();
