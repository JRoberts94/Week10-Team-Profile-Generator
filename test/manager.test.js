const Manager = require("../src/employees/manager");


describe("manager Test", () => {

    test("getName() will return the name property", () => {
        // arrange -- prepare the env
        const name = 'jake';
        const dummyName = new Manager(1, 'jake@gmail.com', name);

        //act
        const result = dummyName.getName();
    
        //assert
        expect(result).toStrictEqual(name);
    
    
    });

    test("getId() will return an manager ID", () => {
        // arrange -- prepare the env
        const managerId = 1;
        const name = 'jake';

        const dummyId = new Manager(managerId, 'jake@gmail.com', name);

        //act
        const result = dummyId.getId();
    
        //assert
        expect(result).toStrictEqual(managerId);
      
    });
    

    test("getEmail() will return an manager email", () => {
        // arrange -- prepare the env
        const managerId = 1;
        const name = 'jake';
        const email = 'jake@gmail.com';

        const dummyId = new Manager(managerId, email, name);

        //act
        const result = dummyId.getEmail();
    
        //assert
        expect(result).toStrictEqual(email);
      
    });
    
    test("getOfficeNumber() will return the Managers Office Number", () => {
        // arrange -- prepare the env
        const managerId = 1;
        const name = 'jake';
        const email = 'jake@gmail.com';
        const officeNumber = "92016969";

        const dummyId = new Manager(managerId, email, name, officeNumber);

        //act
        const result = dummyId.getOfficeNumber();
    
        //assert
        expect(result).toStrictEqual(officeNumber);
      
    });

    // test("getRole() will return an manager role", () => {

    // });
    



})