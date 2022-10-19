
let menulists = document.querySelector(".menulist");
let listitems = document.querySelectorAll('.listitem');
let hamburger = document.querySelector('.hamburger');
let buttoms = document.querySelector('.buttoms');
let exit = document.querySelector('#exit');



function toggleMenu() {
    if (menulists.classList.contains("showMenu")) {
      menulists.classList.remove("showMenu");
      exit.style.display = "none";
      buttoms.style.display = "block";
    } else {
      menulists.classList.add("showMenu");
      exit.style.display = "block";
      buttoms.style.display = "none";
    }
  }
  
  hamburger.addEventListener("click", toggleMenu);

 

 
// buttoms.addEventListener('click',function() {
//     // if(menu.style.display='block')
//     // menu.style.display= 'block';
//     // buttoms.style.display= 'none';
//     // buttoms.style.display= 'display';
//     // exit.style.display='block'
//     if (menu.classList.contains("showMenu")) {
//         menu.classList.remove("showMenu");
//         exit.style.display = "none";
//         buttoms.style.display = "block";
//       } else {
//         menu.classList.add("showMenu");
//         exit.style.display = "block";
//         buttoms.style.display = "none";
//       }
//     }  


// );




