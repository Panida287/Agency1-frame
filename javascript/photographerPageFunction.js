// photographersPageFunction.js
// Handles functionality related to the photographers page

// Function to generate photographer cards
function generatePhotographerCards() {
  const photographersSection = document.getElementById("photographers");

  photographersData.forEach((photographer, index) => {
    // Create photographer card
    const card = document.createElement("div");
    card.classList.add("photographer-card");
    card.setAttribute("data-index", index);

    // Create image container
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    imageContainer.style.backgroundImage = `url(${photographer.image})`;
    card.appendChild(imageContainer);

    // Create heading (photographer name) and append it to the image container
    const heading = document.createElement("h3");
    heading.textContent = photographer.name;
    imageContainer.appendChild(heading);

    // Append photographer card to photographers section
    photographersSection.appendChild(card);

    // Add click event listener to image container
    imageContainer.addEventListener("click", () => {
      handleImageContainerClick(imageContainer, photographer.image);
    });
  });
}

// Function to handle image container click
function handleImageContainerClick(clickedContainer, photographerImage) {
  // Remove 'selected' class from all image containers
  const imageContainers = document.querySelectorAll(".image-container");
  imageContainers.forEach((container) => {
    container.classList.remove("selected");
  });

  // Add 'selected' class to the clicked image container
  clickedContainer.classList.add("selected");

  // Update photographer information
  const index = parseInt(
    clickedContainer.parentElement.getAttribute("data-index")
  );
  const selectedPhotographer = photographersData[index];
  updatePhotographerInfo(selectedPhotographer, photographerImage);
}

// Function to update photographer information
function updatePhotographerInfo(selectedPhotographer, photographerImage) {
  // Update photographer name
  const header = document.querySelector("header h2");
  header.textContent = selectedPhotographer.name;

  // Create photographer description element
  const photographerDescription = document.createElement("p");
  photographerDescription.textContent = selectedPhotographer.description;

  // Create Instagram tag element
  const instagramTag = document.createElement("p");
  instagramTag.innerHTML = `<a href="https://instagram.com/${selectedPhotographer.instagram}" target="_blank">${selectedPhotographer.instagram}</a>`;

  // Clear existing content related to photographer info
  const mainSection = document.querySelector("main");
  const existingPhotographerInfo =
    document.querySelectorAll(".photographer-info");
  existingPhotographerInfo.forEach((info) => {
    mainSection.removeChild(info);
  });

  // Append new elements to the main section
  mainSection.insertBefore(photographerDescription, mainSection.firstChild);
  mainSection.insertBefore(instagramTag, mainSection.firstChild);
  photographerDescription.classList.add("photographer-info");
  instagramTag.classList.add("photographer-info");

  // Update background image
  document.body.style.backgroundImage = `url(${photographerImage})`;
}

// Call the function to generate photographer cards when the page loads
window.addEventListener("load", generatePhotographerCards);
