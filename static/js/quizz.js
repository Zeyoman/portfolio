const quizData = {
    "easy": [
      { question: "Quelle est la capitale de la France ?", answers: ["Paris", "Londres", "Berlin"], correct: "Paris" },
      { question: "Combien de jours y a-t-il dans une semaine ?", answers: ["5", "6", "7"], correct: "7" }
    ],
    "medium": [
      { question: "Quel est l'océan le plus grand ?", answers: ["Atlantique", "Pacifique", "Indien"], correct: "Pacifique" },
      { question: "Combien de continents y a-t-il ?", answers: ["5", "6", "7"], correct: "7" }
    ],
    "hard": [
      { question: "Qui a découvert l'Amérique ?", answers: ["Christophe Colomb", "Marco Polo", "Vasco de Gama"], correct: "Christophe Colomb" },
      { question: "Quelle est la plus grande planète du système solaire ?", answers: ["Jupiter", "Saturne", "Uranus"], correct: "Jupiter" }
    ]
  };
  
  let userAnswers = {};
  let totalQuestions = 0;
  let correctAnswers = 0;
  let iteration = 0;
  
  function startQuiz() {
    userAnswers = {};
    totalQuestions = 0;
    correctAnswers = 0;
    iteration = 0;
    
    const difficulty = document.getElementById("difficulty").value;
    const questions = quizData[difficulty];
    totalQuestions = questions.length;
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";
  
    questions.forEach((questionData, index) => {
        iteration++
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.id = iteration;
        questionElement.innerHTML = `
            <h3>Question ${index + 1} :</h3>
            <p>${questionData.question}</p>
            ${questionData.answers.map(answer => `<button onclick="checkAnswer('${answer}', '${questionData.correct}', ${index})">${answer}</button>`).join('')}
        `;
        quizContainer.appendChild(questionElement);
    });
  
    quizContainer.style.display = "block";
    document.getElementById('1').classList.add('active')
    document.querySelectorAll('.button-suivant').forEach( button => {
        button.style.display = "block";
    })
  }
  
  function checkAnswer(selectedAnswer, correctAnswer, index) {
    userAnswers[index] = { selected: selectedAnswer, correct: correctAnswer };
    if (selectedAnswer === correctAnswer) {
      correctAnswers++;
    }
  
    const quizContainer = document.getElementById("quiz");
    if (Object.keys(userAnswers).length === totalQuestions) {
      showResults(quizContainer);
    } else{
        nextQuestion(index)
    }
  }

    function nextQuestion(index){
        index = index + 1
        document.getElementById(index).classList.remove('active')
        index = index + 1;
        document.getElementById(index).classList.add('active')
    }

    function restart(){
        document.getElementById('quiz').style.display = "none"
    }
  
  function showResults(container) {
    container.innerHTML = `<h2>Résultats du quiz :</h2>
                           <p>Nombre total de questions : ${totalQuestions}</p>
                           <p>Nombre de réponses correctes : ${correctAnswers}</p>
                           <p>Nombre de réponses incorrectes : ${totalQuestions - correctAnswers}</p>
                           <p>Pourcentage de réponses correctes : ${((correctAnswers / totalQuestions) * 100).toFixed(2)}%</p>
                           <h3>Mauvaises réponses :</h3>
                           <button class="button" onclick="restart()">Recommencer</button>`;
    
    Object.keys(userAnswers).forEach(index => {
      const { selected, correct } = userAnswers[index];
      if (selected !== correct) {
        container.innerHTML += `<p>Question ${parseInt(index) + 1} : Vous avez répondu "${selected}", la réponse correcte était "${correct}"</p>`;
      }
    });
  }

  if(window.screen.availWidth >= 1){
    $('#construction').attr('style','display:none')
    $('main').attr('style','display:block')
    $('header').attr('style','display:block')
} else {
    $('#construction').attr('style','display:flex')
    $('main').attr('style','display:none')
    $('header').attr('style','display:none')
}

window.addEventListener('resize',function(){
    if(window.screen.availWidth >= 991){
        $('#construction').attr('style','display:none')
        $('main').attr('style','display:block')
        $('header').attr('style','display:block')        
    }else{
        $('#construction').attr('style','display:flex')
        $('main').attr('style','display:none')
        $('header').attr('style','display:none')
    }
})
  