
var celebArr = ["Kevin Garnett", "Steph Curry", "Kobe", "Terrel Owens", "Messi", "Ronaldo"];

function reset() {

  $("#buttonPanel").empty();

  for (var i = 0; i < celebArr.length; i++) {
    var button = $("<button>");
    button.addClass("searchButton");
    button.attr("data-search", celebArr[i]);
    button.text(celebArr[i]);

    $("#buttonPanel").append(button);
  }
}

$("#add-search").on("click", function (event) {
  event.preventDefault();

  var searches = $("#search-input").val().trim();

  celebArr.push(searches);
  $("#search-input").val("");

  reset();
});

function searchGifs() {

  var searchTerm = $(this).attr("data-search");
  var searchStr = searchTerm.split(" ").join("+");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchStr +
    "+celebration&rating=pg-13&limit=10&api_key=SfvSaTL9665ruP7tCdjaRkGEcKkWgyE7";

  $.ajax({
    method: "GET",
    url: queryURL,
  })

    .done(function (response) {

      var dataArray = response.data;

      $("#gifPanel").empty();
      for (var i = 0; i < dataArray.length; i++) {
        var newDiv = $("<div>");
        newDiv.addClass("searchGif");

        var newRating = $("<p>").html("Rating: " + dataArray[i].rating);
        newDiv.append(newRating);

        var newImg = $("<img>");
        newImg.attr("src", dataArray[i].images.fixed_height_still.url);
        newImg.attr("data-still", dataArray[i].images.fixed_height_still.url);
        newImg.attr("data-animate", dataArray[i].images.fixed_height.url);
        newImg.attr("data-state", "still");
        newDiv.append(newImg);

        $("#gifPanel").append(newDiv);
      }
    });
}

function animateGif() {

  var state = $(this).find("img").attr("data-state");
  if (state === "still") {
    $(this).find("img").attr("src", $(this).find("img").attr("data-animate"));
    $(this).find("img").attr("data-state", "animate");
  } else {
    $(this).find("img").attr("src", $(this).find("img").attr("data-still"));
    $(this).find("img").attr("data-state", "still");
  }
}

$(document).ready(function () {
  reset();
});

$(document).on("click", ".searchButton", searchGifs);

$(document).on("click", ".searchGif", animateGif);