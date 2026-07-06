// ================================
// MENÚ ACTIVO AL HACER SCROLL
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ================================
// HEADER CON SOMBRA
// ================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.12)";
        header.style.background = "#ffffff";

    } else {

        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.05)";

    }

});

// ================================
// ANIMACIÓN DE APARICIÓN
// ================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

document.querySelectorAll(".card,.feature,.hero-text,.hero-image,.about-text,.about-image").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// ================================
// EFECTO BOTÓN WHATSAPP
// ================================

const whatsapp = document.querySelector(".whatsapp-float");

setInterval(()=>{

    whatsapp.classList.toggle("pulse");

},1200);

// ================================
// SCROLL SUAVE
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const destino=document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});
//=========================
// MENÚ MÓVIL
//=========================

const menu = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");

menu.addEventListener("click",()=>{

    nav.classList.toggle("active");

});