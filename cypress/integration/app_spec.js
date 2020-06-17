describe('MY APP > ', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    Cypress.Commands.add('uploadFile', { prevSubject: true }, (subject, fileName, fileType = '') => {
        cy.fixture(fileName,'binary').then(content => {
          return Cypress.Blob.binaryStringToBlob(content, fileType).then(blob => {
            const el = subject[0];
            const testFile = new File([blob], fileName, {type: fileType});
            const dataTransfer = new DataTransfer();
      
            dataTransfer.items.add(testFile);
            el.files = dataTransfer.files;
            cy.wrap(subject).trigger('change', { force: true });
          });
        });
      });

    

    it('Ok, add a post', () => {
        cy.get('input[data-cy="new-name"]').type('Shubhra Mishra'); 
        cy.get('input[data-cy="new-caption"]').type('Bright sunny day');
        cy.get('input[type=file]').uploadFile('4.png', 'image/jpeg');
        cy.get('button[cy-data="submit"]').click();
        
    });


}
)