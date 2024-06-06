document.addEventListener('DOMContentLoaded', function () {
  console.log('JavaScript file is connected');

  let myHamburgerIcon = document.getElementById('hamburgerIcon');
  let myNavMenu = document.getElementById('navigationMenu');
  let mySlogan = document.getElementById('sloganId');
  let myExtraCards = document.getElementById('extraCardsId');
  let mySeeAll = document.getElementById('seeAllId');

  myHamburgerIcon.addEventListener('click', function () {
    myHamburgerIcon.classList.toggle('change');
    mySlogan.classList.toggle('navTop_container__slogan--visible');
    myNavMenu.classList.toggle('navTop_container__navMenu--visible');
  });

  mySeeAll.addEventListener('click', function () {
    myExtraCards.classList.toggle('creationsContainer__extraCards--visible');
  });
});
