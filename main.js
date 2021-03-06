function getAddress() {

  <!-- First lets get the Post Code and House -->
  var postcode  = document.getElementById("postcode").value;
  var house     = document.getElementById("house").value;

  <!-- Clear out the output address fields
  for (var i = 0; i < 7; ++i) {
    var k = "addr" + i;
    var l = '""' + k + '""';
      document.getElementById(k).value = '';
  }

  <!-- Next we want to build the get address string or we may be able to include the values within it! -->
  var addressURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + postcode + "+" + house + "&key=AIzaSyD4l-4g4Xj_qj1BolwxMRovvh8QzdeOpQp";

  //if (house) {
      //var addressURL = "https://api.getAddress.io/find/" + postcode + "/" + house + "?api-key=whmMTD4eQke25M9EQvAbEA9708"
  //} else {
      //var addressURL = "https://api.getAddress.io/find/" + postcode + "?api-key=whmMTD4eQke25M9EQvAbEA9708"
  //};

  <!-- Now lets call the getAddress API -->
  var xhttp = new XMLHttpRequest();

  <!-- Ok tried to find free address finder but all limited time or daily allowance              -->
  <!-- so used the google map API to proivde an approximate address based on address & post code -->
  //xhttp.open("GET", "https://api.getAddress.io/find/sw1a2aa?api-key=whmMTD4eQke25M9EQvAbEA9708", false);
  //xhttp.open("GET", "http://api.postcodes.io/postcodes/%20BR1%204BN", false);
  //xhttp.open("POST", "https://maps.googleapis.com/maps/api/geocode/json?address=BR14BN+59+Farnaby&key=AIzaSyD4l-4g4Xj_qj1BolwxMRovvh8QzdeOpQp", false);
  //xhttp.setRequestHeader("Content-type", "application/json"); //json defined in URL so this line gave me an error
  xhttp.open("POST", addressURL, false);
  xhttp.send();

  var response = JSON.parse(xhttp.responseText);

  <!-- Did we get a valid address and location back? -->
  if (response.status = "OK") {
    // Unpack the address details and assign to address fields
    for (var i = 0; i < response.results[0].address_components.length; i++) {
        for (var j = 0; j < response.results[0].address_components[i].types.length; j++) {
          var k = "addr" + i;
          var l = '""' + k + '""';
          //if (response.results[0].address_components[i].long_name != ""){
          console.log(k);
            document.getElementById(k).value = response.results[0].address_components[i].long_name;
          //} else {
          //}
        }
    }

  } else {
    // @TODO Add error message
    return; // exit getAddress function
  }

  <!-- If Valid location lets call the MAP API with the latitude and Longitude values -->


}
