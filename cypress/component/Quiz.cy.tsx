import Quiz from "../../client/src/components/Quiz";
 // Adjust the import based on your setup


describe('<Quiz />', () => {
    beforeEach(() => {
        cy.intercept('GET', '/api/questions', { fixture: 'questions.json' }).as('getQuestions');
    });
    
    it('displays the quiz title', () => {
        cy.mount(<Quiz />);
        cy.contains('Start Quiz').click();
    });
    it('displays quiz is over', () => {
        cy.mount(<Quiz />);
        cy.contains('Quiz Completed');
        cy.contains('div', 'Quiz Completed').click();

    });
 
})