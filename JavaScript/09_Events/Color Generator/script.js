
const btn = document.querySelector("button");
const heading =document.querySelector("p");
const div = document.querySelector(".card")

const color_gen = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
};

btn.addEventListener("click", () => {
    div.style.backgroundColor = color_gen();
    heading.innerText = color_gen();


});