document.getElementById("menu-btn").addEventListener("click", function() {
    let sidebar = document.getElementById("sidebar");
    let button = document.getElementById("menu-btn");
    sidebar.classList.toggle("active");
    button.classList.toggle("active");
});

