function change(i) {
    fetch(`public/chapter${i}.md`)  // Adjust the path to reflect the location of chapter.md
    .then(response => response.text())
    .then(markdownText => {
        // Parse the Markdown text using Marked.js
        const htmlContent = marked.parse(markdownText);

        // Update the innerHTML of the 'content' element
        document.getElementById('content').innerHTML = htmlContent;
    })
    .catch(error => console.error('Error fetching chapter.md:', error));
}

function scrollTop() {
    window.scroll({
        top: 1, 
        left: 1, 
        behavior: "smooth"
    })
}

for (let i = 1; i <= 12; i++) {
    const chapterLinkId = 'chapter' + i + '-link';
    document.getElementById(chapterLinkId).addEventListener('click', function(event) {
        event.preventDefault();
        change(i);
        onNavToggle();
        scrollTop();
    });
}

//navigation bar toggle function and reponsiveness to smaller screens;

const dropNav = document.getElementById('drop-nav');
const navBar = document.getElementById('navbar');
const content = document.getElementById('content');
const discuss = document.getElementById('discuss');
const container = document.getElementById('container');
let isDropNavClicked = false; 

function screenChange() {
    if (window.innerWidth <= 1000) {
        navBar.style.display = 'none';
    } else {
        navBar.style.display = 'block';
        // content.style.maxWidth = 'calc(100vw - 500px)';
    }
}
screenChange();

window.addEventListener('resize', screenChange);
dropNav.addEventListener('click', onNavToggle);

function onNavToggle() {
    isDropNavClicked = !isDropNavClicked;
    if (window.innerWidth <= 1000) {
        isDropNavClicked ? navBar.style.display = 'block' : navBar.style.display = 'none';
    }
}
