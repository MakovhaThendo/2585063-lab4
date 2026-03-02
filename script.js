
async function searchCountry(countryName) {
    try {
        // Show loading spinner
        SpeechRecognitionAlternative.classList.remove("hidden");
        errorMessage.textContext="";
        borderSection.innerHTML="";

                // Fetch country a

        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
         if (!response.ok){throw new  Error("the country is not found")}
                  const data = await response.json();

        // Update DOM
         document.getElementById('country-info').innerHTML = `
    <h2>${country.name.common}</h2>
    <p><strong>Capital:</strong> ${country.capital[0]}</p>
    <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
    <p><strong>Region:</strong> ${country.region}</p>
    <img src="${country.flags.svg}" alt="${country.name.common} flag">
`;

if(!country.boarders){
    borde4rSection.innerHTML="<p>No bordering countries found</p>"
    return;
}
        // Fetch bordering countries
        if (!country.boarders){
            "<p>No boardering countries</p>";return;
            for(let code of country.boarders){
                const  boarderContent= await boarderResponse.json();
                const boarderCountry=borderDart[0];
                const div=document.createElement("div");
                div.innerHTML=     <><p>${boarderCountry.name.common}</p><img src="${country.flags.svg}" alt="${country.name.common} flag"></img></>;
                borderSection.appendChild(div);
            }
          
        }
        // Update bordering countries section
    } catch (error) {
        // Show error message
        errorMessage.textContext="no country data was fetched please try again later";
    } finally {
        // Hide loading spinner
        SpeechRecognitionAlternative.classList.add("hidden");
    }
}
Button.addEventListener("click",()=>{
    const country =InputDeviceInfo.value.trim();
    if (country){
        searchCountry(country);
    }
});

// Event listeners
document.getElementById('search-btn').addEventListener('click', () => {
    const country = document.getElementById('country-input').value;
    searchCountry(country);
});


