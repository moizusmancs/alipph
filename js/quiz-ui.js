$(document).on("pagecreate", "#quiz-page", function() {
    const language = localStorage.getItem('selectedLanguage') || 'english';
    const category = localStorage.getItem('selectedCategory') || 'greetings';
    quizEngine.init(language, category);
  
    renderQuestion();    
    
    $(document).on("click", ".next-btn ", goToNextQuestion);
    $(document).on("click", ".prev-btn", goToPreviousQuestion);
  });

  $(document).on("pagecontainershow", function(event, ui) {
    if (ui.toPage.attr("id") === "quiz-page") {
      initializeQuizPage();
    }
  });
  
  function initializeQuizPage() {
    const language = localStorage.getItem('selectedLanguage') || 'english';
    const category = localStorage.getItem('selectedCategory') || 'greetings';
    quizEngine.init(language, category);
    renderQuestion();
    
    $("#quiz-header h1").text(category.charAt(0).toUpperCase() + category.slice(1) + " Quiz");
    
  }
  
  function renderQuestion() {
    const question = quizEngine.getCurrentQuestion();
    const questionHtml = `
      <div class="question-container">
        <h2>${question.question}</h2>
        <form class="answer-form">
          ${question.answers.map((a, i) => `
            <label class="answer-choice">
              <input type="radio" name="answer" value="${i}">
              ${a.text}
            </label>
          `).join('')}
        </form>
        <div class="nav-buttons">
          ${quizEngine.currentQuestion > 0 ? 
            '<a href="#" class="ui-btn prev-btn btn-secondary ">Previous</a>' : ''}
          <a href="#" class="ui-btn next-btn btn-secondary ">
            ${quizEngine.currentQuestion < quizEngine.getTotalQuestions() - 1 ? 'Next' : 'Submit'}
          </a>
        </div>
      </div>
    `;
    
    $("#quiz-container").html(questionHtml);
  }

  function goToPreviousQuestion(e) {
    e.preventDefault();
    if (quizEngine.currentQuestion > 0) {
      quizEngine.currentQuestion--;
      renderQuestion();
    }
  }
  
  function goToNextQuestion() {
    const selected = $(".answer-choice input:checked");
    if (selected.length) {
      quizEngine.saveAnswer(parseInt(selected.val()));
      
      if (quizEngine.currentQuestion < quizEngine.getTotalQuestions() - 1) {
        quizEngine.currentQuestion++;
        renderQuestion();
      } else {
        showResults();

        
      }
    }
  }
  
  function showResults() {
    const score = quizEngine.calculateScore();
    const total = quizEngine.getTotalQuestions();
    
    $("#quiz-container").html(`
      <div class="results-screen">
        <h2>Quiz Complete!</h2>
        <p>Your score: ${score}/${total}</p>
        <a href="../html/home.html" class="ui-btn btn-secondary" data-ajax="false">Return to Lessons</a>
      </div>
    `);
  }