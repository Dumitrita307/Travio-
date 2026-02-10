const places = [
  {
    title: "Munții Alpi",
    description: "Peisaje spectaculoase, aer curat și trasee perfecte pentru relaxare.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    title: "Plaje Tropicale",
    description: "Apă limpede, nisip fin și liniște totală în nuanțe pastelate.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    title: "Orașe Istorice",
    description: "Arhitectură, cultură și plimbări relaxante prin centre vechi.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b"
  },
  {
    title: "Țări Fabuloase",
    description: "Tururi, locuri populare, monumente și tradiții autentice.",
    image: "https://images.unsplash.com/photo-1586810724476-c294fb7ac01b"
  }
];

const container = document.getElementById("cardsContainer");

places.forEach(place => {
 
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = place.image;
  img.alt = place.title;


  const content = document.createElement("div");
  content.classList.add("card-content");

  const h2 = document.createElement("h2");
  h2.textContent = place.title;


  const p = document.createElement("p");
  p.textContent = place.description;

 
  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  const btnInfo = document.createElement("button");
  btnInfo.textContent = "Află mai mult";

  const btnGallery = document.createElement("button");
  btnGallery.textContent = "Galerie";


  buttons.appendChild(btnInfo);
  buttons.appendChild(btnGallery);

  content.appendChild(h2);
  content.appendChild(p);
  content.appendChild(buttons);

  card.appendChild(img);
  card.appendChild(content);

  container.appendChild(card);
});
