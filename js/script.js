// navbar toggling
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
});

// changing search icon image on window resize
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winSize = window.matchMedia("(min-width: 1200px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "images/search-icon.png";
    } else {
        document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
    }
}
changeSearchIcon();

// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);

    // Get the tab links and tab content sections
const tabLinks = document.querySelectorAll('.tab-links a');
const tabContent = document.querySelectorAll('.tab-content .tab');

// Add click event listener to each tab link
tabLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // Remove 'active' class from all tab links and tab content
    tabLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    tabContent.forEach(function(tab) {
      tab.style.display = 'none';
    });

    // Add 'active' class to clicked tab link
    this.classList.add('active');

    // Show the corresponding tab content
    const targetTab = document.querySelector(this.getAttribute('href'));
    targetTab.style.display = 'block';
  });
});

});
