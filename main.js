window.onload = function() {

    // If user is not connected via https, correct that
    if (window.location.href.replace(/^http:\/\//i, 'https://'));

    // Append "Beam.House | " to the title currently given on the page
    document.title = "Beam.House | " + document.title;

}
