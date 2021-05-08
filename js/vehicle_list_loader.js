
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
        assignDataToCell(responseData.vehicles[i]);
    }
}

function assignDataToCell(JSONObject) {
    var gridCell = document.getElementById(JSONObject.model);
    if (gridCell == null || gridCell == undefined) return;

    var title = gridCell.querySelector("#" + "vehicleTitle");
    var milieage = gridCell.querySelector("#" + "vehicleMileage");
    var fuel = gridCell.querySelector("#" + "vehicleFuel");
    var seats = gridCell.querySelector("#" + "vehicleSeats");
    var availability = gridCell.querySelector("#" + "vehicleAvailability");

    title.innerHTML = JSONObject.name;
    milieage.innerHTML = JSONObject.mileage;
    fuel.innerHTML = JSONObject.fuelType;
    seats.innerHTML = JSONObject.seats;
    availability.innerHTML = availabilityOfVehicle(JSONObject.availability);
}

function availabilityOfVehicle(availability) {
    if (availability == true) {
        return "Yes";
    }
    return "No";
}
