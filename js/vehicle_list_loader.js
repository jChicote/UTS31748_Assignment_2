
function loadJSONData() {
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var jsonData = JSON.parse(ajax.responseText);
            loadVehicleGridItems(jsonData);
        }
    };

    ajax.open("GET", "json/cars.json", true);
    ajax.send();
}

function loadVehicleGridItems(responseData) {
    for(var i = 0; i < responseData.vehicles.length; i++) {
        console.log(i);
    }
}
