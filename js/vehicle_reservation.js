
var VehicleReservation = (function() {

    // Fields
    var reservationObj = [];

    // privates
    function createHeaderCell() {
        var cellObject = document.createElement("LI");
        var cellName = document.createElement("H2");

        cellName.innerHTML = "Name";

        cellObject.appendChild(cellName);
        return cellObject;
    }

    function getReservationListElement() {
        return document.getElementById("reservationList");
    }

    function emptyAlert() {
        alert("No vehicles has been registered in cart");
    }

    // public
    return {

        loadRequestedVehicles: function(cars) {
            if (cars.length == 0) {
                emptyAlert();
                return;
            }
            console.log(VehicleCart.getCart()[0]);

            for (var i = 0; i < cars.length; i++) {
                var vehicle = new ReservedCar(JSONData.getVehicleData(cars[i]));
                reservationObj.push(vehicle);
            }
        },

        displayToReservationList: function() {
            var reservationList = document.getElementById("reservationList");
            reservationList.appendChild(createHeaderCell());

            for (var i = 0; i < reservationObj.length; i++) {
                var createdCell = reservationObj[i].createHTMLCell();
                reservationList.appendChild(createdCell);
            }
        }
    }
})();

// Reservation Object Prefab
class ReservedCar {
    // Fields
    vehicleData;

    constructor(vehicleData) {
        this.vehicleData = vehicleData;
    }

    // Methods
    createHTMLCell() {
        var cellObject = document.createElement("LI");
        var cellName = document.createElement("P");
        console.log(this.vehicleData.name);

        cellName.innerHTML = this.vehicleData.name;

        cellObject.appendChild(cellName);
        return cellObject;
    }
}
