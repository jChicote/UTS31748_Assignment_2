
function loadReservedVehiclesToPage() {
    var reservationItems = VehicleReservation.getArray();

    for(var i = 0; i < reservationItems.length; i++) {
        createOrderHTMLCell(reservationItems[i]);
    }
}

function createOrderHTMLCell(data) {
    var cellObject = document.createElement("LI");
    var cellName = document.createElement("p");
    var cellDuration = document.createElement("p");
    var cellPrice = document.createElement("p");

    cellName.innerHTML = data.vehicleData.name;
    cellDuration.innerHTML = data.reservedDays * parseInt(data.vehicleData.pricePerDay);
    cellPrice.innerHTML = data.pricePerDay;

    cellObject.appendChild(cellName);
    cellObject.appendChild(cellDuration);
    cellObject.appendChild(cellPrice);

    var orderList = document.getElementById("reservationOrderList");
    orderList.appendChild(cellObject);
}

function calculateTotalCost() {

}
