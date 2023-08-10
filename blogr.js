const subMenu= document.querySelector('.product');
const subMenu1= document.querySelector('.company');
console.log(subMenu1);
const subMenu2= document.querySelector('.connect');
console.log(subMenu);
const viewLinks= document.getElementById('menuBar');
const navLinks = document.getElementById('navlinks');
const menuClose =document.getElementById('closeMenu')
const links = document.getElementsByClassName('links')



function myFunction() {
  
  navLinks.style.display="block";
  menuClose.style.display="block";
  viewLinks.style.display="none";
}

menuClose.onclick= function(){
  navLinks.style.display="none";
viewLinks.style.display="block";
subMenu.style.display = "block"
menuClose.style.display="none"; 

}

function product(){
  subMenu.style.display = "block";
  subMenu1.style.display = "none";
  subMenu2.style.display = "none";
  
  }
  function company(){
    subMenu1.style.display = "block";
    subMenu.style.display = "none";
  subMenu2.style.display = "none";
    
    }
    function connect(){
      subMenu2.style.display = "block";
      subMenu1.style.display = "none";
  subMenu.style.display = "none";
      
      }
