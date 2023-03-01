$(document).ready(function () {
  // Set up an event handler for the button click.
  $("#weatherStationButton").click(function () {
    // Extract user input and assign to usable variables.
    const latitude = $("#latitudeWeatherStation").val();
    const longitude = $("#longitudeWeatherStation").val();

    // Make ajax call to getWeatherStation.php.
    $.ajax({
      type: "GET",
      url: "getWeatherStation/php/getWeatherStation.php",
      data: {
        latitude: latitude,
        longitude: longitude,
      },
      success: function (data) {
        // Modify html of the result box and insert response data.
        $("#resultBox").html(
          data.data.weatherObservation.stationName +
            ", " +
            data.data.weatherObservation.temperature +
            "&#8457" +
            ", " +
            data.data.weatherObservation.clouds
        );
      },
      error: function (err) {
        console.log("Error: " + err);
      },
    });
  });
});
