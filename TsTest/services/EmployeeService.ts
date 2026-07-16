import { Employee } from "../entities/Employee.js";

export class EmployeeService {
    private employees: Employee[] = [];

    public create(employee: Omit<Employee, "id" | "receiveNoti">): Employee {
        const newEmployee = new Employee(employee.name);
        this.employees.push(newEmployee);
        return newEmployee;
    }

    public findById(id: string): Employee | null {
        const found = this.employees.find((e) => e.id === id);
        if (found === undefined) {
            return null;
        }
        return found;
    }

    public updateById(id: string, data: Partial<Employee>): Employee | null {
        const employee = this.findById(id);
        if (!employee) {
            return null;
        }
        const { id: _omitId, receiveNoti: _omitFn, ...updatableData } = data;
        Object.assign(employee, updatableData);

        return employee;
    }
}
