describe('Home Page', function () {
  beforeEach(function () {
    cy.visit('/');
  });

  it('should display an information to log in in order to see list of users', function () {
    const $usersNotLoggedInfo = cy.get('[data-cy="users-not-logged-info"]');

    $usersNotLoggedInfo.should('be.visible');
  });

  it('should login to application', function () {
    login();
  });

  it('should check if users are displayed', function () {
    login();

    const $usersOnList = cy.get('[data-cy="users-user-on-list"]').then(function () {
      $usersOnList
        .its('length')
        .should('be.gt', 0);
    });
  });

  function login () {
    cy.request(
      'POST',
      'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC4iycZwVL9Bkj5rIGOpfBz2XvGXmkbwuA',
      {
        "email": "gbielak@pgs-soft.com",
        "password": "Cypress88",
        "returnSecureToken": true
      }
    );
  }
});
