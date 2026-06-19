//slection by using className
h2=document.getElementsByClassName("heading");
console.log(h2)
console.log(h2[0]);
//slection by using ID
t2=document.getElementById("t2");
console.log(t2);
//slection by using Tagname
para = document.getElementsByTagName("p");
console.log(para);
console.log(para[0]);

//queryslector selects only first matching element
image = document.querySelector("img");
console.log(image);

//queryslectorAll selects all matching element
link = document.querySelectorAll("a");
console.log(link);
for(let i of link){
    console.log(i.href);
    console.log(i.getAttribute("href"));
}
link3 = document.querySelector('[href ="#legacy"]');
console.log(link3);
link3.setAttribute('href',"#legacys");
console.log(link3);
//innerHtml,innerTexth1
hi=document.querySelector(".cr");
hi.innerText = "hello ";
hi.innerHTML += "<sup> @ </sup> ";
hi.innerHTML  += "<b>Tesla!</b>";


