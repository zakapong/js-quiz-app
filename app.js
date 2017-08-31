function populate(){
    if(quiz.isEnded()){
    //    showScore();
    }
    
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
    }
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



