document.addEventListener("DOMContentLoaded", function() {
    // Function to remove .html from URL
    function removeHtmlExtension() {
        if (window.location.pathname.endsWith('.html')) {
            var newUrl = window.location.pathname.replace('.html', '');
            history.replaceState(null, '', newUrl);
        }
    }
    
    removeHtmlExtension();
});