import {EmployeeReport} from "./employee_report";

describe("Contract Report", () => {
    let employeReport : EmployeeReport
    beforeEach(() => {
        employeReport = new EmployeeReport();
    })
    describe("As shop owner I want to view a list of all employees, " +
        "which are older than 18 years, so that I know who is allowed to " +
        "work on Sundays As shop owner I want the list of employees to be " +
        "sorted by their name, so I can find employees easier.", () => {

        const employees = [
            { name: 'Max', age: 17 },
            { name: 'Sepp', age: 18 },
            { name: 'Nina', age: 15 },
            { name: 'Mike', age: 51 },
            { name: "Cédric", age: 27}
        ];
        it('retrieve a list of employees which are older than 18', () => {
            expect(employeReport.getAgeEmployee(employees)).toStrictEqual([employees[3],employees[4]])
        })
        it('retrieve employees ordered by their name', () => {

            expect(employeReport.ascendingSortByName(employees)).toStrictEqual([employees[4],employees[3]])
        })
        it('retrieve employees in descending order by their name ', () => {
            expect(employeReport.descendingSortByName(employees)).toStrictEqual([employees[3],employees[4]]);
        })
    })
})