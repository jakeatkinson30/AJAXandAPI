$(document).ready(function () {
  // Set up an event handler for the button click.
  $("#neighbourhoodButton").click(function () {
    // Extract user input and assign to usable variable.
    const latitude = $("#latitudeNeighbourhood").val();
    const longitude = $("#longitudeNeighbourhood").val();

    // Make AJAX call to neighbourhood.php.
    $.ajax({
      url: "neighbourhood/php/neighbourhood.php",
      type: "GET",
      dataType: "json",
      data: {
        lat: latitude,
        lng: longitude,
      },
      success: function (result) {
        // Handle the response data.
        if (result.data == null) {
          $("#resultBox").html("There is no neighbourhood at the given latitude/longitude.");
        } else if (result.status.name === "ok") {
          $("#resultBox").html(result.data.name);
        };
      },
      error: function (err) {
        console.log("Error: " + err);
      },
    });
  });
});
