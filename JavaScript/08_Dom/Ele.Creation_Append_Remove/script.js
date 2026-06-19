//selecting parent element
const container = document.querySelector(".container");
const fruits = ["Banana", "Mango", "Orange", "WaterMelon","jackfruit","Dragon Fruit","Strawberry","Grapes","Papaya"];
for (let fruit of fruits) {
    //creating child element
    list = document.createElement("li");
    list.innerText = fruit;
    //now appending  child element in parent ------>(parent)targatedelement.appendChild
    container.appendChild(list)//it will append list in  end  parent element 
}
//insertAdjacentElement(position,element to insert)---
// -->by using this we can insert child element into a targeted positions(beforebegin/afterbegin/afterend/beforeend)
heading = document.createElement("h1") ; //<h1></h1>
heading.innerText = "List Of Fruits"; //<h1>List Of Fruits</h1>
container.insertAdjacentElement("afterbegin",heading)

//--->element.remove(),element.removechild()

const remove_list = document.querySelector("li");
const parent_ele = remove_list.parentElement;
parent_ele.removeChild(remove_list); // removes 1st list apple

const remv_list = document.querySelectorAll("li");
remv_list[5].remove();// remove fruit which is present at index 5 -->Dragon Fruit

