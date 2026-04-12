document
.getElementById("saveProjectBtn")

.addEventListener("click" , function ()  {
    const name = document.getElementById("projectName") .value.trim();
    const team = document.getElementById("projectTeam") .value.trim();
    const progress = document.getElementById("projectProgress") .value;
    const due = document.getElementById("projectDue") .value;
    const desc = document.getElementById("projectDescription") .value.trim();

    if (!name || !team || !progress || !due) {
        alert("Please fill all required fields!");
        return;
    }
}
)


