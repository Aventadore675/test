// Functionality for service toggle
function toggleService() {
    // code for toggling service
}

// Request ride button functionality
function requestRide() {
    // code for requesting a ride
}

// Map initialization functionality
function initMap() {
    // code to initialize map
}

// Delivery functionality
function handleDelivery() {
    // code for handling delivery
}
<!DOCTYPE html>
<html>
<head>
<title>Destination Search</title>

<style>

body{
    font-family: Arial;
    background:#f4f4f4;
    text-align:center;
    margin-top:100px;
}

.container{
    background:white;
    padding:30px;
    width:300px;
    margin:auto;
    border-radius:10px;
    box-shadow:0 0 10px rgba(0,0,0,0.2);
}

input{
    width:80%;
    padding:10px;
    margin:10px 0;
    border-radius:5px;
    border:1px solid #ccc;
}

button{
    padding:10px 20px;
    border:none;
    background:#4285F4;
    color:white;
    border-radius:5px;
    cursor:pointer;
}

button:hover{
    background:#2f6ad9;
}

</style>

</head>

<body>

<div class="container">

<h2>Search Destination</h2>

<form action="https://www.google.com/maps/search/" method="get">

<input type="text" name="query" placeholder="Enter destination" required>

<br>

<button type="submit">Search</button>

</form>

</div>

</body>
</html>
