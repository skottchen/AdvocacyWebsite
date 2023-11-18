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

// Add your query for the sign now button here
let count = 3;

const addSignature = (person) => {
  // Add signature to the list
  const signed = document.querySelector(".signatures");
  const newSig = document.createElement("p");
  newSig.textContent = `🖊️ ${person.name} from ${person.hometown} supports this cause.`;
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

//Unit 9: Animated Modal
let modal = document.getElementById("thanks-modal");
let modalContent = document.getElementById("thanks-modal-content");
const toggleModal = (person) => {
  let intervalId = setInterval(scaleImage, 500);
  modal.style.display = "flex";
  modalContent.textContent = `Thank you so much ${person.name} for signing the petition!`
  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 5000)
}

let closeModalButton = document.getElementById("close-modal");
const closeModal = () => {
  modal.style.display = "none";
}

closeModalButton.addEventListener("click", closeModal);

let scaleFactor = 1;
let modalImage = document.getElementById("modal-image");

const scaleImage = () => {
  if (scaleFactor === 1) {
    scaleFactor = 0.8
  } else {
    scaleFactor = 1;
  }
  modalImage.style.transform = modalImage.style.transform = `scale(${scaleFactor})`;
}

const form = document.getElementById("sign-petition")
const email = document.getElementById('email');

const validateForm = (event) => {

  let containsErrors = false;

  let petitionInputs = form.elements;

  //person object
  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value,
  }

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
    addSignature(person);
    toggleModal(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
  }

  event.preventDefault();
}

form.addEventListener('submit', validateForm);


//Unit 8: Project Part 8 (Implementing Website Animations)
let reduceMotionButton = document.getElementById("reduce-motion-button")

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '4s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll(".revealable")

const reveal = () => {

  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);


