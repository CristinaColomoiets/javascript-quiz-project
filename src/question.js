// 
class Question {
    
   constructor(textValue, choicesValue, answerValue, difficultyValue){
    this.text = textValue;
    this.choices = choicesValue;
    this.answer = answerValue;
    this.difficulty = difficultyValue;
   }

   shuffleChoices(){
       this.choices.sort(() => .5 - Math.Random());
   }

}
