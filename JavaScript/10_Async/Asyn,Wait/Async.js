const ul = document.querySelector("ul");
const btn = document.querySelector(".order");

const newli = (msg) => {
    const li = document.createElement("li");
    li.textContent = msg;
    ul.appendChild(li);
}

const ct = (message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            el = false;
            if (!el) {
                newli(message);
                resolve();
            }
            else {
                reject("Courier not found");
            }

        }, 2000)
    });
}

btn.addEventListener("click", async () => {

    newli("📦Package is Booked ✅");
    await ct(" 🚚Courier picked up the package ✅");
    await ct("package reached the  storing facility ✅");
    await ct("package is shipped to destination ✅");
    await ct("package reached  for delivery hub ✅");
    await ct("package is out for delivery ✅");
    await ct(" 🎉🎉🎉package is delivered ✅");


});