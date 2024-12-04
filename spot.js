		function getSiteByCity(city) {
            const sitesDatabase = {
                "vannes": "meteospot/meteohossegor.html",
                "la torche": "meteospot/LaTorche.html",
                "crozon": "meteocrozon.html",
                "lyon": "https://www.lyon-france.com",
                "bordeaux": "https://www.bordeaux-tourisme.com"
                // Ajoutez d'autres villes ici
            };
            return sitesDatabase[city.toLowerCase()] || null;
        }

        function searchCity() {
            const cityInput = document.getElementById("cityInput").value.trim().toLowerCase();
            const siteUrl = getSiteByCity(cityInput);

            const errorDiv = document.getElementById("error");
            errorDiv.textContent = ""; // Réinitialiser les messages d'erreur

            if (siteUrl) {
                // Redirige directement vers le site
                window.location.href = siteUrl;
            } else {
                // Affiche une erreur si la ville n'est pas trouvée
                errorDiv.textContent = "";
            }
        }
