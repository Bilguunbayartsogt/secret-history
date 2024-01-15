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

function screenChange() {
    if (window.innerWidth <= 1000) {
        document.getElementById('navbar').style.display = 'none';
        document.getElementById('content').style.maxWidth = 'calc(100vw - 300px)';
    } else {
        document.getElementById('navbar').style.display = 'block';
        document.getElementById('content').style.maxWidth = 'calc(100vw - 500px)';
    }
}
screenChange();
window.addEventListener('resize', screenChange);

const dropNav = document.getElementById('drop-nav');
const navBar = document.getElementById('navbar');
let isDropNavClicked = false; 
dropNav.addEventListener('click', onNavToggle)

function onNavToggle() {
    isDropNavClicked = !isDropNavClicked;
    if (window.innerWidth <= 1000) {
        isDropNavClicked ? navBar.style.display = 'block' : navBar.style.display = 'none';
    }
}