const themeToggle = document.getElementById("themeToggle");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");

// --- 1. ÎNCĂRCARE DATE (TEMĂ + FORMULAR) ---
document.addEventListener("DOMContentLoaded", () => {
    // Încărcare temă
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeToggle.innerText = "🌞";
    }

    // Încărcare date contact (rămân aici chiar și după refresh)
    const savedName = localStorage.getItem("contactName");
    const savedEmail = localStorage.getItem("contactEmail");

    if (savedName) nameInput.value = savedName;
    if (savedEmail) emailInput.value = savedEmail;
});

// --- 2. LOGICA PENTRU TEMĂ ---
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

// --- 3. SALVARE DATE PE MĂSURĂ CE SE COMPLETEAZĂ ---
nameInput.addEventListener("input", () => {
    localStorage.setItem("contactName", nameInput.value);
});

emailInput.addEventListener("input", () => {
    localStorage.setItem("contactEmail", emailInput.value);
});

// --- 4. FETCH CARDURI ---
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
        .catch(error => console.error("Eroare JSON:", error));
});

// --- 5. SUBMIT FORMULAR ---
const openFormBtn = document.getElementById("openFormBtn");
const formContainer = document.getElementById("formContainer");
const submitBtn = document.getElementById("submitBtn");
const travelToast = document.getElementById("travelToast");
const travelMessage = document.getElementById("travelMessage");

openFormBtn.addEventListener("click", () => {
    formContainer.classList.toggle("active");
});

submitBtn.addEventListener("click", function() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name !== "" && email !== "") {
        travelMessage.innerHTML = `${name}, te vom anunța când apar noi destinații! 🌍`;
        travelToast.classList.add("show");

        setTimeout(() => {
            travelToast.classList.remove("show");
        }, 8000);

        // AM ELIMINAT removeItem ȘI GOLIREA INPUT-URILOR
        // Acum datele rămân în căsuțe și în localStorage după trimitere
        
        formContainer.classList.remove("active");
    } else {
        alert("Te rog completează toate câmpurile!");
    }
});