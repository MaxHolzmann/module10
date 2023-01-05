import Engineer from "../classes/Engineer";

describe('Engineer Class', () => {

    let engineer = new Engineer('The Engineer', '77777', 'max@holzmann.io', 'MaxHolzmann')

    it('should return the engineers name', () => {
        expect(engineer.getName()).toEqual('The Engineer');
    })

    it('should return the employees id', () => {
        expect(engineer.getId()).toEqual('77777');
    })
        
    it("should return the employee's email", () => {
        expect(engineer.getEmail()).toEqual('max@holzmann.io'); 
    })

    it("should return the engineer's github", () => {
        expect(engineer.getGithub()).toEqual('MaxHolzmann');
    })

    it("should return the engineer's role (engineer)", () => {
        expect(engineer.getRole()).toEqual('Engineer');
    })

})
