
var VehicleReservation = (function() {

    // Fields
    var reservationObj = [];

    // privates
    function createHeaderCell() {
        var cellObject = document.createElement("LI");
        cellObject.classList.add("reservation-list-cell");

        var thumbnailLabel = document.createElement("H2");
        var vehicleLabel = document.createElement("H2");
        var priceLabel = document.createElement("H2");
        var rentLabel = document.createElement("H2");
        var actionLabel = document.createElement("H2");

        thumbnailLabel.innerHTML = "Thumbnail";
        vehicleLabel.innerHTML = "Vehicle";
        priceLabel.innerHTML = "Price";
        rentLabel.innerHTML = "Rental Days";
        actionLabel.innerHTML = "Action";

        cellObject.appendChild(thumbnailLabel);
        cellObject.appendChild(vehicleLabel);
        cellObject.appendChild(priceLabel);
        cellObject.appendChild(rentLabel);
        cellObject.appendChild(actionLabel);
        return cellObject;
    }

    function getReservationListElement() {
        return document.getElementById("reservationList");
    }

    function emptyAlert() {
        alert("No vehicles has been registered in cart");
        window.location.href="/index.html";
    }

    // public
    return {

        loadRequestedVehicles: function(cars) {
            if (cars.length == 0) {
                emptyAlert();
                return;
            }

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
        },

        deleteFromReservation: function(id) {
            var tempList = [];
            for (var i = 0; i < reservationObj) {
                if (reservationObj[i].id != id) {
                    tempList.push(reservationObj[i]);
                }
            }
            reservationObj = tempList;
        },

        updateHTMLList: function() {
            if (reservationObj.length == 0) {
                emptyAlert();
                return;
            }

            displayToReservationList();
        },

        clearHTMLList: function() {
            var list = document.getElementById("reservationList");
            list.innerHTML = "";
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
        cellObject.classList.add("reservation-list-cell");

        var cellImg = document.createElement("img");
        var cellName = document.createElement("p");
        var cellPrice = document.createElement("p");
        var cellInput = document.createElement("input");
        var cellButton = document.createElement("button");

        cellImg.classList.add("reservation-thumbnail");
        cellInput.classList.add("reservation-input-field");
        cellButton.classList.add("reservation-delete-action");


        cellImg.src = "/images/" + this.vehicleData.model + ".jpg";
        cellName.innerHTML = this.vehicleData.name;
        cellPrice.innerHTML = this.vehicleData.pricePerDay;
        cellInput.value = 1;
        cellButton.innerHTML = "Delete";

        cellObject.appendChild(cellImg);
        cellObject.appendChild(cellName);
        cellObject.appendChild(cellPrice);
        cellObject.appendChild(cellInput);
        cellObject.appendChild(cellButton);
        return cellObject;
    }
}
