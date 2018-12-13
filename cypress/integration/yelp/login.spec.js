/// <reference types="Cypress" />

context("Aliasing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should be able to login", () => {
    cy.get("a[name='login']").click();
    cy.get("input[name='username']").type("test@test.com");
    cy.get("input[name='password']").type("123456");
    cy.get("button[type='submit']").click();
    //assert if logged in
    cy.contains("Add New Campground").click();
    cy.get("input[name='name']").type("Testing Camp Ground Creation");
    cy.get("input[name='price']").type(1);
    cy.get("input[name='image']").type(
      "http://kb.inmusicbrands.com/media/images/macOS-10_14-Mojave-Night-hero-hero.jpg"
    );
    cy.get("input[name='description']").type(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    );
    cy.get("button[type='submit']").click();
    // assert if created
  });
});
