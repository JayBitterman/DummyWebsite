
const searchInput = document.querySelector("#service-search");
const searchButton = document.querySelector("#search-button");

searchButton.addEventListener("click", filterCards
// function() {
//   const service = document.getElementById("service-search").value;
//   searchForServices(service);
// }
);

searchInput.addEventListener("input", filterCards);

function filterCards() {
  const searchValue = searchInput.value.toLowerCase();
  const serviceCards = document.querySelectorAll(".service-card");
  let filteredCards = 0;

  serviceCards.forEach((card) => {
    const cardTitle = card.textContent.toLowerCase();
    if (cardTitle.indexOf(searchValue) !== -1) {
      card.style.display = "block";
      filteredCards++;
    } else {
      card.style.display = "none";
    }
  });

  const noResultsMessage = document.querySelector("#no-results-message");
  if (filteredCards === 0) {
    noResultsMessage.style.display = "block";
  } else {
    noResultsMessage.style.display = "none";
  }
}


function searchForServices(service) {
    const services = [
        { name: "electrical", description: "Electrical work for homes and businesses" },
        { name: "roofing", description: "Roof repair and replacement services" },
        { name: "plumbing", description: "Plumbing services for homes and businesses" }
      ];
      
      function searchForServices(service) {
        const results = services.filter(function(item) {
          return item.name === service;
        });
        displayResults(results);
      }
}

function displayResults(results) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    for (let i = 0; i < results.length; i++) {
      const result = results[i];
      resultsDiv.innerHTML += `<p>${result.name}: ${result.description}</p>`;
    }
  }