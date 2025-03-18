// Create an empty array to store items
let items = []

const itemsDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items";

// Function to render the list of items on the screen
function renderItems() {
    itemsDiv.innerHTML = ""; // Clear the previous items to avoid duplicates

    // Loop through each item in the items array
    for (const [idx, item] of Object.entries(items)) {
        
        const container = document.createElement("div")
        container.style.marginBottom = "10px"
        
        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "10px"
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(idx) // Using an arrow function stop immediate execution

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)
    }
}

// Function to load items from localStorage when the page loads
function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if (oldItems) items = JSON.parse(oldItems) // Convert JSON string back to an array
    renderItems()
}

// Function to save the items array to localStorage
function saveItems() {
    const stringItems = JSON.stringify(items) // Converting array to JSON string
    localStorage.setItem(storageKey, stringItems) // Store in localStorage
}

// Function to add a new item to the list
function addItem() {
    const value = input.value; // Get the input value
    if (!value) {
        alert("You cannot add an empty item")
        return
    }
    items.push(value) // Add new item to the array
    renderItems() // Refresh the displayed list
    input.value = "" // Clear the input field
    saveItems() // Save updated list to localStorage
}

// Function to remove an item from the list
function removeItem(idx) {
    items.splice(idx, 1) // Remove item from the array
    renderItems()
    saveItems()
}

// Load items when the page finishes loading
document.addEventListener("DOMContentLoaded", loadItems)