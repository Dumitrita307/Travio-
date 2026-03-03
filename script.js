const themeToggle = document.getElementById("themeToggle");


document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeToggle.innerText = "🌞";
    } else {
        document.body.classList.remove("dark");
        themeToggle.innerText = "🌙";
    }
});


themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.innerText = "🌞";
        localStorage.setItem("theme", "dark"); 
    } else {
        themeToggle.innerText = "🌙";
        localStorage.setItem("theme", "light");
    }
});


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
const travelToast = document.getElementById("travelToast");
const travelMessage = document.getElementById("travelMessage");

openFormBtn.addEventListener("click", function() {
    formContainer.classList.toggle("active");
});

submitBtn.addEventListener("click", function() {
    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();

    if (name !== "" && email !== "") {
        travelMessage.innerHTML = `${name}, te vom anunța când apar noi destinații de explorat! 🌍`;
        
        travelToast.classList.add("show");

        setTimeout(() => {
            travelToast.classList.remove("show");
        }, 8000);

        document.getElementById("nameInput").value = "";
        document.getElementById("emailInput").value = "";
        formContainer.classList.remove("active");
    } else {
        alert("Te rog completează toate câmpurile!");
    }
});

