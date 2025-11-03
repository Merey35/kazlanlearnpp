const resources = [
  {
    title: "Kazakh Grammar (E-book)",
    type: "books",
    desc: "Do you want to learn more about the grammar of Kazakh language? This book is a perfect choice for you!",
    link: "https://slaviccenters.duke.edu/sites/slaviccenters.duke.edu/files/file-attachments/kazakh-grammar.pdf"
  },
  {
    title: "Kazakh Language Podcast",
    type: "podcasts",
    desc: "Listen to a native speaker discuss daily topics.",
    link: "https://soundcloud.com/kazakh-language-with-zhannur"
  },
  {
    title: "Kazakh Vocabulary (Website)",
    type: "articles",
    desc: "A website featuring Kazakh vocabulary on different topics, with translations and pronunciation.",
    link: "https://learn101.org/kazakh_vocabulary.php"
  },
  {
    title: "The Road to Mother (Анаға апарар жол)",
    type: "movies",
    desc: "A touching Kazakh film to experience culture and language naturally.",
    link: "https://youtu.be/fbs37J9_kig?si=pJKiKscdrFoZBlWJ"
  },
  {
    title: "Kazakh Culture",
    type: "articles",
    desc: "Learn more about Kazakh culture!",
    link: "https://www.gov.kz/article/64578?lang=kk"
  }
];

function loadResources(category = "all") {
  const container = document.getElementById("resources-container");
  container.innerHTML = "";

  const filtered = category === "all" ? resources : resources.filter(r => r.type === category);

  filtered.forEach(r => {
    const card = document.createElement("div");
    card.className = "resource-card";
    card.innerHTML = `
      <h3>${r.title}</h3>
      <p>${r.desc}</p>
      <a href="${r.link}" target="_blank">Open</a>
    `;
    container.appendChild(card);
  });
}

function filterResources() {
  const category = document.getElementById("category").value;
  loadResources(category);
}

// Load all on startup
window.onload = () => loadResources();
