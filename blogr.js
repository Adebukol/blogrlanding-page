const dropDown= document.querySelectorAll('.dropdown');
const viewLinks= document.getElementById('menuBar');
console.log(viewLinks);
const navLinks = document.getElementById('navlinks');
console.log(navLinks);
const menuClose =document.getElementById('closeMenu')



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
viewLinks.style.display="block"; 
menuClose.style.display="none"; 
//navLinks.style.display="none";
}
document.querySelector('.links').onclick = function(){
  dropDown.style.display = "block"
}