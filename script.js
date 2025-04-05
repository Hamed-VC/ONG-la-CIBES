//Barre de navigation
let nav_btn = document.querySelector(".nav-btn");
let nav_ul = document.querySelector(".lien ul");
let nav_li = document.querySelectorAll(".lien li");
nav_btn.addEventListener("click", NavbarAffiche)
function NavbarAffiche(){
    nav_ul.classList.toggle("active");
}
nav_li.forEach(lien => {
    lien.addEventListener("click", NavbarFermer)
    function NavbarFermer(){
        nav_ul.classList.remove(".active");
    }
})
function NavbarAffiche(){
    nav_ul.classList.toggle("active");
}
//Animation accueil
function Accueil(){
    let texteAccueil = document.querySelector("#texte-accueil");
    let photoAccueil = document.querySelector("#photo-accueil");
    
    texteAccueil.style.transform = "translateX(0)";
    texteAccueil.style.transition = "all 1s ease-in";

    photoAccueil.style.transform = "translateX(0)";
    photoAccueil.style.transition = "all 2s ease-in";

}
//Don
function donAfficher(){
    let don_box = document.querySelector(".don-box");
    don_box.style.display="block";
}
function donFermer(){
    let don_box = document.querySelector(".don-box");
    don_box.style.display="none";
}
//Nos domaines et Apropos
window.addEventListener("scroll", function (){
    //Animation a propos
    let presentation_texte = document.querySelectorAll(".presentation");
    presentation_texte.forEach(presentation_box => {
        let position_presentation = presentation_box.getBoundingClientRect().top;
        let hauterFenetre_presentation = window.innerHeight;

        if(position_presentation < hauterFenetre_presentation && position_presentation > 0 ){
            presentation_box.style.transform = "translateX(0px)";
        }
    })
    //Animation projet
    let projet = document.querySelectorAll(".domaines .box");
    projet.forEach(projet_box => {
        let position_liste = projet_box.getBoundingClientRect().top;
        let hauterFenetre_liste = window.innerHeight;

        if(position_liste < hauterFenetre_liste && position_liste > 0 ){
            projet_box.style.transform = "translateY(0px)";
        }
    })
})
//Footer
let anneeAfficher = document.querySelector(".annee");
let dateActuel = new Date();
annee= dateActuel.getFullYear();
anneeAfficher.innerHTML= annee;