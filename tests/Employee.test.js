import Employee from "../classes/Employee.js";

describe("Employee class", () => {

    let worker = new Employee('Max', '12345', 'max@holzmann.io')

    it('should return the employees name', () => {
        expect(worker.getName()).toEqual('Max');
    })

    it('should return the employees id', () => {
        expect(worker.getId()).toEqual('12345');
    })
        
    it("should return the employee's email", () => {
        expect(worker.getEmail()).toEqual('max@holzmann.io'); 
    })

    it("should return the employee's role", () => {
        expect(worker.getRole()).toEqual('Employee');
    })
})
