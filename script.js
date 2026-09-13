/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* Close mobile menu after clicking a link */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


/* =========================
   MENU FILTER
========================= */

const filterButtons = document.querySelectorAll(".filter-button");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active state
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Add active state
        button.classList.add("active");

        const selectedCategory = button.dataset.category;

        menuCards.forEach((card) => {

            const cardCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === cardCategory
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================
   CURRENT YEAR
========================= */

const currentYear = new Date().getFullYear();

const footerYear = document.querySelector(".footer-bottom p");

if (footerYear) {

    footerYear.innerHTML =
        `© ${currentYear} Royal Feast. All rights reserved.`;

}


/* =========================
   BUTTON INTERACTION
========================= */

const menuButton = document.querySelector(".nav-button");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        console.log("Welcome to the Royal Feast menu!");

    });

}