import Intern from "../classes/Intern.js";


describe('Intern Class', () => {

    let intern = new Intern('Maximilian', '23456', 'max@holzmann.io', 'The Intern School')

    it('should return the interns name', () => {
        expect(intern.getName()).toEqual('Maximilian');
    })

    it('should return the employees id', () => {
        expect(intern.getId()).toEqual('23456');
    })
        
    it("should return the employee's email", () => {
        expect(intern.getEmail()).toEqual('max@holzmann.io'); 
    })

    it("should return the intern's school name", () => {
        expect(intern.getSchool()).toEqual('The Intern School')
    })

    it("should return the intern's role (intern)", () => {
        expect(intern.getRole()).toEqual('Intern');
    })

})