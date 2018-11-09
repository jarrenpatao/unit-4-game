// Game Goal
var targetNumber = 100;
  $("#number-to-guess").text(targetNumber);
  var counter = 0;
  var numberOptions = [[Math.floor(Math.random() * 15) + 2]];
  for (var i = 0; i < numberOptions.length; i++) {
    $("imageCrystal");{
    var imageCrystal1 = $("<img>");
    var imageCrystal2 = $("<img>");
    var imageCrystal3 = $("<img>");
    var imageCrystal4 = $("<img>");
    }

    imageCrystal.addClass("crystal-image");
    imageCrystal1.attr("src", "assets/images/GT1Blk.png");
    imageCrystal2.attr("src", "assets/images/GT3Blu.png");
    imageCrystal3.attr("src", "assets/images/GT2Red.png");
    imageCrystal4.attr("src", "assets/images/GT4Gre.png");
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    $("#crystals").append(imageCrystal);
  }

  $(".crystal-image").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });