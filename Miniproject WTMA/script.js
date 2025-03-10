document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let isValid = true;

   
    let firstName = document.getElementById("firstName").value;
    if (!/^[a-zA-Z]{4,}$/.test(firstName)) {
        document.getElementById("firstNameError").innerText = "Must be at least 4 letters.";
        isValid = false;
    } else {
        document.getElementById("firstNameError").innerText = "";
    }

    
    let lastName = document.getElementById("lastName").value;
    if (!/^[a-zA-Z]{1,}$/.test(lastName)) {
        document.getElementById("lastNameError").innerText = "Must contain at least 1 letter.";
        isValid = false;
    } else {
        document.getElementById("lastNameError").innerText = "";
    }

    
    let email = document.getElementById("email").value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format.";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    
    let dob = document.getElementById("dob").value;
    if (dob === "") {
        document.getElementById("dobError").innerText = "Date of Birth is required.";
        isValid = false;
    } else {
        document.getElementById("dobError").innerText = "";
    }

    
    let age = document.getElementById("age").value;
    if (!/^\d{2}$/.test(age)) {
        document.getElementById("ageError").innerText = "Must be a 2-digit number.";
        isValid = false;
    } else {
        document.getElementById("ageError").innerText = "";
    }

    
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("genderError").innerText = "Select a gender.";
        isValid = false;
    } else {
        document.getElementById("genderError").innerText = "";
    }

    
    let phone = document.getElementById("phone").value;
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Must be a 10-digit number.";
        isValid = false;
    } else {
        document.getElementById("phoneError").innerText = "";
    }

    
    let address = document.getElementById("address").value;
    if (address.trim() === "") {
        document.getElementById("addressError").innerText = "Address cannot be empty.";
        isValid = false;
    } else {
        document.getElementById("addressError").innerText = "";
    }

    
    if (isValid) {
        alert("Signup Successful!");
        document.getElementById("signupForm").reset();
    }
});
