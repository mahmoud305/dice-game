function getRandomNumber(){
    return Math.floor( Math.random() * 6  +1); // (0 ~ 0.9) * 6;
}
var random1 = getRandomNumber();
var random2 = getRandomNumber();

document.getElementById("img1").setAttribute("src",`images/dice`+random1+".png");
document.getElementById("img2").setAttribute("src",`images/dice`+random2+".png");

if(random1 > random2){
    document.getElementsByTagName("h1")[0].textContent="Palyer 1 Wins ";
}else if(random1 < random2)
    document.getElementsByTagName("h1")[0].textContent="Palyer 2 Wins ";
else 
document.getElementsByTagName("h1")[0].textContent="DRAW ";
    