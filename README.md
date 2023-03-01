## API Table Application

This is a simple web application that utilizes three different APIs to display data based on the user's latitude and longitude input and/or postal code/country. The APIs used in this application are the Neighbourhood API, Weather Station, and the Placename Lookup API.

### How it Works

The user is prompted to enter a latitude and longitude for each API. When the user submits their input, jQuery is used to capture the input and append it to the API's URL. The latitude and longitude are passed to a PHP script that uses cURL to send a request to the API and retrieve the data. AJAX is then used to display the data on the page.

### API's Used

All API's are from the GeoNames.org database, which is a geographical database which covers all countries and contains over eleven million placenames that are available for download free of charge.

1. Neighbourhood API
      - The neighbourhood API returns the neighbourhood for the given latitude/longitude.

2. Weather Station with most recent weather observation
      - The Weather Station API takes in the latitude/longitude and returns the station closest to the given point. The result will return the weather station and the most recent weather observation.

3. Placename lookup with postalcode
      - This API takes in the user's postal code and country and returns a list of places for the given postalcode.

Technologies Used
This application was built using the following technologies:

- HTML
- CSS
- Javascript
- jQuery
- PHP
- cURL
- AJAX
