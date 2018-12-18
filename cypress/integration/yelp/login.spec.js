/// <reference types="Cypress" />

context("Aliasing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  const username = "test@test.com";
  const password = "123456";
  const camp = {
    name: "Testing Camp Ground Creation",
    price: 1,
    image:
      "http://kb.inmusicbrands.com/media/images/macOS-10_14-Mojave-Night-hero-hero.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  };

  it("should be able to login", () => {
    cy.get("a[name='login']").click();
    cy.get("input[name='username']").type(username);
    cy.get("input[name='password']").type(password);
    cy.get("button[type='submit']").click();
    cy.get(".profile").should("have.text", "test");

    cy.contains("Add New Campground").click();
    cy.get("input[name='name']").type(camp.name);
    cy.get("input[name='price']").type(camp.price);
    cy.get("input[name='image']").type(camp.image);
    cy.get("input[name='description']").type(camp.description);
    cy.get("button[type='submit']").click();
    cy.get("h6")
      .contains("Testing")
      .click();
    cy.get("button")
      .contains("Delete")
      .click();
  });
});
