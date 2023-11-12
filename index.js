let themeButton = document.getElementById("theme-button");
let improveText = document.getElementById("improve");
let headerText = document.getElementById("header-text");
let headerContainer = document.querySelector(".header-container");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    headerContainer.style.backgroundColor = "black";
  } else {
    headerContainer.style.backgroundColor = "lightblue";
  }
}

themeButton.addEventListener("click", toggleDarkMode);

const form = document.getElementById("sign-petition")

// Add your query for the sign now button here
let count = 3;

const addSignature = () => {

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
}

const email = document.getElementById('email');

const validateForm = (event) => {

  let containsErrors = false;

  let petitionInputs = form.elements;

  for (let i = 0; i < petitionInputs.length - 1; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if (!email.value.includes('.com')) {
    containsErrors = true;
    email.classList.add('error');
  } else {
    email.classList.remove('error');
  }

  if (!containsErrors) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
  }

  event.preventDefault();
}

form.addEventListener('submit', validateForm);

//Unit 8: Project Part 8 (Implementing Website Animations)
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll(".revealable")

const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      console.log(topOfRevealableContainer);
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal)





