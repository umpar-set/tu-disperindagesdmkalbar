let correctPassword = ""; 
function fetchPassword() {
    const url = "https://script.google.com/macros/s/AKfycbxFZ8wBZxbEacBLp_G4IC-lPiLNqrqjKpgupzhwqrYHibRTQlxrhk3YjjzYLeri3DG8Dg/exec";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log("Data received from Google Apps Script:", data);
            
            if (data && data.data && data.data[0] && data.data[0].password) {
                correctPassword = data.data[0].password; 
                console.log("Password fetched:", correctPassword);
            } else {
                console.error("Password not found in the response!");
                alert("Error: Password not found in the response.");
            }
        })
        .catch((error) => {
            console.error("Error fetching password:", error);
            alert("Error fetching password: " + error.message);
        });
}

function validatePassword() {
    const enteredPassword = document.getElementById("passwordInput").value;

    if (enteredPassword === correctPassword) {
        closeModal();
        window.location.href = "CRUD-Data.html"; 
    } else {
        alert("Incorrect password, please try again!");
    }
}


function openModal() {
    document.getElementById("passwordModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("passwordModal").style.display = "none";
    document.getElementById("errorMessage").textContent = ""; 
}

window.addEventListener("load", fetchPassword);
