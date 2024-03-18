function change(i) {
	fetch(`public/chapter${i}.md`) // Adjust the path to reflect the location of chapter.md
		.then((response) => response.text())
		.then((markdownText) => {
			// Parse the Markdown text using Marked.js
			const htmlContent = marked.parse(markdownText);

			// Update the innerHTML of the 'content' element
			document.getElementById("content").innerHTML = htmlContent;
		})
		.catch((error) => console.error("Error fetching chapter.md:", error));
}

for (let i = 1; i <= 12; i++) {
	const chapterLinkId = "chapter" + i + "-link";
	document
		.getElementById(chapterLinkId)
		.addEventListener("click", function (event) {
			event.preventDefault();
			change(i);
			scrollTop();
		});
}

const nav_bar = document.getElementById("navbar");
let isScreenSmall = true;

function toggleClassBasedOnScreenSize() {
	isScreenSmall = window.matchMedia("(max-width: 730px)").matches;
	nav_bar.classList.toggle("hidden", isScreenSmall);
}

toggleClassBasedOnScreenSize();

window.addEventListener("resize", function () {
	toggleClassBasedOnScreenSize();
});

const menu_btn = document.getElementById("menu-btn");
menu_btn.addEventListener("click", () => {
	if (isScreenSmall) {
		nav_bar.classList.toggle("hidden");
	}
});

const chapter_link = document.getElementsByClassName("chapter-link");

for (let i = 0; i < chapter_link.length; i++) {
	chapter_link[i].addEventListener("click", () => {
		if (isScreenSmall) {
			nav_bar.classList.toggle("hidden");
		}
	});
}

//scrolling to top and bottom functionality

const scroll_up_button = document.getElementById("scroll-up-btn");
const scroll_down_button = document.getElementById("scroll-down-btn");

function scrollTop() {
	window.scroll({
		top: 1,
		left: 1,
		behavior: "smooth",
	});
}

function scrollDown() {
	window.scroll({
		top: document.body.scrollHeight,
		left: 1,
		behavior: "smooth",
	});
}

scroll_up_button.addEventListener("click", () => {
	scrollTop();
});
scroll_down_button.addEventListener("click", () => {
	scrollDown();
});

// firebase
// config
// for
// database

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBC8PJ899bA0VwZphlHfVzPCbOWEUUwa7Q",
	authDomain: "secret-history.firebaseapp.com",
	projectId: "secret-history",
	storageBucket: "secret-history.appspot.com",
	messagingSenderId: "151428978439",
	appId: "1:151428978439:web:d852f35ad0d264a16d97a2",
	measurementId: "G-X366NF5WG1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
