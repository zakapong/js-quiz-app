function populate(){
    if(quiz.isEnded()){
    //    showScore();
    }
    
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        
        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i =0; i<choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
       showProgress();
    }
};

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
}

function showProgress(){
    
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length;
}


function showScore(){
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id ='score'>Your scores: " + quiz.score+ "</h2>";
     var element = document.getElementById("quiz");
        element.innerHTML = gameOverHtml;
}



var questions = [
    new Question("Which one is not the object oriented programming language?", ["java", "C#", "C++", "C" ], "C"),
    new Question("Which one is used for styling the web language?", ["HTML", "CSS", "jQuery", "XHL" ], "CSS"),
    new Question("There are ___ main components of object oriented programming?", ["1", "6", "2", "4" ], "4"),
    new Question("Which languge is used for web page?", ["PHP", "Python", "JS", "All" ], "All"),
    new Question("MVC is a __", ["Language", "Library", "Framework", "All" ], "Framework")
   
];

var quiz = new Quiz(questions);

populate();



