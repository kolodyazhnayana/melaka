document.getElementById("menu_burger").onclick = function() {
    open()
};
function open() {
    document.getElementById("menu_mobile").classList.toggle("menu_active");
    document.getElementById("content").classList.toggle("content_active")
    document.getElementById("menu_burger").classList.toggle("menu_burger_active");
};

