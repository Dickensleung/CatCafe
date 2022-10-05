
//Show /Hide Menu

const body = document.body;
const btnMenu = document.querySelector('.hamburger');

btnMenu.addEventListener('click', function(e){
    e.preventDefault();
    body.classList.toggle('show');
});

//TopNav Hamburger
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


//Tab Menu
function openMenu(evt, menuName){
  var i, menuContent, menuTablinks;
  
  menuContent = document.getElementsByClassName("menuContent");
    for (i = 0; i < menuContent.length; i++) {
      menuContent[i].style.display = "none";
    }
  
   menuTablinks = document.getElementsByClassName("menuTablinks");
    for (i = 0; i < menuTablinks.length; i++) {
      menuTablinks[i].className = menuTablinks[i].className.replace("active", "");
  
   document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += "active";
  }
}

//Tab Adoption

function openAdoption(evt, catName){
  var i, tabContent, adoptTablinks;

  tabContent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  
  adoptTablinks = document.getElementsByClassName("adoptTablinks"); 
  for (i = 0; i < adoptTablinks.length; i++) {
    adoptTablinks[i].className = adoptTablinks[i].className.replace("active", "");
  }

  document.getElementById(catName).style.display = "block"; 
  evt.currentTarget.className+="active";
}


  