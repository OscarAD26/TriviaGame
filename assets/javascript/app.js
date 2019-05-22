//creating  global variables
var score = 0;
var currentQuestion = 0;
var questions = [
    {
        //creating the question
        title: "What is the capital of Colombia?",
        //choices
        answers: ['Madrid', 'Bogota', 'Londo', 'Tokyo'],
        //correct answer
        correct:1
    },
    {
        //creating the question
        title: "What is the capital of Japan?",
        //choices
        answers: ['Madrid', 'Bogota', 'Londo', 'Tokyo'],
        //correct answer
        correct:1
    },
    {
        //creating the question
        title: "What is the capital of Spain?",
        //choices
        answers: ['Madrid', 'Bogota', 'Londo', 'Tokyo'],
        //correct answer
        correct:1
    },
    {
        //creating the question
        title: "What is the capital of England?",
        //choices
        answers: ['Madrid', 'Bogota', 'Londo', 'Tokyo'],
        //correct answer
        correct:1
    },
];


//when page loads run this code
$(document).ready(function(){
    $('.start a').click(function(e){
        e.preventDefault();
        $('.start').hide();
        $('.quiz').show();
        showQuestion();
    });

    //display the question
    function showQuestion(){
        var question = questions[currentQuestion];
        $('.quiz h2').text(question.title);

       //?????? //clear out the listed items on the html
        // $('.quiz ul').html('');   //?????

        //for loop the choices
        for (var i =0; i<question.answers.length; i++){
            $('quiz ul').append("<li id='" + i + "'>" + question.answers[i] + "</li>");
        }; 
        
    };
    //reveal the correct answer
    function checkAnswer(){

    };


    function showSummary(){}
});


