
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

        thumbnailLabel.classList.add("reservation-header-labels");
        vehicleLabel.classList.add("reservation-header-labels");
        priceLabel.classList.add("reservation-header-labels");
        rentLabel.classList.add("reservation-header-labels");
        actionLabel.classList.add("reservation-header-labels");

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
        clearAllData();
    }

    function displayToReservationList() {
        var reservationList = document.getElementById("reservationList");
        reservationList.appendChild(createHeaderCell());

        for (var i = 0; i < reservationObj.length; i++) {
            var createdCell = reservationObj[i].createHTMLCell();
            reservationList.appendChild(createdCell);
        }
    }

    function clearHTMLList() {
        var list = document.getElementById("reservationList");
        list.innerHTML = "";
    }

    function updateHTMLList() {
        if (reservationObj.length == 0) {
            emptyAlert();
            return;
        }

        clearHTMLList();
        displayToReservationList();
    }

    function validateRentalDays() {
        for (var i = 0; i < reservationObj.length; i++) {
            var htmlObj = document.getElementById(reservationObj[i].vehicleData.id);
            var htmlInput = htmlObj.children[3];

            if (htmlInput.value == 0) {
                alert(reservationObj[i].vehicleData.name + " has no days reserved.");
                return false;
            }
        }

        return true;
    }

    function updateVehicleDays() {
        for (var i = 0; i < reservationObj.length; i++) {
            reservationObj[i].updateReservedDays();
        }
    }

    function checkIfEmpty() {

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

            displayToReservationList();
        },

        deleteFromReservation: function(id) {
            var tempList = [];
            for (var i = 0; i < reservationObj.length; i++) {
                console.log(id + ", " + reservationObj[i].vehicleData.id)
                if (reservationObj[i].vehicleData.id != id) {
                    tempList.push(reservationObj[i]);
                }
            }

            reservationObj = tempList;
            updateHTMLList();
        },

        checkoutReservation: function() {
            if (!validateRentalDays()) return;

            updateVehicleDays();
            storeCarReservation(reservationObj);
            window.location.href="/html/checkout.html";
        },

        getArray: function() {
            return reservationObj;
        },

        emplaceData: function(newItems) {
            reservationObj = newItems;
        }
    }
})();
