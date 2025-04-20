import Quiz from "../../client/src/components/Quiz";
 // Adjust the import based on your setup


 describe("<Quiz />", () => {
    beforeEach(() => {
      cy.wait(500);
      cy.mount(<Quiz />);
    });
  
    it("should display the start quiz button", () => {
      cy.contains("Start Quiz").should("exist");
    });
  
    it("should start the quiz when start button is clicked", () => {
      cy.contains("Start Quiz").click();
  
      cy.get(".card").should("be.visible");
      cy.get("h2").should("exist");
    });
  
    it("should see the multiple choice answers", () => {
      cy.findByRole("button", { name: "Start Quiz" }).click();
      cy.get(".card button").should("exist");
    });
  
    it("should be able to click on the answer button 1-4", () => {
      cy.findByRole("button", { name: "Start Quiz" }).click();
      cy.get(".btn-primary").first().click();
    });
  });