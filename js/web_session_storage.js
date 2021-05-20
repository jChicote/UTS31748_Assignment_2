
function storeInSession(stringIdentifier, dataItem) {
    if (sessionStorage) {
        sessionStorage.setItem(stringIdentifier, JSON.stringify(dataItem));
    } else {
        alert("Your browser does not support session storage.");
    }
}

function retrieveFromSession(stringIdentifier) {
    if (sessionStorage) {
        return JSON.parse(sessionStorage.getItem(stringIdentifier));
    } else {
        alert("Your browser does not support session storage.");
    }
}

function storeDataInSessionStorage() {
    storeInSession("vehicle_cart", VehicleCart.getCart());
    storeInSession("vehicle_data", JSONData.getData());
}

function storeJSONData() {
    storeInSession("vehicle_data", JSONData.getData());
}

function storeVehicleCart() {
    storeInSession("vehicle_cart", VehicleCart.getCart());
}

function storeCheckoutDataInSessionStorage(details) {
    storeInSession("checkout_details", details);
}

function storeCarReservation(list) {
    storeInSession("reservationVehicles", list);
}

function retriveDataInSessionStorage() {
    JSONData.emplaceData(retrieveFromSession("vehicle_data"));
    VehicleCart.emplaceCart(retrieveFromSession("vehicle_cart"));
}

function retriveReservationInSession() {
    VehicleReservation.emplaceData(retrieveFromSession("reservationVehicles"));
}

function retriveCheckoutInSession() {
    return retrieveFromSession("checkout_details");
}

function clearAllData() {
    //sessionStorage.clear();
    VehicleReservation.clearReservation();
    VehicleCart.clearCart();

    storeCheckoutDataInSessionStorage([]);
    storeCarReservation(VehicleReservation.getArray());
    storeVehicleCart();
}
