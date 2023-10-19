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
  

  document.addEventListener('DOMContentLoaded', function () {
    const titles = document.querySelectorAll('h1');

    titles.forEach(title => {
        let originalFontSize;

        title.addEventListener('mouseenter', () => {
            originalFontSize = getComputedStyle(title).fontSize;
            title.style.fontSize = `${parseFloat(originalFontSize) + 10}px`;
        });

        title.addEventListener('mouseleave', () => {
            title.style.fontSize = originalFontSize;
        });
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

    // Fonction pour masquer un pop-up
    function hidePopUp(popUpId) {
        const popUp = document.getElementById(popUpId);
        popUp.style.display = 'none';
    }

    // Fonction pour afficher un pop-up
    function showPopUp(popUpId) {
        const popUp = document.getElementById(popUpId);
        popUp.style.display = 'block';
    }

    // Fonction pour passer à une énigme spécifique
    function toggleEnigme(enigmeNumber) {
        for (let i = 1; i <= 3; i++) {
            const enigme = document.getElementById(`enigme${i}`);
            if (i === enigmeNumber) {
                enigme.style.display = 'block';
            } else {
                enigme.style.display = 'none';
            }
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
        const btn3 = document.getElementById('btn3');

        btn1.addEventListener('click', function() {
            toggleEnigme(2);
            showPopUp('first-pop-up');
        });

const btnNextEnigme2 = document.getElementById('question-suivante');

// Ajoutez un gestionnaire d'événements au clic sur le bouton
btnNextEnigme2.addEventListener('click', function() {
    // Appelez la fonction pour passer à la deuxième énigme
    toggleEnigme(2);

    // Masquez le pop-up "first-pop-up"
    hidePopUp('first-pop-up');
});


 btn2.addEventListener('click', function() {
     toggleEnigme(2);
     showPopUp('first-pop-up');
    
});
const btnNextEnigme = document.getElementById('question-suivante');

// Ajoutez un gestionnaire d'événements au clic sur le bouton
btnNextEnigme2.addEventListener('click', function() {
    // Appelez la fonction pour passer à la deuxième énigme
    toggleEnigme(3);

    // Masquez le pop-up "first-pop-up"
    hidePopUp('first-pop-up');
});

        btn3.addEventListener('click', function() {
            showPopUp('second-pop-up');
        });
    });
  let titleEl = document.getElementById('coming-soon');
  let joursEl = document.getElementById('j');
  let heuresEl = document.getElementById('h');
  let minutesEl = document.getElementById('m');
  let secondesEl = document.getElementById('s');


  let now = new Date();
  const dateOffsetInMinutes = now.getTimezoneOffset();

  const unJourEnMs = 1000*60*60*24;
  const uneHeureEnMs = 1000*60*60;
  const uneMinuteEnMs = 1000*60;

  
  const endDate = new Date('2023-10-25');

  const getCountdown = () => {
    let nowDate = Date.now();

    let tempsRestantEnMs = endDate - nowDate + dateOffsetInMinutes * uneMinuteEnMs;
    
    let nbJours = Math.floor(tempsRestantEnMs / unJourEnMs);
    
    let resteTempsSansJoursMs = tempsRestantEnMs - nbJours * unJourEnMs;
    let nbHeures = Math.floor(resteTempsSansJoursMs / uneHeureEnMs);
    
    let resteTempsSansHeuresMs = resteTempsSansJoursMs - nbHeures * uneHeureEnMs;
    let nbMinutes = Math.floor(resteTempsSansHeuresMs / uneMinuteEnMs);

    let resteTempsSansMinutesMs = resteTempsSansHeuresMs - nbMinutes * uneMinuteEnMs;
    let nbSecondes = Math.floor(resteTempsSansMinutesMs / 1000);
    
    joursEl.textContent = nbJours;
    heuresEl.textContent = nbHeures;
    minutesEl.textContent = nbMinutes;
    secondesEl.textContent = nbSecondes;
   
    if(tempsRestantEnMs  <= 0){
    clearInterval(countDownInterval);
        joursEl.textContent = 0;
        heuresEl.textContent   = 0;
       minutesEl.textContent = 0;
      secondesEl.textContent = 0;
      titleEl.textContent = 'COMING-SOON...';
    }
  };
  let countDownInterval = setInterval(getCountdown, 1000);
  
  getCountdown();


    


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
  
  







    
   
    
