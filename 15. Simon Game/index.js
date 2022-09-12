$(document).ready(function () {
    var currentLevel = 0;
    var buttonArray = ['green', 'red', 'yellow', 'blue'];
    var sequenceArray = []
    var playerResponse = []
    var isStarted=false;

    $(document).keypress(function (event) {
        if (event.key == 'a') generateSequence();
    });

    // play the generated sequence
    function playSequence() {
        var latestButtonToPress = sequenceArray[sequenceArray.length - 1];
        var audio = new Audio('sounds/' + latestButtonToPress + '.mp3');
        // $('#' + latestButtonToPress).trigger('click');
        audio.play();
        $('#' + latestButtonToPress).addClass('pressed');
        setTimeout(() => {
            $('#' + latestButtonToPress).removeClass('pressed');
        }, 150);
    }


    $('.btn').click(function () {
        var currentPress = $(this).attr('id');
        var audio = new Audio('sounds/' + currentPress + '.mp3');
        audio.play();
        playerResponse.push(currentPress);
        if (playerResponse[currentLevel] == sequenceArray[currentLevel]) {
            // console.log(playerResponse + " " + sequenceArray);
            if (playerResponse.length === sequenceArray.length ) {
                setTimeout(function () {
                    generateSequence();
                }, 1000);
            }
        } else {
            var audio = new Audio('sounds/wrong.mp3');
            console.log("Game over");
        }
    });


    // Generate a sequence
    function generateSequence() {
        currentLevel++;
        $('#level-title').text('Level ' + currentLevel);
        var value = Math.floor(Math.random() * 4);
        console.log(value);
        sequenceArray.push(buttonArray[value]);
        console.log("Target: " + sequenceArray);
        playSequence();
    }

    // reset Game
    function resetGame() {
        currentLevel = 0;
        sequenceArray = []
        playerResponse = []
    }

    // start game
    function startGame() {
        currentLevel++;
        $('#level-title').text('Level ' + currentLevel);
        generateSequence();
        // playerResponse();
    }

});