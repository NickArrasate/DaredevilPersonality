$(document).ready(function() {

  console.log("here");

  $("form#radios").submit(function(event) {


  var costume = $("input:radio[name=costumeRadio]:checked").val();
  var justice = $("input:radio[name=justiceRadio]:checked").val();

if (justice === "up" && costume === "costume") {
  $(".showme").removeClass("showme");
  $(".DD").addClass("showme");
} else if (justice === "up" && costume === "casual") {
  $(".showme").removeClass("showme");
  $(".foggy").addClass("showme");
} else if (justice === "down" && costume === "costume") {
  $(".showme").removeClass("showme");
  $(".elektra").addClass("showme");
} else {
  $(".showme").removeClass("showme");
  $(".punisher").addClass("showme");
}

  event.preventDefault();
  });

});
