$(document).on("pagecreate", "#home", function() {

    $(document).one("pagecontainershow", function() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'english';
    $(".language-dropdown")
        .val(savedLanguage)
        
});

    $(".language-dropdown").on("change", function() {
    const language = $(this).val();
    localStorage.setItem('selectedLanguage', language);
    });

    $(".lesson-card").on("click", function() {
        console.log("clicked");
        
    const category = $(this).find('span').text().toLowerCase();
    const language = $(".language-dropdown").val();
    
    quizEngine.init(language, category);
    localStorage.setItem('selectedCategory', category);
    
    $.mobile.pageContainer.pagecontainer("change", "#quiz-page", {
        transition: "slide"
    });
    });
});