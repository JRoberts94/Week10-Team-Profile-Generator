const Employee = require("./employee");

class Manager extends Employee{
    constructor(id, email, name, office_number){
        super(id, email, name);
        this.office_number = office_number;
    }
    getOfficeNumber(){
        return this.office_number;
    }
    getRole(){
        return 'Manager';
    }

};

module.exports = Manager;