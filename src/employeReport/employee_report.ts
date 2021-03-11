import {Employee, Sorting} from "./contract";

export class EmployeeReport implements Sorting{

    public getAgeEmployee(employee: Employee[]) {
        return employee.filter(employe => employe.age > 18)
    }

    ascendingSortByName(employee: Employee[]): Employee[] {
        return this.getAgeEmployee(employee).sort((emp1, emp2) => {
            return emp1["name"].toUpperCase() > emp2["name"].toUpperCase() ? 1 : -1
        })
    }
    descendingSortByName(employee: Employee[]): Employee[] {
        return this.getAgeEmployee(employee).sort((emp1, emp2) => {
            return emp1['name'].toUpperCase() > emp2['name'].toUpperCase() ? -1 : 1
        })
    }

}