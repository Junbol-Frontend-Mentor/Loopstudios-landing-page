
// Ensuring the JavaScript file is connected
console.log('JavaScript file is connected');
  document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript file is connected');
  
    let myHamburgerIcon = document.getElementById('hamburgerIcon');
    let myLinksMenu = document.getElementById('MenuLinks');
  
    // Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu bar icon 
    function myFunction() {
      if (myLinksMenu.style.display === "block") {
        myLinksMenu.style.display = "none";
      } else {
        myLinksMenu.style.display = "block";
      }
    }
  
    myHamburgerIcon.addEventListener('click', function () {
      myHamburgerIcon.classList.toggle("change");
      myFunction();
    });
  });
  


