window.onload = function() {
    var number = 30;
    $("#theForm").hide();
    $("#result-page").hide();
    var intervalId;
    var right = 0;
    var wrong = 0;
    var noAnswer = 0;


    var q1 = {
      q: "Whom is the most successful guitar player from following options?",
      answerChoices: ["Touring Rockstar", "fully booked studio guitarist", "Dude with guitar company endorsement", "Guy who's wife is a doctor"],
      correct: "Guy who's wife is a doctor",
      name: "q1",
      images: "assets/images/mario.jpeg"
    };
    var q2 = {
      q: "What does CGP stand for?",
      answerChoices: ["Certified Goat Planner", "Cello, Guitar, Piano arrangment", "Certified Guitar Player", "Chief Executive Officer"],
      correct: "Certified Guitar Player",
      name: "q2",
      images: "assets/images/pig.jpeg"
    };
    var q3 = {
      q: "Who composed Jiffy Jam?",
      answerChoices: ["Buster Jones", "Lenny Breau", "Jerry Reed", "Chet Atkins"],
      correct: "Jerry Reed",
      name: "q3",
      images: "assets/images/snail.jpeg"
    };

    var q4 = {
      q: "standard tuning: 4th string, 8th fret, what note is this?",
      answerChoices: ["E", "C", "Bb", "Ab"],
      correct: "Bb",
      name: "q4",
      images: "assets/images/snail.jpeg"
    };

    var q5 = {
      q: "standard tuning: 2nd string, 9th fret, what note is this?",
      answerChoices: ["E", "C", "Bb", "Ab"],
      correct: "Ab",
      name: "q5",
      images: "assets/images/snail.jpeg"
    };


    var questions = [q1, q2, q3, q4, q5];

    $("#start-button").on("click", run);
    $("#start-button").on("click", decrement);
    $("#done-button").on("click", grade);
    $("#done-button").on("click", done);
    $("#done-button").on("click", displayResults);

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $("#theForm").show();
        $("#start-button").hide();
    }
    function decrement() {
        number--;
      //  Show the number in the #time tag.
        $("#time").html("<h2>" + "Time Remaining: " + number + "</h2>");
        if (number === 0) {
        grade();
        displayResults();
        stop(); //  ...run the stop function.
        done();
        }
    }
    function grade(){
        for (var i = 0; i < questions.length; i++) {
            var correctAnswer = questions[i].correct;
            console.log(correctAnswer);
            var questionName = questions[i].name;
            var selected = $('input[type="radio"][name=' + questionName + ']:checked').val();
            // console.log(selected);
            //thought I'd use jquery to loop and append the questions and selections. too difficult
            // $("#theForm").append("<form>" + "<h4>" + questions[i].q + "</h4>" + "<label class='radio-inline'>" + "<input type='radio' class='answer'" + questions[i].name + questions[i].answer + "</label>" + "<br>" + "</form");
            if (selected === undefined) {
                noAnswer++;
            } else if (selected === correctAnswer) {
                right++;
            } else {
                wrong++;
            }
        }
    }

    function done(){
        $("#theForm").hide();
        $("#result-page").show();
        $("#result-page").html("<h2 class='game_over'>" + "Game Over" + "</h2>");
        stop();
    }

    function displayResults(){
        $("#result-page").append("<h4>" + "correct answers: " + right + "</h4>");
        $("#result-page").append("<h4>" + "incorrect answers: " + wrong + "</h4>");
        if(right > 3){
            $("#result-page").append("<img src='assets/images/mario.jpeg'>");
        } else {
            $("#result-page").append("<img src='assets/images/pig.jpeg'>");
        }
    }

    function stop() {
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
        // $("#result-page").empty();
    }
};
