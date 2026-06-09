import { headers } from "./utils/const/customer.js";
import { renderTable } from "./utils/table/index.js";
import { renderDialog } from "./utils/dialog/index.js";

const getCustomers = async () => {
    try {
        const response = await fetch("http://localhost:3000/customers");
        return await response.json();
    } catch {
        alert("get data failed");
    }
};

const init = async () => {
    const customers = await getCustomers();

    const panel = document.querySelector(".panel");
    panel.append(renderTable(headers, customers));

    const btnAdd = document.getElementById("btn-add-customer");

    btnAdd.addEventListener("click", () => {
        renderDialog({}, false);

        document.getElementById("popup-toggle").checked = true;
    });
};

init();
