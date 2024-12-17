<?php
header("Access-Control-Allow-Origin: *"); // Allow requests from all origins
header("Content-Type: application/xml"); // Ensure the response is XML

$playlist_id = "PLiGrFSAT1J7JNoA2amXl3BIyCsZnVwY1I"; // Replace with your playlist ID
$url = "https://www.youtube.com/feeds/videos.xml?playlist_id=" . $playlist_id;

// Fetch data from YouTube
$response = file_get_contents($url);

if ($response === FALSE) {
    http_response_code(500);
    echo "Error fetching YouTube data";
    exit;
}

// Output the YouTube data
echo $response;
?>
