export interface Employee {
    name:string
    age: number
}
export interface Sorting {
    ascendingSortByName(employee: Employee[]):Employee[]
    descendingSortByName(employee: Employee[]): Employee[]
}
