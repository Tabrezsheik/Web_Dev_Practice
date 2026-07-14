const ul = document.querySelector('ul');
const btn = document.querySelector('.order');
function Order(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const error = false;
            if(!error){
                resolve("Order placed successfully!");
            } 
            else {
                reject("Failed to place order.");
            }
        }, 1000);
    });
}
function newli(message){
    const li = document.createElement('li');
    li.textContent = message;
    ul.appendChild(li);
}

btn.addEventListener('click',()=>{
Order()
    .then((message)=>{
      newli(message);
        return Order();
    })
    .then(()=>{
        newli(" 🪄Order is being prepared!");
        return Order();
    })
    .then(()=>{
        newli("🍽️Order is ready!");
        return Order();
    })
    .then(()=>{
        newli(" 🚚Order is out for delivery!");
    })
    .catch((error)=>{
        newli(error);
    });
});
