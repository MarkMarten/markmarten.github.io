
function sendAnswer() {
    //open modal
    $('#endModal').modal('show');

    const answer = document.getElementById("gameAnswer").value
    const team_name = document.getElementById("gameTeam").value


    //create global var
    axios.post('http://18.198.133.166:3000/answer', {
      game: "rouge",
      answer: answer,
      team_name: team_name
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
      
}

