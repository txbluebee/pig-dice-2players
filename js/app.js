//Busness logic

function Player(name, turnscore, score){
  this.name = name;
  this.turnscore = turnscore;
  this.score = score;
}

var currentDice = 1;

Player.prototype.roll = function(){
  currentDice = Math.floor(Math.random()*6+1);

  if (currentDice === 1) {
    $(".dice").hide();
    $(".dice-1").show();
  } else if (currentDice === 2) {
    $(".dice").hide();
    $(".dice-2").show();
  } else if (currentDice === 3) {
    $(".dice").hide();
    $(".dice-3").show();
  } else if (currentDice === 4) {
    $(".dice").hide();
    $(".dice-4").show();
  } else if (currentDice === 5) {
    $(".dice").hide();
    $(".dice-5").show();
  } else if (currentDice === 6) {
    $(".dice").hide();
    $(".dice-6").show();
  }

  if (currentDice !== 1) {
    this.turnscore = this.turnscore + currentDice;
  } else {
    alert("You rolled 1. Next player!");
    this.turnscore = 0;
  }
}

Player.prototype.hold = function(){
  this.score = this.score + this.turnscore;
  if (this.score > 100) {
    alert("You win!");
    location.reload();
  }
  this.turnscore = 0;
}




//UI logic

$(document).ready(function(){
  $("form#players").submit(function(event){
    event.preventDefault();
    $(".player-info").hide();
    $(".playground").show();
    var p1Input = $("#player-1").val();
    var p2Input = $("#player-2").val();

    var player1 = new Player(p1Input, 0, 0);
    var player2 = new Player(p2Input, 0, 0);

    $(".player-1").text(player1.name);
    $(".player-2").text(player2.name);

    $(".dice-default").show();
    $(".p1-turnscore").text(player1.turnscore);
    $(".p2-turnscore").text(player2.turnscore);
    $(".p1-score").text(player1.score);
    $(".p2-score").text(player2.score);

    //player 1
    $(".p1-roll").click(function(){
      player1.roll();
      $(".p1-turnscore").text(player1.turnscore);

    });

    $(".p1-hold").click(function(){
      player1.hold();
      $(".p1-turnscore").text(player1.turnscore);
      $(".p1-score").text(player1.score);
    });



    //player 2
    $(".p2-roll").click(function(){
      player2.roll();
      $(".p2-turnscore").text(player2.turnscore);

    });

    $(".p2-hold").click(function(){
      player2.hold();
      $(".p2-turnscore").text(player2.turnscore);
      $(".p2-score").text(player2.score);
    });


  });
});
