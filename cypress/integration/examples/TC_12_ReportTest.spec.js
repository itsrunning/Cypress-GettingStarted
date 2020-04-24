describe('Report Test', function() {
    
    it('TC1 - Pass', function() {
        console.log("This is a pass TC")
    })

    it('TC2 - Fail', function() {
        console.log("This is a Failed TC")
        assert.fail()
    })

    it.skip('TC3 - Skip', function() {
        console.log("This is a Skipped TC")
    })

    it('TC4 - NonImplemented');

})