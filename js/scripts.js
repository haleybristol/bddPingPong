var game = function(number) {
  var array = []
  for (var i = 1; i <= number; i++ ) {
    if ( i % 15 === 0) {
        array.push ("pingpong")
    } else {
      array.push(i);

    }
  }
    return array;
};
