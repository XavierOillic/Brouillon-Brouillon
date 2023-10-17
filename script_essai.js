var accordeon = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accordeon.length; i++) {
  accordeon[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//----------------------------------------------------------------------------------------------------

const boutonBas = document.querySelector('#change')
boutonBas.addEventListener('click', function(){ //fonction qui permet d'utiliser le bouton

    var myTab = ["Kriss", "Audrey", "Manue", "Severine", "Elodie", "Xavier", "Virand", "Martin", "Davy", "Idriss"]; // tableau
    var rand = Math.floor(Math.random() * myTab.length); // random des noms dans le tableau

    const randomColor = (Math.floor(Math.random() * 0xFFFFFF)).toString(16) // Random de couleur

    boutonBas.innerText = myTab[rand];  // changement aléatoire de nom dans le bouton
    boutonBas.style.backgroundColor = '#' + randomColor  // Changement aléatoire de couleur du bouton
    })

//----------------------------------------------------------------------------------------------------
