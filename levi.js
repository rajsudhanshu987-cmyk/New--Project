document
.getElementById("saveProjectBtn")
.addEventListener("click", function () {

    const name = document.getElementById("projectName").value.trim();
    const team = document.getElementById("projectTeam").value.trim();
    const progress = document.getElementById("projectProgress").value;
    const due = document.getElementById("projectDue").value;
    const desc = document.getElementById("projectDescription").value.trim();

    if (!name || !team || progress === "" || !due) {
        alert("Please fill all required fields!");
        return;
    }

    const projectHTML = `
    <div class="progress-bar ${progressColor}" style="width: ${progress}%"></div>
<div class="col-md-6 col-lg-4">
  <div class="card border-0 shadow-sm h-100">
    <div class="card-body">
      <h6 class="fw-bold">${name}</h6>
      <p class="text-muted mb-2">
        Team: <strong>${team}</strong>
      </p>
      <div class="progress mb-2" style="height: 10px">
        <div class="progress-bar bg-primary" style="width: ${progress}%"></div>
      </div>
      <small class="text-muted">${progress}% complete</small>
      <p class="mt-2 small text-muted">${desc}</p>
    </div>
    <div class="card-footer bg-white border-0 d-flex justify-content-between">
      <span><i class="fa-regular fa-calendar"></i> Due: ${due}</span>
      <a href="#" class="btn btn-sm btn-outline-primary">View</a>
    </div>
  </div>
</div>
`;

    const container = document.querySelector("#projects .row.g-4");
    if (container) {
        container.insertAdjacentHTML("beforeend", projectHTML);
    }

    const modal = bootstrap.Modal.getInstance(
        document.getElementById("addProjectModal")
    );

    if (modal) modal.hide();

    document.getElementById("addProjectsForm").reset();
});


let progressColor = "bg-danger";
if (progress >= 70) progressColor = "bg-success";
else if (progress >= 40) progressColor = "bg-warning";

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("themeToggle");

  if (!toggleBtn) {
    console.error("Theme toggle button not found");
    return;
  }

  // Apply saved theme on load
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }

  // Toggle logic
  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    if (isDark) {
      localStorage.setItem("theme", "dark");
      toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });
});