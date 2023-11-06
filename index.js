// TODO: Query for button with an id "theme-button"

let themeButton = document.getElementById("theme-button");
let improveText = document.getElementById("improve");
let headerText = document.getElementById("header-text");
let headerContainer = document.querySelector(".header-container");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    headerContainer.style.backgroundColor = "black";
  } else{
    headerContainer.style.backgroundColor = "lightblue";
  }
}

themeButton.addEventListener("click", toggleDarkMode);

//position cursor at beginning of input field

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


