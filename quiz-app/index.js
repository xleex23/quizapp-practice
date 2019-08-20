
$(function() {
  let numOfQuestions;
  let questionNumber = 0;
  let score = 0;
  let answer;

  $('.start-quiz').on('click', '.startButton', function(event){
    $('.start-quiz').remove();
    $('#submitAnswer').css("display", "inline");
    numOfQuestions = store.length;
    displayQuestions();
  });

  $('button#submitAnswer').click(function(event) {
    event.preventDefault();  
    val = $('input[type=radio]:checked', '.choices').val(); 
    console.log(val);

    if (val === answer) {
      console.log("correct")
      score += 100; 
    } else {
      console.log("false");
      if (score > 0) score -= 10;
    }

    $('#scoreNum').text(score);
    removePrevQuestions();
    displayQuestions();
  });


  function displayQuestions() {
    if (questionNumber < numOfQuestions) {
      let choiceNums = store[questionNumber].answers.length;

      $('.questionAndChoices').append(`
        <div class="container">
          <div class="question">
            <h2>${store[questionNumber].question}</h2>
          </div>
          <div class="choices">
          </div>
        </div>
      `)
      choiceCreator(questionNumber, choiceNums);
      questionNumber ++;
    } else {
      alert("You've completed the quiz!");
    }
  }

  function choiceCreator(questionNum, numberOfChoices) {
    for (let i=0; i < numberOfChoices; i++) {
      let option = store[questionNum].answers[i];
      answer = store[questionNum].correctAnswer;
      $('.choices').append(`<input type="radio" name="options" value="${option}"><label>${option}</label>`);
    }
  }

  function removePrevQuestions() {
    $('.container').remove();
  }

});

//TODO: implement a restart button