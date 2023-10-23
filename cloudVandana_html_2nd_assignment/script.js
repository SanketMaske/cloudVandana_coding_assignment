function resetForm() {
    document.getElementById("survey-form").reset();
}

function submitForm() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const dob = document.getElementById("date-of-birth").value;
    const country = document.getElementById("country").value;
    const gender = [...document.querySelectorAll('input[name="gender"]:checked')].map(input => input.value);
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mobile-number").value;

    // Check if all fields are filled
    if (firstName && lastName && dob && country && gender.length > 0 && profession && email && mobileNumber) {
        // Display the values in the popup
        const popupContent = document.getElementById("popup-content");
        popupContent.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender.join(", ")}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
        `;

       
        const popup = document.getElementById("popup");
        popup.style.display = "block";
    }
}

function closePopup() {
    
    const popup = document.getElementById("popup");
    popup.style.display = "none";
    document.getElementById("survey-form").reset();
}
