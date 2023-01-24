
describe("app", () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it("weekday container should contains 7 items", () => {
    cy.get('[data-testid=daily-weather-item]').should('have.length', 7)
  })

  it("should shows today hourly weather by default", () => {
    cy.get('[data-testid=hourly-weather-title]').contains('Today')
  })

  it("should shows next day weather on click", () => {
    cy.get("[data-testid=daily-weather-item]").eq(1).as("firstItem")
    cy.get("@firstItem").click()
 
    const tomorrow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
    cy.get('[data-testid=hourly-weather-title]').contains(tomorrow.toLocaleDateString('en-GB', { weekday: "long" } ))
  })
})