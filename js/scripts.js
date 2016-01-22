var game = function(number) {
  var array = []
  for (var i = 1; i <= number; i++ ) {
    if ( i % 3 === 0) {
        array.push("ping")
    } else {
      array.push(i);

    }
  }
    return array;
};
