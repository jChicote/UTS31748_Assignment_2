
function reserveVehicleForRegistration(vehicleID) {
    var vehicleObj = JSONData.getVehicleData(vehicleID);

    if (VehicleCart.checkInCart(vehicleObj.id)) {
        alert("Already in cart");
        return;
    }

    if (vehicleObj.availability) {
        VehicleCart.addToCart(vehicleID);
        alert("Added to the cart successfully.");
    } else {
        alert("Sorry, the car is not available now. Please try other cars.");
    }
}

function openReservationPage() {
    if (VehicleCart.getCart() == null || VehicleCart.getCart().length == 0) {
        alert("There is no data in cart");
        return;
    }

    storeDataInSessionStorage();
    window.location.href="html/reservation.html";
}
