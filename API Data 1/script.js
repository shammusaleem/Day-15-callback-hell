// Function to fetch a random cat fact
function getCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('cat-fact').innerText = data.fact;
        })
        .catch(error => console.error('Error fetching cat fact:', error));
}

// Call the function when the page loads to display the first fact
getCatFact();
