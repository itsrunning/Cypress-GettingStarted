describe('Web Tables', function() {
    
    it('Handling a table', function() {
        cy.visit("http://testautomationpractice.blogspot.com/")

        // 1) Check value present anywhere in the table
        cy.get("table[name='BookTable']").contains('td','Learn Selenium').should('be.visible')

        // 2) Check value present in specific row and col
        cy.get("table[name='BookTable']>tbody>tr:nth-child(2)>td:nth-child(3)").contains('td','Selenium').should('be.visible')

        // // 3) Check value based on the condition
        cy.get('table[name="BookTable"]>tbody>tr>td:nth-child(2)').each(($e,index,$list) => {
            const text=$e.text()
            if(text.includes("Amod"))
            {
                cy.get('table[name="BookTable"]>tbody>tr>td:nth-child(1)').eq(index).then(function(bname)
                {
                    const bookName=bname.text();
                    expect(bookName).to.equal("Master In Java")

                })
            }
    })
})
})
