const username = 'emanuelmartinez'; // Replace with your GeoNames username
const url = `http://api.geonames.org/searchJSON?q=city&country=GB&maxRows=60&username=${username}`;
const countrySelect = document.querySelector("select#Country");
const townSelect = document.querySelector("select#Town");

let allCities = []; // This will store all fetched city data

// Fetch all cities once and store them
function fetchCities() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        allCities = data.geonames;
        populateCountries();
    })
    .catch(error => console.error('Error fetching cities:', error));
}

// Populate the country dropdown based on unique adminName1
function populateCountries() {
    const uniqueCountries = new Set(allCities.map(city => city.adminName1));
    uniqueCountries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });
}

// Adding an event listener to the country dropdown menu
countrySelect.addEventListener('change', function() {
    const selectedCountry = this.value;
    populateTowns(selectedCountry);
});

// Populate the town dropdown based on the selected country
function populateTowns(country) {
    townSelect.innerHTML = '<option>Select Town</option>'; // Reset towns dropdown
    townSelect.disabled = false;

    if (country.length > 0) {
        const filteredCities = allCities.filter(city => city.adminName1 === country);
        filteredCities.forEach(city => {
            const option = new Option(city.toponymName, city.toponymName);
            townSelect.appendChild(option);
        });
    } else {
        townSelect.disabled = true;
    }
}

fetchCities();

//items de coleta 

const itemsToCollet = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollet) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

//let é uma variavel e pode mudar de valor já a const é uma constante 
    
function handleSelectedItem(event) {
    const itemLi = event.target

    // adicionar ou renover uma classe com javascript 
    itemLi.classList.toggle("selected")
    
    const itemId = itemLi.dataset.id

   

    // verificar se exitem items selecionados,
    // se sim pegar os items selecionados 

    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId //isso sera true ou false 
        return itemFound
    })

    //se já estiver selecionado,
    if( alreadySelected >= 0) {
        // tirar da seleçāo
        const filteredItems = selectedItems.filter (item => {
            const itemIsDifferent = item != itemId 
            return itemIsDifferent
        })
        //se nao estiver selecionado,adicionar a selecao 
        selectedItems = filteredItems
    } else {
        selectedItems.push(itemId)
    }

    //atualizar o campo escondido com os items selecionados 
    collectedItems.value = selectedItems
}
