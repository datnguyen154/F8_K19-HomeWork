
import { CustomerService } from "./services/CustomerService.js";
import { EmployeeService } from "./services/EmployeeService.js";
import { ProjectService } from "./services/ProjectService.js";

const customerService = new CustomerService();
const employeeService = new EmployeeService();
const projectService = new ProjectService(employeeService);

console.log("===== Test Case 1: Tạo Customer =====");
const customer1 = customerService.create({
    name: "Công ty ABC",
    tax: "0312345678",
    address: "123 Nguyễn Văn Cừ, Hải Phòng",
});
console.log("Customer vừa tạo:", customer1);
console.assert(
    customer1.id !== undefined && customer1.id !== "",
    "FAIL: Customer phải có id",
);

console.log("\n===== Test Case 2: Cập nhật Customer =====");
const updatedCustomer = customerService.updateById(customer1.id, {
    address: "456 Lê Hồng Phong, Hải Phòng",
});
console.log("Customer sau khi cập nhật:", updatedCustomer);
console.assert(
    updatedCustomer !== null &&
        updatedCustomer.address === "456 Lê Hồng Phong, Hải Phòng",
    "FAIL: address phải được cập nhật đúng giá trị mới",
);

console.log("\n===== Test Case 3: Tạo Employee =====");
const employee1 = employeeService.create({ name: "Nguyễn Văn A" });
const employee2 = employeeService.create({ name: "Trần Thị B" });
console.log("Employee 1:", employee1);
console.log("Employee 2:", employee2);
console.assert(
    employee1.id !== employee2.id,
    "FAIL: 2 employee phải có id khác nhau",
);

console.log("\n===== Test Case 4: Tìm Employee =====");
const foundEmployee = employeeService.findById(employee1.id);
console.log("Tìm theo id hợp lệ:", foundEmployee);
console.assert(
    foundEmployee !== null && foundEmployee.id === employee1.id,
    "FAIL: phải tìm đúng employee theo id",
);

const notFoundEmployee = employeeService.findById("id-khong-ton-tai");
console.log("Tìm theo id không tồn tại:", notFoundEmployee);
console.assert(
    notFoundEmployee === null,
    "FAIL: id không tồn tại phải trả về null",
);

console.log("\n===== Test Case 5: Tạo Project =====");
console.log("(Console log dưới đây phải hiện thông báo từ employee1.receiveNoti)");
const project1 = projectService.create({
    customerId: customer1.id,
    employeeId: employee1.id,
});
console.log("Project vừa tạo:", project1);
console.assert(
    project1.id !== undefined &&
        project1.customerId === customer1.id &&
        project1.employeeId === employee1.id,
    "FAIL: Project phải được tạo đúng thông tin",
);

console.log("\n===== Test Case 6: Đổi nhân viên phụ trách Project =====");
console.log("(Console log dưới đây phải hiện thông báo 'chuyển giao phụ trách' từ employee2)");
const project1AfterEmployeeChange = projectService.updateById(project1.id, {
    employeeId: employee2.id,
});
console.log("Project sau khi đổi employee:", project1AfterEmployeeChange);
console.assert(
    project1AfterEmployeeChange !== null &&
        project1AfterEmployeeChange.employeeId === employee2.id,
    "FAIL: employeeId của Project phải được cập nhật sang employee2",
);

console.log("\n===== Test Case 7: Cập nhật Project nhưng không đổi Employee =====");
console.log("(Không được có dòng console.log nào từ receiveNoti xuất hiện sau dòng này)");
const project1AfterCustomerChange = projectService.updateById(project1.id, {
    customerId: customer1.id,
});
console.log("Project sau khi chỉ đổi customerId:", project1AfterCustomerChange);
console.log("(Kết thúc Test Case 7 — nếu không thấy dòng 'received notification' nào ở trên là ĐÚNG)");

console.log("\n===== Test Case 8: Cập nhật dữ liệu không tồn tại =====");
const updateCustomerNotFound = customerService.updateById("id-khong-ton-tai", {
    name: "Tên bất kỳ",
});
console.log("CustomerService.updateById với id không tồn tại:", updateCustomerNotFound);
console.assert(updateCustomerNotFound === null, "FAIL: phải trả về null");

const updateEmployeeNotFound = employeeService.updateById("id-khong-ton-tai", {
    name: "Tên bất kỳ",
});
console.log("EmployeeService.updateById với id không tồn tại:", updateEmployeeNotFound);
console.assert(updateEmployeeNotFound === null, "FAIL: phải trả về null");

const updateProjectNotFound = projectService.updateById("id-khong-ton-tai", {
    customerId: customer1.id,
});
console.log("ProjectService.updateById với id không tồn tại:", updateProjectNotFound);
console.assert(updateProjectNotFound === null, "FAIL: phải trả về null");
