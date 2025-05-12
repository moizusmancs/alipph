// Render dynamic lesson cards from category_data
const category_data = [
    {
      title: "Greeting",
      imgUrl: "../images/greetings.png",
      premium_badge: "basic"
    },
    {
        title: "Food",
        imgUrl: "../images/food.png",
        premium_badge: "basic"
      },
    {
      title: "Animals",
      imgUrl: "../images/animals.png",
      premium_badge: "standard"
    },
    
    {
        title: "Colors",
        imgUrl: "../images/colors.png",
        premium_badge: "standard"
    },
    {
      title: "Travel",
      imgUrl: "../images/women.png",
      premium_badge: "premium"
    },
    {
      title: "Health",
      imgUrl: "../images/health.png",
      premium_badge: "premium"
    }
  ];
  
  $(document).ready(function () {
  
    const user = JSON.parse(localStorage.getItem("user")) || { name: "guest", premium: "basic" };
    $(".user-info strong").text(`Hello, ${user.name}`);

    // Set the initial language based on localStorage or fallback to English
    const savedLanguage = localStorage.getItem("selectedLanguage") || "english";
    $("#language-select").val(savedLanguage); // Set the dropdown language
    $("#selected-language").text(savedLanguage.charAt(0).toUpperCase() + savedLanguage.slice(1)); // Display selected language in user info
    $("#video-language-label").text(savedLanguage.charAt(0).toUpperCase() + savedLanguage.slice(1)); // Set the video label language
  
    // Handle language change and update localStorage
    $('#language-select').on('change', function () {
      const selectedLang = $(this).val();
      localStorage.setItem("selectedLanguage", selectedLang); // Save to localStorage
      $("#selected-language").text(selectedLang.charAt(0).toUpperCase() + selectedLang.slice(1)); // Update UI
      $("#video-language-label").text(selectedLang.charAt(0).toUpperCase() + selectedLang.slice(1)); // Update video content language
    });
  
    // Attach input event for live search
    $('#lesson-search').on('input', function () {
      const searchTerm = $(this).val().toLowerCase();
  
      const filteredData = category_data.filter(item =>
        item.title.toLowerCase().includes(searchTerm)
      );
  
      renderLessonCards(filteredData);
    });
  
    // Dynamically generate lesson cards
    function renderLessonCards(data) {
      const lessonsContainer = $("#lessons-container");
      lessonsContainer.empty(); // Clear existing cards
  
      data.forEach((category, index) => {
        const lessonCard = `
          <div class="lesson-card" data-id="${index + 1}" data-premium="${category.premium_badge}">
            <img src="${category.imgUrl}" alt="${category.title} Image">
            <span class="lesson-title">${category.title}</span>
            <div class="premium-badge">${capitalizeFirstLetter(category.premium_badge)}</div>
          </div>
        `;
        lessonsContainer.append(lessonCard);
      });
    }
  
    // Call initially to render all
    renderLessonCards(category_data);
  
    // Function to capitalize the first letter of a string
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    // Click on a lesson card to go to the video page (simulate this for demo)
    $('#video-access-card').click(function () {
      const userSubscription = user.premium; // user.premium will be "basic", "standard", or "premium"
  
      if (userSubscription == "premium") {
        window.location.href = `../html/video.html?lang=${localStorage.getItem("selectedLanguage")}`;
      } else {
        window.location.href = "premium.html";
      }
    });
  
    // Handle lesson click
    $(document).on("click", ".lesson-card", function () {
      const category = $(this).find("span.lesson-title").text().toLowerCase(); // Get category title
      const lessonId = $(this).data("id"); // Get lesson ID
      const lessonLevel = $(this).data("premium"); // Get lesson level (basic, standard, premium)
      const language = localStorage.getItem("selectedLanguage"); // Get the selected language from localStorage
  
      // Initialize quiz engine with the selected language and category
      quizEngine.init(language, category);
  
      // Save selected category in localStorage
      localStorage.setItem("selectedCategory", category);
  
      // Get user's subscription level
      const userSubscription = user.premium;
  
      // Check access based on the lesson's premium level and the user's subscription
      if (lessonLevel === "premium" && (userSubscription === "basic" || userSubscription == "standard")) {
        window.location.href = "premium.html";
      } else if (lessonLevel === "standard" && userSubscription === "basic") {
        window.location.href = "premium.html";
      } else if (lessonLevel === "basic" || lessonLevel === "standard" || lessonLevel === "premium") {
        window.location.href = `quiz.html?id=${lessonId}&lang=${language}`;
      }
    });
  
  });
  