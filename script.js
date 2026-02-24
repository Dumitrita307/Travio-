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

const openFormBtn = document.getElementById("openFormBtn");
const formContainer = document.getElementById("formContainer");
const submitBtn = document.getElementById("submitBtn");

openFormBtn.addEventListener("click", function() {
    formContainer.classList.toggle("active");
});
const travelToast = document.getElementById("travelToast");
const travelMessage = document.getElementById("travelMessage");
const travelSubMessage = document.getElementById("travelSubMessage");

submitBtn.addEventListener("click", function() {
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();

    if (name !== "" && email !== "") {

        travelMessage.innerHTML = `${name}, te vom anunța când apar noi destinații de explorat! 🌍`;
       

        travelToast.classList.add("show");

        // dispare automat după 4 secunde
        setTimeout(() => {
            travelToast.classList.remove("show");
        }, 4000);

        // reset
        document.getElementById("nameInput").value = "";
        document.getElementById("emailInput").value = "";
        formContainer.classList.remove("active");

    } else {
        alert("Te rog completează toate câmpurile!");
    }
});

closeMessage.addEventListener("click", function() {
    successMessage.classList.remove("active");
});