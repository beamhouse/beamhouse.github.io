window.onload = function() {

    // Enforce SSL (everywhere but jim.beam.house)
    if (window.location.href.split(".")[0].split("://")[1].toLowercase() != "jim") {
        window.location.href.replace(/^http:\/\//i, 'https://');   
    }

    // Append "Beam.House: " to the title currently given on the page
    document.title = "Beam.House: " + document.title;

}
