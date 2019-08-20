let questionNumber = 0;
let score = 0;


function startQuiz (){
  $('.start-quiz').on('click', '.startButton', function(event){
    $('.start-quiz').remove();
    $('.questionAndChoices').css('display', 'block');
  });
};



$(startQuiz)