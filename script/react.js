function growLeftEye(){
    document.getElementById("imgOeilGauche").style.width = "20%";
    document.getElementById("imgOeilGauche").style.marginLeft = "25%";
    document.getElementById("imgOeilGauche").style.marginTop = "0%";
    document.getElementById("imgOeilDroit").style.marginTop = "0%";
}
function normalLeftEye(){
    document.getElementById("imgOeilGauche").style.width = "15%";
    document.getElementById("imgOeilGauche").style.marginLeft = "30%";
    document.getElementById("imgOeilGauche").style.marginTop = "2%";
    document.getElementById("imgOeilDroit").style.marginTop = "2%";
}
function reactTest(event){
    if(event.button == 0){
        growLeftEye();
    }
    if(event.button == 2){
        normalLeftEye();
    }
}