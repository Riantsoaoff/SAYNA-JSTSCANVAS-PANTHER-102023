window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
  
    // Mettre à jour la hauteur des lignes violettes en fonction du défilement
    const ligneGauche = document.querySelector(".ligne-gauche");
    const ligneDroite = document.querySelector(".ligne-droite");
    ligneGauche.style.height = `${480 + scrollY}px`;
    ligneDroite.style.height = `${300 + scrollY}px`;
  });


document.addEventListener("DOMContentLoaded", function() {
    const traits = document.querySelectorAll('.ligne-gauche, .ligne-droite');
    traits.forEach(trait => {
      trait.classList.add('animate');
    });
  });


window.addEventListener('scroll' , reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if(revealtop < windowheight -revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active'); 
        }
    }
}

const titlesAndSubtitles = document.querySelectorAll('h1, h2');

titlesAndSubtitles.forEach(element => {
    let originalFontSize;

    element.addEventListener('mouseenter', () => {
        originalFontSize = getComputedStyle(element).fontSize;
        element.style.fontSize = `${parseFloat(originalFontSize) + 10}px`;
    });

    element.addEventListener('mouseleave', () => {
        element.style.fontSize = originalFontSize;
    });
});


const logoSouris = document.getElementById('logo-souris');
document.addEventListener('mousemove', (e) => {
  // Mettez à jour la position du logo pour suivre la souris
  logoSouris.style.left = e.pageX + 'px';
  logoSouris.style.top = e.pageY + 'px';

  // Faites apparaître progressivement le logo
  logoSouris.style.opacity = '1';

  // Utilisez une animation CSS pour un effet de fondu plus doux
  logoSouris.style.transition = 'opacity 0.5s ease-in-out';
});

// Assurez-vous que le logo est bien visible dès le départ
logoSouris.style.opacity = '1';