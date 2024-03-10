function togglePassword(inputId) {
    var inputElement = document.getElementById(inputId);
    var buttonElement = inputElement.nextElementSibling;
    
    if (inputElement.type === "password") {
        inputElement.type = "text";
        buttonElement.textContent = "Hide";
    } else {
        inputElement.type = "password";
        buttonElement.textContent = "Show";
    }
}



document.addEventListener('DOMContentLoaded', function() {
    const countrySelect = document.getElementById('countrySelect');
  
    // Populate the dropdown list with countries
    for (let country of countries) {
      const option = document.createElement('option');
      option.value = country;
      option.textContent = country;
      countrySelect.appendChild(option);
    }
  
    // Add event listener to the dropdown list
    countrySelect.addEventListener('change', function() {
      const selectedCountry = countrySelect.value;
      // Remove the alert box
      // if (selectedCountry !== "") {
      //   alert("You selected: " + selectedCountry);
      // }
    });
});

// Rest of your code...


  const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
  "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
  "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany",
  "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland",
  "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
  "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
  "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
  "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
  "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea",
  "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
  "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
  "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
  "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
  "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
  "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];


// Assuming you have a provinces array with the names of all provinces in the Philippines
const provinces = [
    "Abra", "Agusan del Norte", "Agusan del Sur", "Aklan", "Albay", 
    "Antique", "Apayao", "Aurora", "Basilan", "Bataan", "Batanes", 
    "Batangas", "Benguet", "Biliran", "Bohol", "Bukidnon", "Bulacan", 
    "Cagayan", "Camarines Norte", "Camarines Sur", "Camiguin", "Capiz", 
    "Catanduanes", "Cavite", "Cebu", "Compostela Valley", "Cotabato", 
    "Davao del Norte", "Davao del Sur", "Davao Occidental", 
    "Davao Oriental", "Dinagat Islands", "Eastern Samar", "Guimaras", 
    "Ifugao", "Ilocos Norte", "Ilocos Sur", "Iloilo", "Isabela", "Kalinga", 
    "La Union", "Laguna", "Lanao del Norte", "Lanao del Sur", "Leyte", 
    "Maguindanao", "Marinduque", "Masbate", "Metro Manila", "Misamis Occidental", 
    "Misamis Oriental", "Mountain Province", "Negros Occidental", 
    "Negros Oriental", "Northern Samar", "Nueva Ecija", "Nueva Vizcaya", 
    "Occidental Mindoro", "Oriental Mindoro", "Palawan", "Pampanga", 
    "Pangasinan", "Quezon", "Quirino", "Rizal", "Romblon", "Samar", 
    "Sarangani", "Siquijor", "Sorsogon", "South Cotabato", "Southern Leyte", 
    "Sultan Kudarat", "Sulu", "Surigao del Norte", "Surigao del Sur", 
    "Tarlac", "Tawi-Tawi", "Zambales", "Zamboanga del Norte", 
    "Zamboanga del Sur", "Zamboanga Sibugay"
];

// Function to populate the select element with provinces
function populateProvinces() {
    const provinceSelect = document.getElementById("provinceSelect");

    provinces.forEach(province => {
        const option = document.createElement("option");
        option.textContent = province;
        option.value = province;
        provinceSelect.appendChild(option);
    });
}

// Call the function to populate provinces when the page loads
window.onload = populateProvinces;


document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.getElementById('createAccountForm');

    // Add submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        
        
        // Redirect to register.html after successful form submission
        window.location.href = 'register.html';
    });
});

