document.addEventListener("DOMContentLoaded", function() {

    fetch("config.json")
        .then(response => response.json())
        .then(data => {

        
            document.getElementById("mainTitle").textContent = data.title;

            const container = document.getElementById("cardsContainer");

           
            data.cards.forEach(card => {
                const cardDiv = document.createElement("div");
                cardDiv.className = "card";

                cardDiv.innerHTML = `
                    <img src="${card.image}" alt="${card.title}">
                    <div class="card-content">
                        <h2>${card.title}</h2>
                        <p>${card.description}</p>
                        <div class="buttons">
                            <button>${card.btn1}</button>
                            <button class="secondary">${card.btn2}</button>
                        </div>
                    </div>
                `;

                container.appendChild(cardDiv);
            });

        })
        .catch(error => console.error("Eroare la încărcarea JSON:", error));

});
