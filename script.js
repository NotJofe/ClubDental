function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark_mode");
    var nav = document.getElementById("navsection");
    nav.classList.toggle("dark_mode_section");
    var footer= document.getElementById("footer");
    footer.classList.toggle("dark_mode_footer");
    var offcanvasSJM = document.getElementById("offcanvasSJM");
    offcanvasSJM.classList.toggle("dark_mode_offcanvas");
    var offcanvasSanBorja = document.getElementById("offcanvasSanBorja");
    offcanvasSanBorja.classList.toggle("dark_mode_offcanvas");
    var offcanvasJesusMaria = document.getElementById("offcanvasJesusMaria");
    offcanvasJesusMaria.classList.toggle("dark_mode_offcanvas");
    var servicios =document.getElementById("servicios");
    servicios.classList.toggle("dark_mode_section_servicios");
    var card = document.getElementById("cardsede");
    card.classList.toggle("dark_mode_boxshadow_card");
    var card1 = document.getElementById("cardsede1");
    card1.classList.toggle("dark_mode_boxshadow_card");
    var card2 = document.getElementById("cardsede2");
    card2.classList.toggle("dark_mode_boxshadow_card");
}