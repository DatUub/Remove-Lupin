// Get all elements with the class 'author-name'
let authors = document.getElementsByClassName('author-name');

// Convert HTMLCollection to Array
let authorArray = Array.from(authors);

// Loop through each author
authorArray.forEach(function(author) {
    // If the author's text includes "Lupin"
    if (author.textContent.includes('Lupin')) {
        // Find the parent modpack element and remove it
        let modpack = author;
        while (modpack && !modpack.classList.contains('project-card')) {
            modpack = modpack.parentElement;
        }
        if (modpack) {
            modpack.remove();
        }
    }
});