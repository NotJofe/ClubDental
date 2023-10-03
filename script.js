function DarkMode() {
    var element = document.body;
    element.classList.toggle("dark_mode");
    var nav = document.getElementById("navsection");
    nav.classList.toggle("dark_mode_section");
    var footer= document.getElementById("footer");
    footer.classList.toggle("dark_mode_footer");
    var servicios =document.getElementById("beneficios");
    servicios.classList.toggle("dark_mode_section_servicios");
    var card = document.getElementById("cardsede");
    card.classList.toggle("dark_mode_boxshadow_card");
    var card1 = document.getElementById("cardsede1");
    card1.classList.toggle("dark_mode_boxshadow_card");
    var card2 = document.getElementById("cardsede2");
    card2.classList.toggle("dark_mode_boxshadow_card");
}

document.getElementById("buttonSJM").addEventListener("click", function() {
    var div = document.getElementById("sedeSJM");
    var div2 = document.getElementById("sedeSB");
    var div3 = document.getElementById("sedeJM");
    if (div.style.display === "none") {
      div.style.display = "block";
      div2.style.display= "none";
      div3.style.display="none";
    } else {
      div.style.display = "none";
    }
  });
  document.getElementById("buttonSB").addEventListener("click", function() {
    var div = document.getElementById("sedeSB");
    var div2 = document.getElementById("sedeSJM");
    var div3 = document.getElementById("sedeJM");
    if (div.style.display === "none") {
      div.style.display = "block";
      div2.style.display= "none";
      div3.style.display="none";
    } else {
      div.style.display = "none";
    }
  });
  document.getElementById("buttonJM").addEventListener("click", function() {
    var div = document.getElementById("sedeJM");
    var div2 = document.getElementById("sedeSJM");
    var div3 = document.getElementById("sedeSB");
    if (div.style.display === "none") {
      div.style.display = "block";
      div2.style.display= "none";
      div3.style.display="none";
    } else {
      div.style.display = "none";
    }
  });

