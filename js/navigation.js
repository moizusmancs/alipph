$(document).on("pagecreate", "#home", function() {
// Wait for widgets to initialize
$(document).one("pagecontainershow", function() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'english';
    $(".language-dropdown")
        .val(savedLanguage)
        
});

    // Set up language dropdown
    $(".language-dropdown").on("change", function() {
    const language = $(this).val();
    localStorage.setItem('selectedLanguage', language);
    });

    // Handle lesson clicks
    $(".lesson-card").on("click", function() {
        console.log("clicked");
        
    const category = $(this).find('span').text().toLowerCase();
    const language = $(".language-dropdown").val();
    
    // Store in session
    quizEngine.init(language, category);
    localStorage.setItem('selectedCategory', category);
    
    // Navigate to quiz
    $.mobile.pageContainer.pagecontainer("change", "#quiz-page", {
        transition: "slide"
    });
    });
});