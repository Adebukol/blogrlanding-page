const subMenu= document.querySelector('.product');
const subMenu1= document.querySelector('.company');
console.log(subMenu1);
const subMenu2= document.querySelector('.connect');
console.log(subMenu);
const viewLinks= document.getElementById('menuBar');
const navLinks = document.getElementById('navlinks');
const menuClose =document.getElementById('closeMenu')
const links = document.getElementsByClassName('links');
const arrowBtn = document.querySelector('.lg-arrow');
const darkBtn = document.querySelector('.mobile-arrow');


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
  if(subMenu.style.display === "none"){
    subMenu.style.display ="block";
    subMenu1.style.display = "none";
  subMenu2.style.display = "none";
  arrowBtn.classList.toggle('rotate');
  darkBtn.classList.toggle('rotate');
  
  }
  else{
    subMenu.style.display ="none";
  }
  }
  function company(){
    if(subMenu1.style.display === "none"){
      subMenu1.style.display ="block";
      subMenu.style.display = "none";
    subMenu2.style.display = "none";
    arrowBtn.classList.toggle('rotate');
    darkBtn.classList.toggle('rotate');
    
    }
    else{
      subMenu1.style.display ="none";
    }
    }
    function connect(){
      if(subMenu2.style.display === "none"){
        subMenu2.style.display ="block";
        subMenu.style.display = "none";
      subMenu1.style.display = "none";
      arrowBtn.classList.toggle('rotate');
      darkBtn.classList.toggle('rotate');
      
      }
      else{
        subMenu2.style.display ="none";
      }
      
      }
    