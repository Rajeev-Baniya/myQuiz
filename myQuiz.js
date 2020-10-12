function check(){
    var score = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    var q6 = document.quiz.question6.value;
    var q7 = document.quiz.question7.value;
    var q8 = document.quiz.question8.value;
    var q9 = document.quiz.question9.value;
    var q10 = document.quiz.question10.value;
    if (q1== "8848"){ score++}
    if (q2== "Moscow"){ score++}
    if (q3== "AllOfTheAbove"){ score++}
    if (q4== "Insects"){ score++}
    if (q5== "Languages"){ score++}
    if (q6== "c"){ score++}
    if (q7== "c"){ score++}
    if (q8== "b"){ score++}
    if (q9== "a"){ score++}
    if (q10== "b"){ score++}
    if (score>=5){
        document.write("<h1>Your Score is " + score + ". Well Done.</h1>" )
    } else {
        document.write("<h1 class='result' >Your Score is " + score + ". You need to improve, Dumb ass.</h1>")
    }

}