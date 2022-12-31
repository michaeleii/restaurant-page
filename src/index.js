import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
const pages = [home, menu, contact];
const homeNav = document.getElementById("home");
const menuNav = document.getElementById("menu");
const contactNav = document.getElementById("contact");
const renderPage = (page) => {
	content.innerHTML = page;
};
[homeNav, menuNav, contactNav].forEach((menuItem, i) => {
	menuItem.addEventListener("click", () => {
		renderPage(pages[i]);
	});
});
renderPage(home);
