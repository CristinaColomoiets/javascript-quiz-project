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
    }


    // debe incrementar 'correctAnswers' en 1 cuando se pasa una respuesta correcta como argumento
    //    debe comprobar si la respuesta es correcta comparándola con la propiedad 'answer' de la pregunta actual
    checkAnswer(answer){
        if(this.questions[this.currentQuestionIndex] === answer){
            this.correctAnswers++
        }
    }

}
    
        
   

    // 5. checkAnswer(answer)

    // 6. hasEnded()
