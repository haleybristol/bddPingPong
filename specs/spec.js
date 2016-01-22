describe ('game', function() {
  it("it counts up to the number entered by the user", function() {
    expect(game(2)).to.eql([1, 2]);
  })

})
