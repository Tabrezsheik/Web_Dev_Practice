const ul = document.querySelector('ul');
const btn = document.querySelector('button');
function addItem(msg) {
    const li = document.createElement('li');
    li.textContent = msg;
    ul.appendChild(li);
}
btn.addEventListener('click', () => {
    addItem('Turning On the Coffee Machine');
    setTimeout(() => {
        addItem('Grinding Coffee Beans');
        setTimeout(() => {
            addItem('Boiling Water');
            setTimeout(() => {
                addItem('Pouring Water into the Coffee Machine');
                setTimeout(() => {
                    addItem('Brewing Coffee');
                    setTimeout(() => {
                        addItem('Pouring Coffee into the Cup');
                        setTimeout(() => {
                            addItem('Adding Sugar and Milk');
                            setTimeout(() => {
                                addItem('Coffee is Ready! Enjoy!');
                                setTimeout(() => {
                                    ul.textContent = "THANKS FOR ORDERING"
                                    setTimeout(() => {
                                        ul.remove();
                                    }, 2000)
                                }, 4000);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);



}


);