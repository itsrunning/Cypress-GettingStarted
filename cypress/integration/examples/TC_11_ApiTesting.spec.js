describe('API Testing', function() {
    
    it('GET -- read', function() {
        cy.request('GET','http://dummy.restapiexample.com/api/v1/employees').then((response) => {
        expect(response).to.have.property('status',200)
        expect(response.body).to.not.be.null
        expect(response.body).to.have.property('status','success')
        })
    })

    it('POST -- create', function() {
        const item = {"name":"test","salary":"123","age":"23"}
        cy.request('POST','http://dummy.restapiexample.com/api/v1/create',item)
        .its('body').its('data').should('include',{name:'test'})
    })

    it('PUT -- edit', function() {
        // const item = {"name":"Vignesh"}
        // cy.request('PUT','http://dummy.restapiexample.com/api/v1/update/21',item).then((response) => {
        //     expect(response).to.have.property('status',200)
        //     expect(response.body).to.not.be.null
        //     expect(response.body).to.have.property('status','success')
        //     })
        const item = {"name":"Vignesh"}
        cy.request({method:'PUT', url:'http://dummy.restapiexample.com/api/v1/update/21', body:item, failOnStatusCode: false}).its('status').should('eq', 401)
    })

    it('DELETE -- delete', function() {
        cy.request('DELETE','http://dummy.restapiexample.com/api/v1/delete/24')
            .then((response) => {
            expect(response).to.have.property('status',200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.property('status','success')
            expect(response.body).to.have.property('message','successfully! deleted Records')
            })
    })
})