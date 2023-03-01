$(document).ready(function () {
  // Set up an event handler for the button click.
  $("#postalCodeButton").click(function () {
    // Extract user input and assign to usable variables.
    const postalCode = $("#postalCode").val();
    const country = $("#country").val();

    // Make ajax call to getPostalCode.php.
    $.ajax({
      type: "GET",
      url: "getPostalCode/php/getPostalCode.php",
      data: {
        postalCode: postalCode,
        country: country,
      },
      success: function (data) {
        // Modify html of the result box and insert response data.
        $("#resultBox").html(data.data.placeName + ", " + data.data.adminName1);
      },
      error: function (err) {
        console.log("Error: " + err);
      },
    });
  });
});
