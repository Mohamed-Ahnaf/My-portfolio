const btn = document.getElementsByClassName('btn')[0];
const navbar = document.getElementsByClassName('navbar-links')[0];
const navLinks = navbar.getElementsByTagName('a');

// Toggle navbar visibility
btn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


for (let link of navLinks) {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 
        
        const targetId = this.getAttribute('href'); 
        const targetSection = document.querySelector(targetId); 
        
        
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

      
        navbar.classList.remove('active');
    });
}
