import BasePage from "./PageObjects/BasePage"
import TextFieldPage from "./PageObjects/TextFieldPage";


describe('Final work', () => {
  beforeEach(() => {
    BasePage.visit()
  })

  it('Input all the necessary information', () => {
    //cy.get("#firstName").type("Juris");
    // cy.get("#lastName").type("Kalnins");
    // cy.get("#userEmail").type("jk7@email.com");
    // cy.get("#genterWrapper").contains("Male").click();

    // Set the Date of Birth with Calendar widget to 28th of February, 1930
    //cy.get("#dateOfBirthInput").click();
    // cy.get(".react-datepicker__year-select").select("1930");
    // cy.get(".react-datepicker__month-select").select("February");
    //cy.get(".react-datepicker__day.react-datepicker__day--028:not(.react-datepicker__day--outside-month)").click();

    // Set Subjects to Economics
    // cy.get("#userNumber").type("1234567890");
    //add phone
    // cy.get("#subjectsInput").type("Economics{enter}");
    // Set Hobbies to Music
    // cy.get("#hobbiesWrapper").contains("Music").click();
    // Upload an image of your choice

    // cy.get("#uploadPicture").selectFile("C:/Users/ciguz/Desktop/FinalTask/IMG/cat.jpg");
    // Currnet address
    //cy.get("#currentAddress").type("Space");

    // Set State to NCR
    // cy.get("#state").click();
    // cy.get(".css-26l3qy-menu").should("be.visible");
    // cy.get(".css-26l3qy-menu").contains("NCR").click();

    // Set City to Delhi
    // cy.get("#city").click();
    // cy.get(".css-26l3qy-menu").should("be.visible");
    // cy.get(".css-26l3qy-menu").contains("Delhi").click();

    // Submit the form
    // cy.get("#submit").click();
    TextFieldPage.firstName.type("Juris");
    TextFieldPage.lastName.type("Kalnins");
    TextFieldPage.userEmail.type("jk7@email.com");
    TextFieldPage.gender("Male");
    TextFieldPage.setDateOfBirth("028", "February", "1930");
    TextFieldPage.userNumber.type("1234567890");
    TextFieldPage.setSubjects("Economics");
    TextFieldPage.selectHobby("Music");
    TextFieldPage.uploadImage("C:/Users/ciguz/Desktop/FinalWork/IMG/cat.jpg");
    TextFieldPage.currentAddress.type("Space");
    TextFieldPage.selectState("NCR");
    TextFieldPage.selectCity("Delhi");
    TextFieldPage.submitForm();

    // Validate that each Labeled row contains the correct information
    
    // cy.get(".table-responsive").within(() => {
    // cy.contains("Student Name").next().should("have.text", "Juris Kalnins");
    // cy.contains("Student Email").next().should("have.text", "jk7@email.com");
    // cy.contains("Gender").next().should("have.text", "Male");
    // cy.contains("Mobile").next().should("have.text", "1234567890")
    // cy.contains("Date of Birth").next().should("have.text", "28 February,1930");
    // cy.contains("Subjects").next().should("have.text", "Economics");
    // cy.contains("Hobbies").next().should("have.text", "Music");
    // cy.contains("Picture").next().should("have.text", "cat.jpg");
    // cy.contains("Address").next().should("have.text", "Space"); // 
    // cy.contains("State and City").next().should("have.text", "NCR Delhi");
    //  });
    TextFieldPage.validateStudentName("Juris Kalnins");
    TextFieldPage.validateStudentEmail("jk7@email.com");
    TextFieldPage.validateGender("Male");
    TextFieldPage.validateMobile("1234567890");
    TextFieldPage.validateDateOfBirth("28 February,1930");
    TextFieldPage.validateSubjects("Economics");
    TextFieldPage.validateHobbies("Music");
    TextFieldPage.validatePicture("cat.jpg");
    TextFieldPage.validateAddress("Space");
    TextFieldPage.validateStateAndCity("NCR Delhi");
  });
});


