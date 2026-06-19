
const container = document.querySelector("#container");
for (let i=1; i <= 152; i++) {
    const new_img = document.createElement("img")
    const div = document.createElement("div")
    const h3 =document.createElement("h3")
    h3.innerHTML =`<b>#${i}<b/>`
    new_img.src =  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    div.append(h3,new_img)
    container.appendChild(div)
    
}