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
const navBar = [homeNav, menuNav, contactNav];

navBar.forEach((menuItem, i) => {
	menuItem.addEventListener("click", () => {
		navBar.forEach((menuItem) => menuItem.classList.remove("hovered"));
		renderPage(pages[i]);
		menuItem.classList.add("hovered");
	});
});
renderPage(home);
