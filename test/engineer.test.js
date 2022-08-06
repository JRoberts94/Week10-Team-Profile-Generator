// const Employee = require("../src/employees/employee");
const Engineer = require("../src/employees/engineer");


describe("Engineer Test", () => {

    test("getName() will return the name property", () => {
        // arrange -- prepare the env
        const name = 'jake';
        const dummyName = new Engineer(1, 'jake@gmail.com', name);

        //act
        const result = dummyName.getName();
    
        //assert
        expect(result).toStrictEqual(name);
    
    
    });

    
    test("getId() will return an Engineer ID", () => {
        // arrange -- prepare the env
        const engineerId = 1;
        const name = 'jake';

        const dummyId = new Engineer(engineerId, 'jake@gmail.com', name);

        //act
        const result = dummyId.getId();
    
        //assert
        expect(result).toStrictEqual(engineerId);
      
    });
    

    test("getEmail() will return an Engineer email", () => {
        // arrange -- prepare the env
        const engineerId = 1;
        const name = 'jake';
        const email = 'jake@gmail.com';

        const dummyId = new Engineer(engineerId, email, name);

        //act
        const result = dummyId.getEmail();
    
        //assert
        expect(result).toStrictEqual(email);
      
    });

    test("getGithub() will return the Engineers github profile name", () => {
        // arrange -- prepare the env
        const engineerId = 1;
        const name = 'jake';
        const email = 'jake@gmail.com';
        const github = 'JRoberts94';

        const dummyId = new Engineer(engineerId, email, name, github);

        //act
        const result = dummyId.getGithub();
    
        //assert
        expect(result).toStrictEqual(github);
      
    });
    

    // test("getRole() will return an Engineer role", () => {

    // });
    



})