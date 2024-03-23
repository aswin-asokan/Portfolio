document.addEventListener('DOMContentLoaded', function () {
    // Get all navbar links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Add click event listener to each navbar link
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Check if the navbar collapse element is open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                // Close the navbar collapse
                const toggler = document.querySelector('.navbar-toggler');
                toggler.click();
            }
        });
    });
});
