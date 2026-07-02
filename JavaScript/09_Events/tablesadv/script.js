const roll = document.getElementsByClassName("roll-input");
const name = document.getElementsByClassName("name-input");
const branch = document.getElementsByClassName("branch-input");
const button = document.getElementsByClassName("add")[0];
const tableBody = document.getElementById("table-body");
const tr = document.getElementById("tr");


button.addEventListener("click", function (e) {
    e.preventDefault();
    const rollValue = roll[0].value;
    const nameValue = name[0].value;
    const branchValue = branch[0].value;
    if (rollValue.trim() === "" || nameValue.trim() === "" || branchValue.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }
    else {
        const newRow = `<tr>
                        <td>${rollValue}</td>
                        <td>${nameValue}</td>
                        <td>${branchValue}</td>
                        <td><button class="delete-button">Delete</button></td>
                    </tr>`;
        tableBody.innerHTML += newRow;
        roll[0].value = "";
        name[0].value = "";
        branch[0].value = "";
    }
});
tableBody.addEventListener("click", function (e) {
    e.stopPropagation();
    if (e.target.tagName === "BUTTON") {
        e.target.closest("tr").remove();
    }
});