function showImageModal(element) {
    const imageSrc = element.getAttribute("src");
    const modal = document.getElementById("imageModal");
    const modalImage = modal.querySelector(".modal-image");

    modalImage.setAttribute("src", imageSrc);
    modal.style.display = "flex";
}

function closeImageModal() {
    const modal = document.getElementById("imageModal");
    const modalImage = modal.querySelector(".modal-image");

    modalImage.setAttribute("src", "");
    modal.style.display = "none";
}

function toggleLatestNews() {
    const latestNewsContainer = document.getElementById("latestNewsContainer");
    const aboutContainer = document.getElementById("aboutContainer");

    latestNewsContainer.style.display = "block";
    aboutContainer.style.display = "none";
}

function toggleAbout() {
    const latestNewsContainer = document.getElementById("latestNewsContainer");
    const aboutContainer = document.getElementById("aboutContainer");

    latestNewsContainer.style.display = "none";
    aboutContainer.style.display = "block";
}

function filterArticles() {
    const searchInput = document.getElementById("searchInput");
    const categoryDropdown = document.getElementById("categoryDropdown");
    const articles = document.getElementsByClassName("article");

    const searchQuery = searchInput.value.toLowerCase();
    const selectedCategory = categoryDropdown.value.toLowerCase();

    for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        const articleTitle = article.querySelector(".article-title").textContent.toLowerCase();
        const articleCategory = article.querySelector(".article-meta").textContent.toLowerCase();
        const articleContent = article.querySelector(".article-content").textContent.toLowerCase();

        const isSearchMatch = articleTitle.includes(searchQuery) || articleContent.includes(searchQuery);
        const isCategoryMatch = selectedCategory === "all" || articleCategory.includes(selectedCategory);

        if (isSearchMatch && isCategoryMatch) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    }
}

function formatText() {
  let textElements = document.getElementsByTagName('p');
  for (let i = 0; i < textElements.length; i++) {
    let formattedText = textElements[i].innerHTML;
    formattedText = formattedText.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
    formattedText = formattedText.replace(/\*(.+?)\*/g, '<i>$1</i>');
    textElements[i].innerHTML = formattedText;
  }
}

formatText();
window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});