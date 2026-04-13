const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Create a data object
const images = [
    {filename: "pic1.jpg", alt: "Closeup of a human eye"},
    {filename: "pic2.jpg", alt: "Rock that looks like a wave"},
    {filename: "pic3.jpg", alt: "Purple and white pansies"},
    {filename: "pic4.jpg", alt: "Section of a wall from a pharaoh's tomb"},
    {filename: "pic5.jpg", alt: "Large moth on a leaf"},
];

// Add the images to the thumbnail bar
// Create a constant called baseURL
const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// Create a for of loop
for (const image of images) {
    // Create a new <img> element for each image
    const newImage = document.createElement("img");

    // Set the <img> source equal to the URL of the image
    newImage.src = `${baseURL}${image.filename}`;
    newImage.alt = image.alt;

    // Make the images focusable via keyboard
    newImage.tabIndex = "0";

    // Append <img> to thumbBar
    thumbBar.appendChild(newImage);

    // Add a click event to the <img> so that when it is clicked it calls a function called updateDisplayedImage()
    newImage.addEventListener("click", updateDisplayedImage);
}

// Create updateDisplayedImage()
// Wire up the Darken/Lighten button


// Add a click event to the <button> with an anonymous function


// If the <button> has a class of dark when clicked, change its text content to Lighten


// If the <button> does not have a class of dark when clicked, change its text content to Darken
