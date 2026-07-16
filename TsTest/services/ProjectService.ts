import { Project } from "../entities/Project.js";
import { EmployeeService } from "./EmployeeService.js";

export class ProjectService {
    private projects: Project[] = [];
    private employeeService: EmployeeService;

    constructor(employeeService: EmployeeService) {
        this.employeeService = employeeService;
    }

    public create(project: Omit<Project, "id">): Project {
        const newProject = new Project(project.customerId, project.employeeId);
        this.projects.push(newProject);

        const employee = this.employeeService.findById(newProject.employeeId);
        if (employee) {
            employee.receiveNoti("Bạn vừa được gán vào dự án mới.");
        }

        return newProject;
    }

    public findById(id: string): Project | null {
        const found = this.projects.find((p) => p.id === id);
        if (found === undefined) {
            return null;
        }
        return found;
    }

    public updateById(id: string, data: Partial<Project>): Project | null {
        const project = this.findById(id);
        if (!project) {
            return null;
        }

        const previousEmployeeId = project.employeeId;

        const { id: _omitId, ...updatableData } = data;
        Object.assign(project, updatableData);
        const employeeIdChanged =
            data.employeeId !== undefined &&
            data.employeeId !== previousEmployeeId;

        if (employeeIdChanged) {
            const newEmployee = this.employeeService.findById(
                project.employeeId,
            );
            if (newEmployee) {
                newEmployee.receiveNoti(
                    "Bạn đã được chuyển giao phụ trách dự án này.",
                );
            }
        }

        return project;
    }
}
