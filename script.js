let bouton = document.getElementById("bouton")

bouton.addEventListener("click", function fomulaire(){
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let age = document.getElementById("age").value;
    let metier= document.getElementById("metier").value;
    console.log(` ${nom} ${prenom} ${age} ${metier}`); 

    let textNom = document.getElementById("nom").value;
    textNom.textContent = nom

    let newP = document.createElement('p');
    let newTexte = document.createTextNode('texte écrit en javascript')
    newP.textContent = 'Paragraphe créé et inséré grâce au Javascript';
})


console.log("bouh")