import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";
const pages = [home, menu, contact];
const homeNav = document.getElementById("home");
const menuNav = document.getElementById("menu");
const contactNav = document.getElementById("contact");

[homeNav, menuNav, contactNav].forEach((mItem, i) => {
	mItem.addEventListener("click", renderPage(pages[i]));
});
const content = document.getElementById("content");

const renderPage = (page) => {
	content.innerHTML = page;
};
