document.addEventListener("DOMContentLoaded", (event) => {
  updateDescription();
});

function updateDescription() {
  // Sélectionner l'élément parent avec l'ID "description"
  const descriptionDiv = document.getElementById("description");

  // Obtenir tous les enfants directs (les éléments <p>)
  const paragraphs = descriptionDiv.children;

  // Boucler sur chaque enfant et changer son contenu
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = i; // Remplacer le contenu par l'index
  }
}
