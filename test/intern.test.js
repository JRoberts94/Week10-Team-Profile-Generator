const Intern = require("../src/employees/intern");



describe("intern Test", () => {

    test("getName() will return the name property", () => {
        // arrange -- prepare the env
        const name = 'jake';
        const dummyName = new Intern(1, 'jake@gmail.com', name);

        //act
        const result = dummyName.getName();
    
        //assert
        expect(result).toStrictEqual(name);
    
    
    });

    test("getId() will return an intern ID", () => {
        // arrange -- prepare the env
        const internId = 1;
        const name = 'jake';

        const dummyId = new Intern(internId, 'jake@gmail.com', name);

        //act
        const result = dummyId.getId();
    
        //assert
        expect(result).toStrictEqual(internId);
      
    });
    

    test("getEmail() will return an intern email", () => {
        // arrange -- prepare the env
        const internId = 1;
        const name = 'jake';
        const email = 'jake@gmail.com';

        const dummyId = new Intern(internId, email, name);

        //act
        const result = dummyId.getEmail();
    
        //assert
        expect(result).toStrictEqual(email);
      
    });

    test("getSchool() will return the school attended", () => {
        // arrange -- prepare the env
        const internId = 1;
        const name = 'jake';
        const email = 'jake@gmail.com';
        const school = 'academy of smart people';

        const dummyId = new Intern(internId, email, name, school);

        //act
        const result = dummyId.getSchool();
    
        //assert
        expect(result).toStrictEqual(school);
      
    });
    

    // test("getRole() will return an intern role", () => {

    // });
    



})