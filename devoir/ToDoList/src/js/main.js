function nouvelleTache() {

  // creation d'une ligne de liste et recuperation 
  // du saisie de l'utilisateur
  let li = document.createElement("li");
  let valeurTacheSasie = document.getElementById("tacheSaisie").value;
  let texteSasie = document.createTextNode(valeurTacheSasie);
  texteSasie.className = "valeurSasie";

  // creation d'un inputer qui est par defaut desactiver 
  // et qui contient la valeur saisit par l'utilisateur 
  let modifierValeur = document.createElement("input");
  modifierValeur.value = valeurTacheSasie;
  modifierValeur.classList.add("valeurModifier");
  modifierValeur.disabled = true;
  li.appendChild(modifierValeur);

  // verifier si l'utilisateur ajouter une tache 
  if (valeurTacheSasie === '') {
    alert("Vous devrez ecrire une Tâche !!");
  } else {
    if (li) {
      document.getElementById("listeTache").appendChild(li);
      const listeTache = document.getElementById('listeTache');
      let liListe = listeTache.getElementsByTagName('li')[0];
      // let txtnde = liListe.value;
      // console.log(txtnde);;
      localStorage.setItem('tacher', JSON.stringify(liListe))
    }
  }
  document.getElementById("tacheSaisie").value = "";

  //bouton modifier
  let btnModifier = document.createElement("button");
  btnModifier.innerHTML = "Modifier";
  btnModifier.className = "btnModifier";
  li.appendChild(btnModifier);

  // bouton supprimer
  let span = document.createElement("SPAN");
  let btnSupprimer = document.createTextNode("\u00D7");
  span.className = "supprimerTache";
  span.appendChild(btnSupprimer);
  li.appendChild(span);

  //modifier la tache modifier

  let modifier = document.getElementsByClassName("btnModifier");

  for (let j = 0; j < modifier.length; j++) {
    modifier[j].onclick = function () {
      let listeSelectionner = this.parentElement;
      let valeurAModifier = listeSelectionner.firstElementChild;
      if (valeurAModifier.disabled == true) {
        valeurAModifier.disabled = false;
      } else {
        valeurAModifier.disabled = true;
      }
    }
  }

  // supprimer une tache
  let supprimer = document.getElementsByClassName("supprimerTache");
  for (let i = 0; i < supprimer.length; i++) {
    supprimer[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }


}


// 
