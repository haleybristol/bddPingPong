var game = function(number) {
  var array = []
  for (var i = 1; i <= number; i++ ) {
    if ( i % 15 === 0) {
      array.push("pingpong");
    } else if ( i % 3 === 0) {
      array.push("ping");
    } else if ( i % 5 === 0) {
      array.push("pong");
    } else {
      array.push(i);
    }
  }
    return array;
};

$(document).ready(function(){
  $("form").submit(function(event){
      var number = parseInt($("input#number").val());
      $("#result").empty();
      var resultsArray = game(number);
      resultsArray.forEach(function(i) {
        $("#result").append("<li>" + i + "</li>");
      });
      $(".result").show();
      event.preventDefault();
  });
});
