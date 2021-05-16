
function storeDataInSessionStorage() {
    if (sessionStorage) {
        // Store data
        sessionStorage.setItem("vehicle_cart", JSON.stringify(VehicleCart.getCart()));
        sessionStorage.setItem("vehicle_data", JSONData.stringfyData());
    } else {
        alert("Your browser does not support session storage.");
    }
}

function storeCheckoutDataInSessionStorage(details) {
    if (sessionStorage) {
        // Store data
        sessionStorage.setItem("checkouit_details", JSON.stringify(details));
    } else {
        alert("Your browser does not support session storage.");
    }
}

function storeCarReservation(list) {
    if (sessionStorage) {
        // Store data
        sessionStorage.setItem("reservationVehicles", JSON.stringify(list));
    } else {
        alert("Your browser does not support session storage.");
    }
}

function retriveDataInSessionStorage() {
    if (sessionStorage) {
        JSONData.emplaceData(JSON.parse(sessionStorage.getItem("vehicle_data")));
        VehicleCart.emplaceCart(JSON.parse(sessionStorage.getItem("vehicle_cart")));
    } else {
        alert("Your browser does not support session storage.");
    }
}

function retriveReservationInSession() {
    if (sessionStorage) {
        VehicleReservation.emplaceData(JSON.parse(sessionStorage.getItem("reservationVehicles")));
    } else {
        alert("Your browser does not support session storage.");
    }
}

function retriveCheckoutInSession() {
    if (sessionStorage) {
        return JSON.parse(sessionStorage.getItem("checkout_details"));
    } else {
        alert("Your browser does not support session storage.");
    }
}

function clearAllData() {
    sessionStorage.clear();
}
