// Add your CC listings between the [ ] below.
const ccItems = [
// Example:
// {
// title: "My CC Name",
// category: "Hair",
// creator: "Creator Name",
// description: "Description of the CC",
// image: "https://example.com/preview.jpg",
// link: "https://example.com/download"
// }
];

const grid = document.getElementById("card-grid");
const search = document.getElementById("search");
const empty = document.getElementById("empty-state");
let activeFilter = "All";

function escapeHTML(value) {
return String(value ?? "").replace(/[&<>"']/g, char => ({
"&": "&amp;",
"<": "&lt;",
">": "&gt;",
'"': "&quot;",
"'": "&#39;"
})[char]);
}

function renderCards() {
const term = search.value.trim().toLowerCase();

const filtered = ccItems.filter(item => {
const matchesCategory =
activeFilter === "All" || item.category === activeFilter;
const haystack =
`${item.title} ${item.category} ${item.creator} ${item.description}`.toLowerCase();
return matchesCategory && haystack.includes(term);
});

grid.innerHTML = filtered.map(item => {
const imageMarkup = item.image
? `<img src="${escapeHTML(item.image)}" alt="CC preview" loading="lazy">`
: `<div class="image-placeholder">Your CC<br>preview goes here ♡</div>`;

return `
<article class="cc-card">
<div class="cc-image">
${imageMarkup}
<span class="cc-tag">${escapeHTML(item.category)}</span>
</div>
<div class="cc-info">
<h3>${escapeHTML(item.title)}</h3>
<p>${escapeHTML(item.description)}</p>
<div class="cc-meta">
<span class="creator">by ${escapeHTML(item.creator)}</span>
<a class="download-link" href="${escapeHTML(item.link)}"
target="_blank" rel="noopener">View / Download ↗</a>
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
document.querySelectorAll(".filter").forEach(el =>
el.classList.toggle("active", el === button)
);
renderCards();
});

search.addEventListener("input", renderCards);
renderCards();
const ccItems = [ const ccItems = [
{
title: "Cute Sims Hair",
category: "Hair",
creator: "Creator Name",
description: "Long hairstyle for Sims 4",
image: "PASTE PHOTO LINK HERE",
link: "PASTE DOWNLOAD LINK HERE"
}
];
