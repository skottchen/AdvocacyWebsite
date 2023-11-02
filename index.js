// TODO: Query for button with an id "theme-button"

let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);

// Add your query for the sign now button here
const form = document.getElementById("sign-petition")
let count = 3;

const addSignature = (event) => {
  event.preventDefault();

  let name = document.getElementById('name').value;
  let hometown = document.getElementById('hometown').value;
  // Add signature to the list
  const signed = document.querySelector(".signatures");
  const newSig = document.createElement("p");
  newSig.textContent = "🖊️ " + name + " from " + hometown + " supports this.";
  signed.appendChild(newSig);

  // Update the signature count
  count = count + 1;

  // Remove the old counter
  const oldCounter = document.getElementById("counter");
  if (oldCounter) {
    oldCounter.remove();
  }

  // Create a new counter element
  const counterElement = document.createElement("p");
  counterElement.id = "counter";
  counterElement.textContent = "🖊️ " + count + " people have signed this petition and support this cause.";

  // Append the new counter to the signatures div
  signed.appendChild(counterElement);

  // Clear input fields
  document.getElementById('name').value = '';
  document.getElementById('hometown').value = '';
}


// Add a click event listener to the sign now button here
form.addEventListener('submit', addSignature);

// functionality to start keeping a count of total signatures

