document.addEventListener("DOMContentLoaded", (event) => {
  updateDescription_jack();
});

function updateDescription_jack() {
  const descriptionDiv = document.getElementById("description");
  const nouv_p = document.createElement("p");

  nouv_p.textContent = "Now featuring a headphone jack!";
  descriptionDiv.appendChild(nouv_p);
}
