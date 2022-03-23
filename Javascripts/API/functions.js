

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

function latestCompletions() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

    axios.get('https://d3n1vu5aqz455s.cloudfront.net/latestcompletions')
    .then(function (response) {
      console.log(response);
      let data = response.data
      for (let i=1; i<=data.length; i++) {
        let date = new Date(data[i-1].finishtimestamp)

        let correct_date = monthNames[date.getMonth()] +" "+date.getDate()

        document.getElementById("dateRow"+i).innerHTML = correct_date
        document.getElementById("gameRow"+i).innerHTML = data[i-1].game
        document.getElementById("teamNameRow"+i).innerHTML = data[i-1].team_name
        document.getElementById("resultRow"+i).innerHTML = data[i-1].correctness + "%"
      }

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

latestCompletions()