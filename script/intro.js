document.getElementsByTagName("body")[0].style.overflowY = "hidden"; 
document.getElementById('imgLune').style.animation = "luneStart 1s";
setTimeout(function(){document.getElementById('lunaFace').style.animation = "faceGoLeftStart 1s";}, 1000);  
setTimeout(function(){document.getElementById('lunaFace').style.width = "20%"}, 2000);
setTimeout(function(){document.getElementById('lunaFace').style.marginLeft = "20%"}, 2000);
setTimeout(function(){document.getElementById('titreLuna').style.animation = "titreAppearStart 0.5s";}, 2000); 
setTimeout(function(){document.getElementById('titreLuna').style.opacity = "100%";}, 2500); 
setTimeout(function(){document.getElementsByTagName("body")[0].style.overflowY = "";}, 2500);  