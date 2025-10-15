function topFunction() {

      // Remove 'active' class from all nav links
    document.querySelectorAll('nav a').forEach(navLink => {
      navLink.classList.remove('active');
    });

    // Scroll to the top of the page


    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.body.scrollTop = 0; // For Safari
  }



export default topFunction;


