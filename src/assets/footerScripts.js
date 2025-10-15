
// Select all footer links
const footerLinks = document.querySelectorAll('.linkFooter');

// Add click event listener to each footer link
footerLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Remove 'active' class from all nav links
    document.querySelectorAll('nav a').forEach(navLink => {
      navLink.classList.remove('active');
    });

    // Add 'active' class to the corresponding nav link
    const targetNavId = this.getAttribute('data-target');
    const targetNavLink = document.getElementById(targetNavId);
    if (targetNavLink) {
      targetNavLink.classList.add('active');
    }

    // Optionally scroll to the section
    const targetSection = document.querySelector(this.getAttribute('href'));
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

