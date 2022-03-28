function setModalAnswer() {
    let answer = document.getElementById("gameAnswer").value
    let team_name = document.getElementById("gameTeam").value 
    let current_gameAnswerLength = localStorage.getItem('gameAnswerLength')
    if (answer.length == 0 || team_name.length == 0) {
        $('#errModal').modal('show');
    } else if (answer.length != current_gameAnswerLength) {
        document.getElementById("badAnswerModalText").innerHTML="There are <b>"+current_gameAnswerLength+"</b> letters in this answer but your answer had <b>"+ answer.length+"</b>. Please change your answer to the correct size."
        $('#badAnswerModal').modal('show');
    } else {
        $('#confirmModal').modal('show');
        document.getElementById("modalAnswerText").innerHTML = "Is this your final answer? <br> You answered: <b>" + answer + "</b>"
        document.getElementById("confirmModalLabel").innerHTML = "Team " + team_name
        
        // set end modal data
        queryComparison(answer)
    }
    
}

function queryComparison(answer) {
    let gameId = localStorage.getItem('currentGameId')
    axios.post('https://d3n1vu5aqz455s.cloudfront.net/comparison', {
        game_id: gameId,
      })
      .then(function (response) {
        console.log(response);
        answerCalculation(answer, response.data[0].realanswer.toUpperCase())
      })
      .catch(function (error) {
        console.log(error);
      });
}

function answerCalculation(answer, realAnswer) {

    let correct_amount = 0
    answer = answer.toUpperCase()
    for (let i=0; i < answer.length; i++) {
        if (answer.charAt(i) == realAnswer.charAt(i)) {
            correct_amount+=1
        }
    }

    let endText = "";

    if (correct_amount == realAnswer.length) {
        endText = "You've won the game!<br>You got the correct answer which was "+realAnswer+"."
    } else if (correct_amount == 0) {
        endText = "That's not quite right."
    } else {
        endText = "You almost got it!<br>You got "+correct_amount+" letters correct."
    }

    document.getElementById("congratulationsText").innerHTML = endText
    let correct_percentage = Math.round((correct_amount*100)/realAnswer.length)
    player_correct_amount = correct_percentage

}
