/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
 function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
 }

//  Close the dropdown menu if the user clicks outside of it
 window.onclick = function(event) {
 if (!event.target.matches('.dropbtn')) {

   var dropdowns = document.getElementsByClassName("dropdown-content");
   var i;
   for (i = 0; i < dropdowns.length; i++) {
     var openDropdown = dropdowns[i];
     if (openDropdown.classList.contains('show')) {
       openDropdown.classList.remove('show');
     }
   }
 }
 }

 /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
 function openNav() {
   document.getElementById("mySidebar").style.width = "500px";
   document.getElementById("menu-responsive").style.marginLeft = "250px";
 }

 /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
 function closeNav() {
   document.getElementById("mySidebar").style.width = "0";
   document.getElementById("menu-responsive").style.marginLeft = "0";
 }



document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;

    if (scroll >= 200) {
      var masthead = document.getElementById('masthead');
      masthead.classList.add('scrolled');
    } else {
      var masthead = document.getElementById('masthead');
      masthead.classList.remove('scrolled');
    }
  });
});
