import BasePage from "./BasePage";

class TextFieldPage extends BasePage {
    static get url() {
      return "/";
    }
  
    static get firstName() {
      return cy.get("#firstName");
    }
  
    static get lastName() {
      return cy.get("#lastName");
    }
  
    static get userEmail() {
      return cy.get("#userEmail");
    }
  
    static gender(gender) {
      return cy.get("#genterWrapper").contains(gender).click();
    }
  
    static setDateOfBirth(day, month, year) {
      cy.get("#dateOfBirthInput").click();
      cy.get(".react-datepicker__year-select").select(year);
      cy.get(".react-datepicker__month-select").select(month);
      cy.get(`.react-datepicker__day.react-datepicker__day--${day}:not(.react-datepicker__day--outside-month)`).click();
    }
  
    static get userNumber() {
      return cy.get("#userNumber");
    }
  
    static setSubjects(subject) {
      return cy.get("#subjectsInput").type(`${subject}{enter}`);
    }
  
    static selectHobby(hobby) {
      return cy.get("#hobbiesWrapper").contains(hobby).click();
    }
  
    static uploadImage(imagePath) {
      return cy.get("#uploadPicture").selectFile(imagePath);
    }
  
    static get currentAddress() {
      return cy.get("#currentAddress");
    }
  
    static selectState(state) {
      cy.get("#state").click();
      cy.get(".css-26l3qy-menu").should("be.visible");
      cy.get(".css-26l3qy-menu").contains(state).click();
    }
  
    static selectCity(city) {
      cy.get("#city").click();
      cy.get(".css-26l3qy-menu").should("be.visible");
      cy.get(".css-26l3qy-menu").contains(city).click();
    }
  
    static submitForm() {
      return cy.get("#submit").click();
    }
    static validateStudentName(expectedName) {
        cy.get(".table-responsive")
          .contains("Student Name")
          .next()
          .should("have.text", expectedName);
      }
    
      static validateStudentEmail(expectedEmail) {
        cy.get(".table-responsive")
          .contains("Student Email")
          .next()
          .should("have.text", expectedEmail);
      }
    
      static validateGender(expectedGender) {
        cy.get(".table-responsive")
          .contains("Gender")
          .next()
          .should("have.text", expectedGender);
      }
    
      static validateMobile(expectedMobile) {
        cy.get(".table-responsive")
          .contains("Mobile")
          .next()
          .should("have.text", expectedMobile);
      }
    
      static validateDateOfBirth(expectedDateOfBirth) {
        cy.get(".table-responsive")
          .contains("Date of Birth")
          .next()
          .should("have.text", expectedDateOfBirth);
      }
    
      static validateSubjects(expectedSubjects) {
        cy.get(".table-responsive")
          .contains("Subjects")
          .next()
          .should("have.text", expectedSubjects);
      }
    
      static validateHobbies(expectedHobbies) {
        cy.get(".table-responsive")
          .contains("Hobbies")
          .next()
          .should("have.text", expectedHobbies);
      }
    
      static validatePicture(expectedPicture) {
        cy.get(".table-responsive")
          .contains("Picture")
          .next()
          .should("have.text", expectedPicture);
      }
    
      static validateAddress(expectedAddress) {
        cy.get(".table-responsive")
          .contains("Address")
          .next()
          .should("have.text", expectedAddress);
      }
    
      static validateStateAndCity(expectedStateAndCity) {
        cy.get(".table-responsive")
          .contains("State and City")
          .next()
          .should("have.text", expectedStateAndCity);
      }
    }
  
  
  export default TextFieldPage;
