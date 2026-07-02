function color() {
    const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let hex = '#'
    for (let i = 0; i < 6; i++) {
        let x = Math.floor(Math.random() * 15);
        hex += arr[x];
    }
    return hex;
}
function deg() {
    let deg = Math.floor(Math.random() * 360);
    return deg;

}
let head = document.querySelector('.head');
let nd = document.querySelector('.rcolor');
let btn = document.querySelector('.cme');

btn.addEventListener("click", (e) => {
    e.stopPropagation();
    let gradient = `linear-gradient(${deg()}deg,${color()},${color()},${color()},${color()})`;
    head.innerHTML = `background: ${gradient};`;
    nd.style.background = gradient;

})

