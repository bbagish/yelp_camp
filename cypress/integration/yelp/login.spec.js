/// <reference types="Cypress" />
const faker = require("faker");
context("Aliasing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  const user = {
    email: "test@test.com",
    password: "123456",
    name: "test"
  };
  const camp = {
    name: "Testing Camp Ground Creation",
    price: 1,
    image:
      "http://kb.inmusicbrands.com/media/images/macOS-10_14-Mojave-Night-hero-hero.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  };

  it("As a user I should be able to create camp", () => {
    cy.get("a[name='login']").click();
    cy.get("input[name='username']").type(user.email);
    cy.get("input[name='password']").type(user.password);
    cy.get("button[type='submit']").click();
    cy.get(".profile").should("have.text", user.name);
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
    cy.get(".logout").click();
    cy.get("a[name='login']").should("have.text", "Login");
  });
  it("As a user I should be able to register", () => {
    const name = faker.name.findName();
    cy.get("a[name='register']").click();
    cy.get("input[name='name']").type(name);
    cy.get("input[name='username']").type(faker.internet.email());
    cy.get("input[name='password']").type(user.password);
    cy.get("button")
      .contains("Sign Up")
      .click();
    cy.get(".profile").should("have.text", name);
  });
});
