const btn = document.getElementsByClassName('btn')[0];
const navbar = document.getElementsByClassName('navbar-links')[0];
const navLinks = navbar.getElementsByTagName('a');

// Toggle navbar visibility
btn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth scroll and close navbar when a link is clicked
for (let link of navLinks) {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        
        const targetId = this.getAttribute('href'); // Get the section id (e.g., #section1)
        const targetSection = document.querySelector(targetId); // Get the target section
        
        // Smooth scroll to the section
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });

        // Close the navbar
        navbar.classList.remove('active');
    });
}
