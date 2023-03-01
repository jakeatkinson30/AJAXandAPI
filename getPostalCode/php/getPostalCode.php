<?php

    $executionStartTime = microtime(true);

    $url = "http://api.geonames.org/postalCodeLookupJSON?postalcode=" . $_GET['postalCode'] . "&country=" . $_GET['country'] . "&username=jakea07";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept: application/geo+json'));
    $data = curl_exec($ch);

    if ($data === false) {
        $output['status']['code'] = "400";
        $output['status']['name'] = "Bad Request";
        $output['status']['description'] = "Failed to fetch data";
    } else {
        $decode = json_decode($data, true);

        if (array_key_exists('postalcodes', $decode) && count($decode['postalcodes']) > 0) {
            $output['status']['code'] = "200";
            $output['status']['name'] = "ok";
            $output['status']['description'] = "success";
            $output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
            $output['data'] = $decode['postalcodes'][0];
        } else {
            $output['status']['code'] = "404";
            $output['status']['name'] = "Not Found";
            $output['status']['description'] = "Postal code not found";
        }
    }   

    header('Content-Type: application/json');
    echo json_encode($output);

    curl_close($ch);

?>