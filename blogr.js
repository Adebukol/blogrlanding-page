const subMenu= document.querySelectorAll('.dropdown');
const viewLinks= document.getElementById('menuBar');
const navLinks = document.getElementById('navlinks');
const menuClose =document.getElementById('closeMenu')
const links = document.getElementsByClassName('links')



function myFunction() {
  navLinks.style.display="block";
  menuClose.style.display="block";
  viewLinks.style.display="none";
  // if(document.getElementById('navlinks').style.display="block"){
    
  //    navLinks.style.display="none";
  // }
//  
// console.log(viewLinks);
// const navLinks = document.getElementById('navlinks');
// console.log(navLinks);

  // console.log("clicked");
  // 
}
menuClose.onclick= function(){
  navLinks.style.display="none";
viewLinks.style.display="block";

menuClose.style.display="none"; 

}

function dropDown(){
  console.log("clicked")
//   if(subMenu.style.display= "none"){

  
//   subMenu.style.display = "block"
// }
}