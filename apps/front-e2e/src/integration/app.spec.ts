import { getAddTodoButton, getGreeting, getTodos } from "../support/app.po";

describe("front", () => {
  beforeEach(() => cy.visit("/"));

  it("should display todos", () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login("my-email@something.com", "myPassword");
    getTodos().should((t) => expect(t.length).equal(2));
    getAddTodoButton().click();
    getTodos().should((t) => expect(t.length).equal(3));

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains("Welcome to front!");
  });
});
