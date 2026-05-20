let input = prompt("what whould you like to do?");
const todos = [];
while (input !== "quit" && input !== "q") {
    if (input === "list") {
        console.log("**********");
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);

        }
        console.log("**********");
    } else if (input === "new") {
        const newTodo = prompt("enter new todo");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (input === "delete") {
        const index = parseInt(prompt("enter index of todo to delete"));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`${deleted[0]} removed from the list`);
        } else {
            console.log("Invalid index");

        }
    }
    input = prompt("what would you like to do?");
}
console.log("OK, YOU QUIT THE APP");