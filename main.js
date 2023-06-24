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
  const developerContainer = document.getElementById("developerContainer");
  const contactContainer = document.getElementById("contactContainer");

  latestNewsContainer.style.display = "block";
  aboutContainer.style.display = "none";
  developerContainer.style.display = "none";
  contactContainer.style.display = "none";
}

function toggleAbout() {
  const latestNewsContainer = document.getElementById("latestNewsContainer");
  const aboutContainer = document.getElementById("aboutContainer");
  const developerContainer = document.getElementById("developerContainer");
  const contactContainer = document.getElementById("contactContainer");

  latestNewsContainer.style.display = "none";
  aboutContainer.style.display = "block";
  developerContainer.style.display = "block";
  contactContainer.style.display = "block";

  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.style.display = "block";
  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 3000);
}

function filterArticles() {
  const searchInput = document.getElementById("searchInput");
  const categoryButtons = document.getElementsByClassName("category-button");
  const articles = document.getElementsByClassName("article");

  const searchQuery = searchInput.value.toLowerCase();
  const selectedCategory = getSelectedCategory();

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

function toggleCategory(button) {
  const categoryButtons = document.getElementsByClassName("category-button");

  if (button.classList.contains("active")) {
    button.classList.remove("active");
    setSelectedCategory("all");
  } else {
    for (let i = 0; i < categoryButtons.length; i++) {
      categoryButtons[i].classList.remove("active");
    }
    button.classList.add("active");
    setSelectedCategory(button.textContent.toLowerCase());
  }

  filterArticles();
}

function getSelectedCategory() {
  return localStorage.getItem("selectedCategory") || "all";
}

function setSelectedCategory(category) {
  localStorage.setItem("selectedCategory", category);
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

$(document).ready(function() {
      $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '',
        nextArrow: '',
        appendDots: '.carousel',
        customPaging: function(slider, i) {
          var caption = $(slider.$slides[i]).find('img').data('caption');
          return '<div class="dot-caption">' + caption + '</div>';
        }
    });
});