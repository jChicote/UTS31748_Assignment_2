
function reserveVehicleForRegistration(vehicleID) {
    var vehicleObj = JSONData.getVehicleData(vehicleID);

    if (VehicleCart.checkInCart(vehicleObj.id)) return;

    if (vehicleObj.availability) {
        VehicleCart.addToCart(vehicleID);
        alert("Added to the cart successfully.");
    } else {
        alert("Sorry, the car is not available now. Please try other cars.");
    }
}
