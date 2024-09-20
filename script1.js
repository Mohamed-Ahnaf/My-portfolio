const btn = document.getElementsByClassName('btn')[0];
const navbar = document.getElementsByClassName('navbar-links')[0];
const navLinks = navbar.getElementsByTagName('a'); // Assuming your links are <a> elements

btn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close navbar when a link is clicked
for (let link of navLinks) {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
}
