// Get elements
const dayForm = document.getElementById('day-form');
const daySelect = document.getElementById('day-select');
const articleContainer = document.getElementById('article-container');
const bookmarkBtn = document.getElementById('bookmark-btn');

// Event listener for the form submission
dayForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedDay = daySelect.value;
    const articleImages = getArticleImages(selectedDay);
    loadArticleImages(articleImages);
});

// Event listener for the bookmark button
bookmarkBtn.addEventListener('click', function() {
    // Save scroll position to local storage
    localStorage.setItem('bookmark', articleContainer.scrollTop);
    alert('Bookmark saved. You can now resume reading from this position later.');
});

// Function to get article images based on selected day
function getArticleImages(day) {
    // Replace with actual paths to your article images
    const articleImagePaths = {
        monday: ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'],
        tuesday: ['tuesday_page1.jpg', 'tuesday_page2.jpg', 'tuesday_page3.jpg'],
        wednesday: ['wednesday_page1.jpg', 'wednesday_page2.jpg', 'wednesday_page3.jpg'],
        thursday: ['thursday_page1.jpg', 'thursday_page2.jpg', 'thursday_page3.jpg'],
        friday: ['friday_page1.jpg', 'friday_page2.jpg', 'friday_page3.jpg'],
        saturday: ['saturday_page1.jpg', 'saturday_page2.jpg', 'saturday_page3.jpg'],
        sunday: ['sunday_page1.jpg', 'sunday_page2.jpg', 'sunday_page3.jpg']
    };
    return articleImagePaths[day];
}

// Function to load article images
function loadArticleImages(imagePaths) {
    // Clear previous article images
    articleContainer.innerHTML = '';
    // Load each image and append it to the article container
    imagePaths.forEach(function(imagePath) {
        const img = document.createElement('img');
        img.src = imagePath;
        articleContainer.appendChild(img);
    });
    // Check if there is a bookmark saved in local storage
    const bookmark = localStorage.getItem('bookmark');
    if (bookmark !== null) {
        // Restore scroll position to bookmarked position
        articleContainer.scrollTop = bookmark;
    }
}
