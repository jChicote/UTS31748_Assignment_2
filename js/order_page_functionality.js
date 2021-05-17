
function loadReservationDetails() {
    updateCheckoutSummary();
    loadReservedVehiclesToPage();
    loadPaymentInfo();
}

function loadReservedVehiclesToPage() {
    var reservationItems = VehicleReservation.getArray();
    createHTMLHeader();

    for(var i = 0; i < reservationItems.length; i++) {
        createOrderHTMLCell(reservationItems[i]);
    }
}

function updateCheckoutSummary() {
    var nameLabel = document.getElementById("fullname");
    var emailLabel = document.getElementById("email");
    var orderDateLabel = document.getElementById("orderDate");
    var addressLabel = document.getElementById("address");
    var cityStateLabel = document.getElementById("cityState");
    var postcodeLabel = document.getElementById("postcode");

    var date = new Date();

    nameLabel.innerHTML = checkoutDetails.firstName + " " + checkoutDetails.lastName;
    emailLabel.innerHTML = checkoutDetails.email;
    orderDateLabel.innerHTML = date.getDay() + "/" + date.getMonth() + "/" + date.getYear();
    addressLabel.innerHTML = checkoutDetails.addressOne;
    cityStateLabel.innerHTML = checkoutDetails.city + ", " + checkoutDetails.state;
    postcodeLabel.innerHTML = checkoutDetails.postcode;
}

function createHTMLHeader() {
    var cellObject = document.createElement("LI");
    var thumbnailLabel = document.createElement("h3");
    var nameLabel = document.createElement("h3");
    var daysLabel = document.createElement("h3");
    var priceLabel = document.createElement("h3");

    thumbnailLabel.innerHTML = "Thumbnail";
    nameLabel.innerHTML = "Name";
    daysLabel.innerHTML = "Days";
    priceLabel.innerHTML = "Unit Price";

    cellObject.classList.add("order-content-list-cell");
    cellObject.classList.add("order-list-header");

    cellObject.appendChild(thumbnailLabel);
    cellObject.appendChild(nameLabel);
    cellObject.appendChild(daysLabel);
    cellObject.appendChild(priceLabel);

    var orderList = document.getElementById("reservationOrderList");
    orderList.appendChild(cellObject);
}

function createOrderHTMLCell(data) {
    var cellObject = document.createElement("LI");
    var cellImage = document.createElement("img");
    var cellName = document.createElement("p");
    var cellDuration = document.createElement("p");
    var cellPrice = document.createElement("p");

    cellImage.src = "/images/" + data.vehicleData.model + ".jpg";
    cellName.innerHTML = data.vehicleData.name;
    cellDuration.innerHTML = data.reservedDays;
    cellPrice.innerHTML = parseInt(data.vehicleData.pricePerDay);

    cellObject.classList.add("order-content-list-cell");
    cellImage.classList.add("reservation-thumbnail");
    cellName.classList.add("order-list-label");
    cellDuration.classList.add("order-list-label");
    cellPrice.classList.add("order-list-label");

    cellObject.appendChild(cellImage);
    cellObject.appendChild(cellName);
    cellObject.appendChild(cellDuration);
    cellObject.appendChild(cellPrice);

    var orderList = document.getElementById("reservationOrderList");
    orderList.appendChild(cellObject);
}

function loadPaymentInfo() {
    var paymentLabel = document.getElementById("paymentType");
    paymentLabel.innerHTML = checkoutDetails.paymentType;

    var totalCostLabel = document.getElementById("totalCost");
    totalCostLabel.innerHTML = "$" + calculateTotalCost();
}

function calculateTotalCost() {
    var reservationItems = VehicleReservation.getArray();
    var total = 0;

    for (var i = 0; i < reservationItems.length; i++) {
        total += parseInt(reservationItems[i].vehicleData.pricePerDay) * parseInt(reservationItems[i].reservedDays);
    }

    return total;
}

function completeOrder() {
    clearAllData();
    window.location.href="conclusion.html";
}
