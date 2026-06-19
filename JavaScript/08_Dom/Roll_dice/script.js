let random_num1 = Math.floor(Math.random()*6)+1;

let random_img1 = `images/dice${random_num1}.png`;
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",random_img1);

//player2
let random_num2= Math.floor(Math.random()*6)+1;

let random_img2 = `images/dice${random_num2}.png`;
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",random_img2);


if(random_num1 >random_num2){
    document.querySelector(".container h1").innerHTML ="player 1 wins";
}
else if(random_num2 >random_num1){
    document.querySelector(".container h1").innerHTML ="player 2 wins";
}
else{
    document.querySelector(".container h1").innerHTML ="Draw";
}