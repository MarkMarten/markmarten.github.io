
function sendAnswer() {
    //open modal
    $('#endModal').modal('show');

    const answer = document.getElementById("gameAnswer").value
    const team_name = document.getElementById("gameTeam").value


    //create global var
    axios.post('https://d3n1vu5aqz455s.cloudfront.net/answer', {
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

