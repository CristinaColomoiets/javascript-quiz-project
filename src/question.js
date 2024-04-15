// 
class Question {
   constructor(textValue, choicesValue, answerValue, difficultyValue){
    this.text = textValue;
    this.choices = choicesValue;
    this.answer = answerValue;
    this.difficulty = difficultyValue;
   }

   shuffleChoices(){
    this.choices.forEach((choice, index) => {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [this.choices[index], this.choices[randomIndex]] = [this.choices[randomIndex], this.choices[index]];
    });


   }
}

const one_question = new Question("firstArgument", ['choice1', 'choice2', 'choice3', 'choice4'], true, '5');
one_question.shuffleChoices();