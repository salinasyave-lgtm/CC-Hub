// EDIT THIS LIST to add your own CC listings.
// Put your pictures in the images folder, then use a path like "images/my-hair.jpg".
// For creator links, paste the creator's official download or post URL.
// Only link to or host files you have permission to share.
const ccItems = [
  {
    title: "Soft Waves Hair",
    category: "Hair",
    creator: "Creator name",
    description: "A pretty everyday hairstyle for your Sims.",
    image: "",
    link: "https://www.tumblr.com/"
  },
  {
    title: "Everyday Outfit",
    category: "Clothing",
    creator: "Creator name",
    description: "A cute look for everyday gameplay.",
    image: "",
    link: "https://www.tumblr.com/"
  },
  {
    title: "Cozy Bedroom Set",
    category: "Build & Buy",
    creator: "Creator name",
    description: "Make your Sim's room feel extra cozy.",
    image: "",
    link: "https://www.tumblr.com/"
  },
  {
    title: "Blush Makeup Set",
    category: "Makeup",
    creator: "Creator name",
    description: "A soft makeup look for Create-a-Sim.",
    image: "",
    link: "https://www.tumblr.com/"
  },
  {
    title: "Little Bow Accessories",
    category: "Accessories",
    creator: "Creator name",
    description: "Sweet finishing touches for your Sims.",
    image: "",
    link: "https://www.tumblr.com/"
  },
  {
    title: "Curly Hair Collection",
    category: "Hair",
    creator: "Creator name",
    description: "A new style to add personality to your Sims.",
    image: "",
    link: "https://www.tumblr.com/"
  }
];

const grid = document.getElementById("card-grid");
const search = document.getElementById("search");
const empty = document.getElementById("empty-state");
let activeFilter = "All";

function renderCards() {
  const term = search.value.trim().toLowerCase();
  const filtered = ccItems.filter(item => {
    const matchesCategory = activeFilter === "All" || item.category === activeFilter;
    const haystack = `${item.title} ${item.category} ${item.creator} ${item.description}`.toLowerCase();
    return matchesCategory && haystack.includes(term);
  });

  grid.innerHTML = filtered.map(item => {
    const safeLink = item.link || "#";
    const imageMarkup = item.image
      ? `<img src="${item.image}" alt="${item.title} preview" loading="lazy">`
      : `<div class="image-placeholder">Your CC<br>preview goes here ♡</div>`;
    return `
      <article class="cc-card">
        <div class="cc-image">
          ${imageMarkup}
          <span class="cc-tag">${item.category}</span>
        </div>
        <div class="cc-info">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="cc-meta">
            <span class="creator">by ${item.creator}</span>
            <a class="download-link" href="${safeLink}" target="_blank" rel="noopener">View / Download ↗</a>
          </div>
        </div>
      </article>`;
  }).join("");
  empty.hidden = filtered.length !== 0;
}

document.getElementById("filters").addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter").forEach(el => el.classList.toggle("active", el === button));
  renderCards();
});
search.addEventListener("input", renderCards);
renderCards();
