//animation de l'intro
//on cache la scrollbar
document.getElementsByTagName("body")[0].style.overflowY = "hidden";
//on appelle l'animation de la lune qui rétrécit 
document.getElementById('imgLune').style.animation = "luneStart 1s";
//on appelle l'animation qui met Luna en haut
setTimeout(function () { document.getElementById('lunaFace').style.animation = "faceGoLeftStart 1s"; }, 1000);
//on fixe la taille de Luna
setTimeout(function () { document.getElementById('lunaFace').style.width = "20%" }, 2000);
//on fixe la marge gauche de Luna
setTimeout(function () { document.getElementById('lunaFace').style.marginLeft = "20%" }, 2000);
//on appelle l'animation qui fait apparaitre le titre
setTimeout(function () { document.getElementById('titreLuna').style.animation = "titreAppearStart 0.5s"; }, 2000);
//on fixe l'opacité du titre
setTimeout(function () { document.getElementById('titreLuna').style.opacity = "100%"; }, 2500);
setTimeout(function () { document.getElementsByTagName("body")[0].style.overflowY = ""; }, 2500);


setTimeout(function () { document.getElementById('footer').style.animation = "footerAppear 0.5s"; }, 2100);
setTimeout(function () { document.getElementById('footer').style.opacity = "100%"; }, 2600);
setTimeout(function () {
    var all = document.getElementsByClassName('buttonAction');
    for (var i = 0; i < all.length; i++) {
        all[i].style.animation = 'buttonAppear 0.5s';
    }
}, 2100);
setTimeout(function () {
    var all = document.getElementsByClassName('buttonAction');
    for (var i = 0; i < all.length; i++) {
        all[i].style.marginTop = "4%";
    }
}, 2100);
setTimeout(function () {
    var all = document.getElementsByClassName('buttonAction');
    for (var i = 0; i < all.length; i++) {
        all[i].style.opacity = "100%";
    }
}, 2100);

//on montre la scrollbar
setTimeout(function () { document.getElementsByTagName("body")[0].style.overflowY = ""; }, 2600);  
