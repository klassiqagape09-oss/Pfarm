const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

const serviceBtn = document.getElementById("service-btn");
const extraServices = document.querySelectorAll(".extra-service");

serviceBtn.addEventListener("click", function() {
    extraServices.forEach(function(service) {
        service.style.display = "block";
    });

    serviceBtn.textContent = "All Services Shown";
    serviceBtn.disabled = true;
});

document.getElementById("year").textContent = new Date().getFullYear();const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

const serviceBtn = document.getElementById("service-btn");
const extraServices = document.querySelectorAll(".extra-service");

serviceBtn.addEventListener("click", function() {
    extraServices.forEach(function(service) {
        service.style.display = "block";
    });

    serviceBtn.textContent = "All Services Shown";
    serviceBtn.disabled = true;
});

document.getElementById("year").textContent = new Date().getFullYear();
