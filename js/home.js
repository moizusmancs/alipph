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

    const savedLanguage = localStorage.getItem("selectedLanguage") || "english";
    $("#language-select").val(savedLanguage); 
    $("#selected-language").text(savedLanguage.charAt(0).toUpperCase() + savedLanguage.slice(1)); // Display selected language in user info
    $("#video-language-label").text(savedLanguage.charAt(0).toUpperCase() + savedLanguage.slice(1)); // Set the video label language
  
    $('#language-select').on('change', function () {
      const selectedLang = $(this).val();
      localStorage.setItem("selectedLanguage", selectedLang); 
      $("#selected-language").text(selectedLang.charAt(0).toUpperCase() + selectedLang.slice(1)); // Update UI
      $("#video-language-label").text(selectedLang.charAt(0).toUpperCase() + selectedLang.slice(1)); // Update video content language
    });
  
    $('#lesson-search').on('input', function () {
      const searchTerm = $(this).val().toLowerCase();
  
      const filteredData = category_data.filter(item =>
        item.title.toLowerCase().includes(searchTerm)
      );
  
      renderLessonCards(filteredData);
    });
  
    function renderLessonCards(data) {
      const lessonsContainer = $("#lessons-container");
      lessonsContainer.empty();
  
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
  
    renderLessonCards(category_data);
  
    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    $('#video-access-card').click(function () {
      const userSubscription = user.premium; 
  
      if (userSubscription == "premium") {
        window.location.href = `../html/video.html?lang=${localStorage.getItem("selectedLanguage")}`;
      } else {
        window.location.href = "premium.html";
      }
    });
  
    $(document).on("click", ".lesson-card", function () {
      const category = $(this).find("span.lesson-title").text().toLowerCase(); 
      const lessonId = $(this).data("id"); 
      const lessonLevel = $(this).data("premium"); 
      const language = localStorage.getItem("selectedLanguage"); 
  
      quizEngine.init(language, category);
  
      localStorage.setItem("selectedCategory", category);
  
      const userSubscription = user.premium;
  
      if (lessonLevel === "premium" && (userSubscription === "basic" || userSubscription == "standard")) {
        window.location.href = "premium.html";
      } else if (lessonLevel === "standard" && userSubscription === "basic") {
        window.location.href = "premium.html";
      } else if (lessonLevel === "basic" || lessonLevel === "standard" || lessonLevel === "premium") {
        window.location.href = `quiz.html?id=${lessonId}&lang=${language}`;
      }
    });
  
  });
  