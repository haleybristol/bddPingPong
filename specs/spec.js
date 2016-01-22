describe ('game', function() {
  it("it counts up to the number entered by the user", function() {
    expect(game(2)).to.eql([1, 2]);
  })
  it('numbers that are divisible by 3 will be replaced with "ping"', function() {
    expect(game(3)).to.eql([1, 2, "ping"]);
  })
  it('numbers that are divisible by 5 will be replaced with "pong"', function(){
    expect(game(5)).to.eql([1, 2, "ping", 4, "pong"]);
  })
  it('numbers that are divisible by 15 will be replaced with "pingpong"', function(){
    expect(game(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13 , 14, "pingpong"]);
  })
})
