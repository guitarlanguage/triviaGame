$(document).ready(function() {
    $("#theForm").hide();
    $("#result-page").hide();
    var number = 50;
    var intervalId;
    var right = 0;
    var wrong = 0;
    var noAnswer = 0;
    var audioArray = $('.songs');
    //--------------audio land code for a later application--------------------

    // var audioElement = document.createElement('audio');
    // audioElement.setAttribute("src", "gambling.mp3");
    //
    // audioElement.addEventListener('ended', function() {
    //     this.play();
    // }, false);
    //
    // audioElement.addEventListener("canplay", function() {
    //     $("#length").text("Duration:" + audioElement.duration + " seconds");
    //     $("#source").text("Source:" + audioElement.src);
    //     $("#status").text("Status: Ready to play").css("color", "green");
    // });
    //
    // audioElement.addEventListener("timeupdate", function() {
    //     $("#currentTime").text("Current second:" + audioElement.currentTime);
    // });
    //
    // $('#play').click(function() {
    //     audioElement.play();
    //     $("#status").text("Status: Playing");
    // });
    //
    // $('#pause').click(function() {
    //     audioElement.pause();
    //     $("#status").text("Status: Paused");
    // });
    //
    // $('#restart').click(function() {
    //     audioElement.currentTime = 0;
    // });

    //--------------audio land----------------------


    var q1 = {
      q: "Who is the most successful guitar player from following options?",
      answerChoices: ["Touring Rockstar", "fully booked studio session guy", "Dude with guitar brand endorsement", "Guy who's wife is a doctor"],
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
      answerChoices: ["Ab","G", "F", "C#"],
      correct: "Ab",
      name: "q5",
      images: "assets/images/snail.jpeg"
    };

    //array of objects
    var questions = [q1, q2, q3, q4, q5];
    //click events
    $("#start-button").on("click", run);
    $("#start-button").on("click", decrement);
    $("#done-button").on("click", grade);
    $("#done-button").on("click", done);
    $("#done-button").on("click", displayResults);

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $("#start-button").hide();
        $("#theForm").show();

        var i = Math.floor(Math.random() * audioArray.length);
        audioArray[i].play();
    }
    function decrement() {
        number--;
      //  Show the number in the #time tag.
        $("#time").html("<h2>" + "Time Remaining: " + number + "</h2>");
        if (number === 0) {
            $("#theForm").hide();
            grade();

            displayResults(event);
            event.preventDefault();
            $("#result-page").show();
            $("#result-page").prepend("<button id='game_over'>" + "Game Over" + "</button>");
            stop(); //  ...run th stop function.
            $("#game_over").on("click", function(){
            location.reload();
            });
        }
    }
    function grade(event){
        event.preventDefault();
        for (var i = 0; i < questions.length; i++) {
            var correctAnswer = questions[i].correct;
            var questionName = questions[i].name;
            var selected = $('input[type="radio"][name=' + questionName + ']:checked').val();
            if (selected === undefined) {
                noAnswer++;
            } else if (selected === correctAnswer) {
                right++;
            } else {
                wrong++;
            }
        }
    }

    function done(event){
        event.preventDefault();
        $("#theForm").hide();
        $("#result-page").show();
        $("#result-page").html("<button id='game_over'>" + "Game Over" + "</button>");
        //if desired throw in a pause
        // $('#yes-audio').trigger("pause");
        stop();
    }

    function displayResults(event){
        event.preventDefault();
        stop();
        $("#result-page").append("<h4 class='make-lower'>" + "<span>" + "correct answers: " + right + "</span>" + "</h4>");
        $("#result-page").append("<h4>" + "incorrect answers: " + wrong + "</h4>");
        $("#result-page").append("<h4>" + "missed questions: " + noAnswer+ "</h4>");
        if(right > 3){
            $("#result-page").append("<h2>" + "You are a champ" + "</h2>");
            $("#result-page").append("<img src='assets/images/mario.jpeg'>");

        } else {
            $("#result-page").append("<h2>" + "Take a left and get me to my destination" + "</h2>");
            $("#result-page").append("<img src='assets/images/pig.jpeg'>");

        }
        $("#game_over").on("click", function(event){
            event.preventDefault();
            location.reload();
        });
    };


    function reload(){
        var number = 30;
        $("#theForm").hide();
        $("#result-page").hide();
        var intervalId;
        var right = 0;
        var wrong = 0;
        var noAnswer = 0;
    }

    $("#game_over").on("click", function(event){
        event.preventDefault();
        console.log("hello");
        location.reload();
    });

    function stop() {
        //  Clears our intervalId
        //  We just pass the name of the interval
        //  to the clearInterval function.
        clearInterval(intervalId);
        // $("#result-page").empty();
    }
});
