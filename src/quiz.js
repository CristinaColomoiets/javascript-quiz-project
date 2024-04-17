class Quiz {

    constructor(questionsValue, timeLimitValue, timeRemainingValue){
        this.questions = questionsValue;
        this.timeLimit = timeLimitValue;
        this.timeRemaining = timeRemainingValue;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion(){
        const currentQuestion = this.questions[this.currentQuestionIndex]
        return currentQuestion 
    }

    moveToNextQuestion(){
        return this.currentQuestionIndex++
    }

    shuffleQuestions(){
        this.questions.sort(() => .5 - Math.random());
    }

    checkAnswer(answer){
        const currentQuestion = this.getQuestion()
        const currentAnswer = currentQuestion.answer


        if (answer === currentAnswer ){
            this.correctAnswers++
        }
    }

    hasEnded(){
        if (this.currentQuestionIndex >= this.questions.length) {
            return true
        } else {
            return false
        }
    }
    
}