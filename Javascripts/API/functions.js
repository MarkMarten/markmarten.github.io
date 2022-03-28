

function sendAnswer() {
    $('#endModal').modal('show');

    const answer = document.getElementById("gameAnswer").value
    const team_name = document.getElementById("gameTeam").value

    axios.post('https://d3n1vu5aqz455s.cloudfront.net/answer', {
      game: "rouge",
      answer: answer,
      team_name: team_name,
      correctness: player_correct_amount
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
      
}



function sendReview() {
  let reviewText = document.getElementById("reviewTextArea").value

  axios.post('https://d3n1vu5aqz455s.cloudfront.net/postreview', {
      review: reviewText
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

