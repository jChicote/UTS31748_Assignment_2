
function storeDataInSessionStorage() {
    if (sessionStorage) {
        // Store data
        sessionStorage.setItem("vehicle_cart", JSON.stringify(VehicleCart.getCart()));
        sessionStorage.setItem("vehicle_data", JSONData.stringfyData());
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
