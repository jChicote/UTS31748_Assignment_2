
// Checkout Object Literal
var checkoutDetails = {
    firstName: "",
    lastName: "",
    email: "",
    addressOne: "",
    addressTwo: "",
    city: "",
    state: "",
    postcode: 0,
    paymentType: ""
};

function handleCheckoutForm(event) {
    event.preventDefault();
}

function submitCheckoutForm() {
    console.log("Successfully Triggered");

    var fname = document.getElementById("firstName");
    var lname = document.getElementById("lastName");
    var email = document.getElementById("emailAddress");
    var fAddress = document.getElementById("firstAddress");
    var sAddress = document.getElementById("secondAddress");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var postcode = document.getElementById("postcode");
    var payment = document.getElementById("payment");

    // Retrive values and assign
    checkoutDetails.firstName = fname.value;
    checkoutDetails.lastName = lname.value;
    checkoutDetails.email = email.value;
    checkoutDetails.addressOne = fAddress.value;
    checkoutDetails.addressTwo = sAddress.value;
    checkoutDetails.city = city.value;
    checkoutDetails.state = state.value;
    checkoutDetails.postcode = postcode.value;
    checkoutDetails.paymentType = payment.value;

    storeCheckoutDataInSessionStorage(checkoutDetails);
    window.location.href="/html/order_result.html";
}

function returnToSelection() {
    window.location.href="/index.html";
}

function emailValidation() {
    
}
