var targetNumber = Math.floor(Math.random() * 50) + 30;

  $("#number-to-guess").text(targetNumber);
  var counter = 0;
  var crystalPics = ["assets/images/GT1Blk.png", "assets/images/GT3Blu.png", "assets/images/GT2Red.png", "assets/images/GT4Gre.png"]
  var reset = function(){
    counter = 0;
    targetNumber = Math.floor(Math.random() * 50) + 30;
    $("#number-to-guess").text(targetNumber);
  }
 
  for (var i = 0; i < crystalPics.length; i++) {
    var numberOptions = Math.floor(Math.random() * 10) + 2;
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", crystalPics[i]);
    imageCrystal.attr("data-crystalvalue", numberOptions);
    $("#crystals").append(imageCrystal);
  }

  $(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
      var celeb = $("<img>");
      var celebPics = ["https://media.giphy.com/media/5Yl08OSg4AckeNHpDc/giphy.gif"];
      celeb.attr("src", celebPics);
      $("#celebrate").append(celeb);
      reset();
    }
    else if (counter >= targetNumber) {
      alert("You lose!!");
      reset();
    }

  });