var game = function(number) {
  var array = []
  for (var i = 1; i <= number; i++ ) {
    if ( i % 3 === 0) {
      array.push("ping");
    } else if ( i % 5 === 0) {
      array.push("pong");
    } else {
      array.push(i);

    }
  }
    return array;
};
