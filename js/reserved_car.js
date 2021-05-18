
// Reservation Object Prefab
class ReservedCar {
    // Fields
    vehicleData;
    reservedDays;

    constructor(vehicleData) {
        this.vehicleData = vehicleData;
        this.reservedDays = 1;
    }

    // Event Handler
    handleEvent(event) {
        if('click' == event) {
            linkButtonEvent();
        }
    }

    updateReservedDays() {
        var htmlObject = document.getElementById(this.vehicleData.id);
        var inputValue = htmlObject.children[3].value;
        this.reservedDays = inputValue;
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

        cellObject.setAttribute('id', this.vehicleData.id);
        cellImg.classList.add("reservation-thumbnail");
        cellInput.classList.add("reservation-input-field");
        cellButton.classList.add("reservation-delete-action");

        cellImg.src = "/images/" + this.vehicleData.model + ".jpg";
        cellName.innerHTML = this.vehicleData.name;
        cellPrice.innerHTML = this.vehicleData.pricePerDay;
        cellInput.value = 1;
        cellButton.innerHTML = "Delete";

        cellButton.addEventListener('click', event => {
            var vehicleID = this.vehicleData.id;
            VehicleReservation.deleteFromReservation(vehicleID);
        });

        cellObject.appendChild(cellImg);
        cellObject.appendChild(cellName);
        cellObject.appendChild(cellPrice);
        cellObject.appendChild(cellInput);
        cellObject.appendChild(cellButton);
        return cellObject;
    }
}
