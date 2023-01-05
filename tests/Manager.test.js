import Manager from "../classes/Manager";


describe('Manager Class', () => {

    let manager = new Manager('The Manager', '112233', 'max@holzmann.io', 'Office 1')

    it('should return the managers name', () => {
        expect(manager.getName()).toEqual('The Manager');
    })

    it('should return the employees id', () => {
        expect(manager.getId()).toEqual('112233');
    })
        
    it("should return the employee's email", () => {
        expect(manager.getEmail()).toEqual('max@holzmann.io'); 
    })

    it("should return the manager's school name", () => {
        expect(manager.getOfficeNumber()).toEqual('Office 1')
    })

    it("should return the manager's role (manager)", () => {
        expect(manager.getRole()).toEqual('Manager');
    })

})