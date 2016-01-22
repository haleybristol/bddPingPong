describe ('game', function() {
  it("it counts up to the number entered by the user", function() {
    expect(game(2)).to.eql([1, 2]);
  })
  it('numbers that are divisible by 3 will be replacced with "ping"', function () {
    expect(game(3)).to.eql([1, 2, "ping"]);
  })
})
