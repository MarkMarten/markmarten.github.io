gameRating = 0
function setRating(r) {
    gameRating = r;
}

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
      review: reviewText,
      rating: gameRating,
      game: "rouge"
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function sendEmail() {

  let name = document.getElementById("contactName").value
  let location = document.getElementById("contactLocation").value
  let participants = document.getElementById("contactPlayers").value
  let date = document.getElementById("contactDate").value
  let email = document.getElementById("contactEmail").value
  let message = document.getElementById("contactMessage").value

  axios.post('https://d3n1vu5aqz455s.cloudfront.net/message', {
      name: name,
      location: location,
      participants: participants,
      date: date,
      email: email,
      message: message,
    })
    .then(function (response) {
      console.log(response);
      $('#messageSucModal').modal('show');
    })
    .catch(function (error) {
      $('#messageErrModal').modal('show');
      console.log(error);
    });
}