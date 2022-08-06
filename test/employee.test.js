const Employee = require("../src/employees/employee")

describe("Employee Test", () => {

    test("getName() will return the name property", () => {
        // arrange -- prepare the env
        const name = 'jake';
        const dummyName = new Employee(1, 'jake@gmail.com', name);

        //act
        const result = dummyName.getName();
    
        //assert
        expect(result).toStrictEqual(name);
    
    
    });

    test("getId() will return an employee ID", () => {
        // arrange -- prepare the env
        const employeeId = 1;
        const name = 'jake';

        const dummyId = new Employee(employeeId, 'jake@gmail.com', name);

        //act
        const result = dummyId.getId();
    
        //assert
        expect(result).toStrictEqual(employeeId);
      
    });
    

    test("getEmail() will return an employee email", () => {
        // arrange -- prepare the env
        const employeeId = 1;
        const name = 'jake';
        const email = 'jake@gmail.com';

        const dummyId = new Employee(employeeId, email, name);

        //act
        const result = dummyId.getEmail();
    
        //assert
        expect(result).toStrictEqual(email);
      
    });
    

    // test("getRole() will return an employee role", () => {

    // });
    



})



