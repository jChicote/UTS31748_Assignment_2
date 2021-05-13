
// JSON Data module
var JSONData = (function() {

    // privates
    var data;

    // public
    return {

        loadJSONData: function(cellLoader) {
            var ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    data = JSON.parse(ajax.responseText);
                    cellLoader.loadVehicleGridItems(data);
                }
            };

            ajax.open("GET", "json/cars.json", true);
            ajax.send();
        },

        stringfyData: function() {
            return JSON.stringify(data);
        },

        emplaceData: function(newData) {
            data = newData;
        },

        // Gets loaded data from function
        getData: function() {
            if (data == null || data == undefined) {
                console.log("There is no data loaded");
                return null;
            }
            return data;
        },

        getVehicleData: function(id) {
            var vehicleObj;
            for (var i = 0; i < data.vehicles.length; i++) {
                if (data.vehicles[i].id == id) {
                    vehicleObj = data.vehicles[i];
                }
            }

            return vehicleObj;
        },

        updateData: function() {
            var ajax = new XMLHttpRequest();
            ajax.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    data = JSON.parse(ajax.responseText);
                }
            };

            ajax.open("GET", "json/cars.json", true);
            ajax.send();
        }
    };
})();

var GridCellLoader = (function() {

    //privates
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

    // public
    return {
        loadVehicleGridItems: function(responseData) {
            if (responseData == null) {
                alert("There is no data retrived from site");
                return;
            }

            for(var i = 0; i < responseData.vehicles.length; i++) {
                assignDataToCell(responseData.vehicles[i]);
            }
        }
    }
})();
