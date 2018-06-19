$(document).ready(function() {
var random=Math.floor(Math.random() * 80 +1);

$("#gameScreen").text(random);


//Gem nums
  var ruby= Math.floor(Math.random()*11+1)
  var sapphire= Math.floor(Math.random()*11+1)
  var diamond= Math.floor(Math.random()*11+1)
  var emerald= Math.floor(Math.random()*11+1)
  var random=Math.floor(Math.random() * 80 +1);

  var gemScore= 0; 
  var Wins= 0;
  var Losses = 0;

  //WinsLosses
  $("#wins").text("Wins : " + Wins);
  $("#losses").text("Losses :" + Losses);

  //To reset
  function reset(){
    random=Math.floor(Math.random()*80 + 1);
    console.log(random)
    $("#gameScreen").text(random);
    ruby= Math.floor(Math.random()*11+1);
    sapphire= Math.floor(Math.random()*11+1);
    diamond= Math.floor(Math.random()*11+1);
    emerald= Math.floor(Math.random()*11+1);
    gemScore= 0;
    $("crystalValue").text(gemScore);
    } 
  //Function after win
  function winner(){
    alert("W!");
      Wins++; 
      $("#wins").text("Wins : " + Wins);
      reset();
  }
  //Function after lost
  function loser(){
    alert ("L!");
      Losses++;
      $("#losses").text("Losses : " + Losses);
      reset()
  }
  //buttonValues
  $("#ruby").on ('click', function(){
    gemScore = gemScore + ruby;
    console.log(gemScore)
    $("#crystalValue").text(gemScore);
    if (gemScore == random){
      winner();
    }
    else if ( gemScore > random){
      loser();
    }
  });
  $("#sapphire").on ('click', function(){
    gemScore = gemScore + sapphire;
    console.log(gemScore)
    $("#crystalValue").text(gemScore);
    if (gemScore == random){
      winner();
    }
    else if ( gemScore > random){
      loser();
    }
  });
  $("#diamond").on ('click', function(){
    gemScore = gemScore + diamond;
    console.log(gemScore)
    $("#crystalValue").text(gemScore);
    if (gemScore == random){
      winner();
    }
    else if ( gemScore > random){
      loser();
    }
  });
  $("#emerald").on ('click', function(){
    gemScore = gemScore + emerald;
    console.log(gemScore)
    $("#crystalValue").text(gemScore);
    if (gemScore == random){
      winner();
    }
    else if ( gemScore > random){
      loser();
    }
  });
})