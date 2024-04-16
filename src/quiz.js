class Quiz {

    constructor(questionsValue, timeLimitValue, timeRemainingValue){
        this.questions = questionsValue;
        this.timeLimit = timeLimitValue;
        this.timeRemaining = timeRemainingValue;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }


    // should return the item from the 'questions' array at the position of 'currentQuestionIndex'
    //  debe devolver el elemento del array "questions" en la misma posición de valor  "currentQuestionIndex".
    getQuestion(){
       return this.questions[this.currentQuestionIndex];  
    }

    moveToNextQuestion(){
        return this.currentQuestionIndex++
    }

    shuffleQuestions(){
        this.questions.forEach((question, index) => {
            const randomIndex = Math.floor(Math.random() * (index + 1));
            [this.questions[index], this.questions[randomIndex]] = [this.questions[randomIndex], this.questions[index]];
        });



       // this.questions.sort(()=> .5 - Math.random())
    }




    // 5. checkAnswer(answer)

    const currentQuestion = this.questions[this.currentQuestionIndex]

    if (answer === currentQuestion.answer ){
        this.correctAnswers++
    }

    // 6. hasEnded(){

    }
    
}