document.getElementById("menu_burger").onclick = function() {
    open()
};
function open() {
    document.getElementById("menu_mobile").classList.toggle("menu_active");
    document.getElementById("content").classList.toggle("content_active");
    document.getElementById("menu_burger").classList.toggle("menu_burger_active");
};

document.getElementById("menu__list").onclick = function() {
    close()
};
function close() {
    document.getElementById("menu_mobile").classList.remove("menu_active");
    document.getElementById("content").classList.remove("content_active");
    document.getElementById("menu_burger").classList.remove("menu_burger_active");
};




