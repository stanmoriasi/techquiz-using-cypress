describe("Tech Quiz Basic Flow", () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it("should complete a full quiz cycle", () => {
      cy.contains("Start Quiz").click();
  
      cy.get("h2").should("be.visible");
  
      const answerAllQuestions = () => {
        cy.get("body").then(($body) => {
          if ($body.text().includes("Quiz Completed")) {
            return;
          }
  
          cy.get(".btn.btn-primary").first().click();
          cy.wait(500);
  
          answerAllQuestions();
        });
      };
  
      answerAllQuestions();
  
      cy.contains("Quiz Completed").should("be.visible");
      cy.contains("Your score:").should("be.visible");
  
      cy.contains("Take New Quiz").click();
  
      cy.get("h2").should("be.visible");
    });
  });