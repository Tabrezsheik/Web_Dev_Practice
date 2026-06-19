const colors=['red','orange','yellow','green','blue','indigo','violet'];
const spans=document.querySelectorAll("span");
for(let i=0 ; i < spans.length;i++)
{
    spans[i].style.color = colors[i];
}

//.style.color only reads inline style
//window.getComputedStyle("") it can reads any style
console.log(spans[0].style.color);
console.log(window.getComputedStyle(spans[5]).color);
//classlist.add--adding class to an element
btn = document.querySelector(".container button");
btn.classList.add("btn");

//these are some classList methods : .remove,.contains,.toggle...etc