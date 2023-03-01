<?php

    $executionStartTime = microtime(true);

    $url = "http://api.geonames.org/findNearByWeatherJSON?lat=" . $_GET['latitude'] . "&lng=" . $_GET['longitude'] . "&username=jakea07";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept: application/geo+json'));
    $data = curl_exec($ch);
    curl_close($ch);

    $output = array();
    $output['status'] = array();
    $output['status']['code'] = 200;
    $output['status']['name'] = 'ok';
    $output['status']['description'] = 'success';
    $output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . ' ms';
    $output['data'] = json_decode($data, true);

    header('Content-Type: application/json');

    echo json_encode($output);

?>
