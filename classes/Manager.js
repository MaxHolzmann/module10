import Employee from './Employee.js'

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        console.log(this.officeNumber);
        return this.officeNumber;
    }

    getRole() {
        console.log('manager')
    }

}

export default Manager