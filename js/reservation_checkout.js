
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

// prevents default form behaviour from executing page refresh
function handleCheckoutForm(event) {
    event.preventDefault();
}

function submitCheckoutForm() {
    console.log("Successfully Triggered");
    if (!checkInputValidity()) {
        return;
    }

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

// returns current page to root page
function returnToSelection() {
    window.location.href="/index.html";
}

function checkInputValidity() {
    var requiredInputFields = [];

    var fname = document.getElementById("firstName");
    var lname = document.getElementById("lastName");
    var fAddress = document.getElementById("firstAddress");
    var city = document.getElementById("city");
    var postcode = document.getElementById("postcode");
    var email = document.getElementById("emailAddress");

    requiredInputFields.push(fname);
    requiredInputFields.push(lname);
    requiredInputFields.push(fAddress);
    requiredInputFields.push(city);
    requiredInputFields.push(postcode);

    //checks whether postcode is a number
    if (!checkForCompletedFields(requiredInputFields) || !emailValidation(email.value) || !validatePostcode(postcode.value)) {
        return false;
    }

    return true;
}

function checkForCompletedFields(requiredInputFields) {
    // checks if text input fields are empty
    for(var i = 0; i < requiredInputFields.length; i++) {
        if (requiredInputFields[i].value == "") {
            console.log("is false");
            alert("Please complete all requried fields");
            return false;
        }
    }
    return true;
}

function validatePostcode(postcodeString) {
    let postExp = /^[0-9]+$/
    if (!postExp.test(postcodeString)) {
        alert("Postcode only allows numbers")
        return false;
    }

    return true;
}

function emailValidation(emailString) {
    let regEmailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regEmailFilter.test(emailString)) {
        alert("Please input a valid email")
        return false;
    }

    return true;
}
