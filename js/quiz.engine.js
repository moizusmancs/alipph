class QuizEngine {
    constructor() {
        this.currentLanguage = 'english';
        this.currentCategory = 'greetings';
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
    }

    init(language, category) {
        this.currentLanguage = language;
        this.currentCategory = category;
        this.resetQuiz();
    }

    resetQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.userAnswers = [];
    }

    getCurrentQuestion() {
        return QUIZ_DATA[this.currentLanguage][this.currentCategory][this.currentQuestion];
    }

    getTotalQuestions() {
        return QUIZ_DATA[this.currentLanguage][this.currentCategory].length;
    }

    saveAnswer(answerIndex) {
        this.userAnswers[this.currentQuestion] = answerIndex;
    }

    calculateScore() {
        this.score = 0;
        const questions = QUIZ_DATA[this.currentLanguage][this.currentCategory];
        
        questions.forEach((q, index) => {
        if (this.userAnswers[index] !== undefined && 
            q.answers[this.userAnswers[index]].correct) {
            this.score++;            
        }
        });

        let totalQuestions = localStorage.getItem('totalQuestions') || "0";
        totalQuestions = Number(totalQuestions) + questions.length;
        localStorage.setItem('totalQuestions',totalQuestions)
        

        return this.score;

    }
}

const quizEngine = new QuizEngine();