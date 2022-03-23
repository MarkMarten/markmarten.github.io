function setModalAnswer() {
    let answer = document.getElementById("gameAnswer").value
    let team_name = document.getElementById("gameTeam").value 

    if (answer.length == 0 || team_name.length == 0) {
        $('#errModal').modal('show');
    } else if (answer.length != config_answer1.length) {
        console.log("here")
        document.getElementById("badAnswerModalText").innerHTML="There are <b>"+config_answer1.length+"</b> letters in this answer but your answer had <b>"+ answer.length+"</b>. Please change your answer to the correct size."
        $('#badAnswerModal').modal('show');
    } else {
        $('#confirmModal').modal('show');
        document.getElementById("modalAnswerText").innerHTML = "Is this your final answer? <br> You answered: <b>" + answer + "</b>"
        document.getElementById("confirmModalLabel").innerHTML = "Team " + team_name
        
        // set end modal data
        answerCalculation(answer, config_answer1)
    }
    
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
