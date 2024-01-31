let observer = new MutationObserver(removeLupinModpacks);

observer.observe(document, { childList: true, subtree: true });

function removeLupinModpacks() {

  let modpacks = document.querySelectorAll('.project-listing-row');

  for (let modpack of modpacks) {
    // Get the author's name
    let author = modpack.querySelector('.author-name').textContent.trim();

    // If the author is Lupin, remove the modpack
    if (author === 'Lupin') {
      modpack.remove();
    }
  }
}