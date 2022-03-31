function startGame() {
    localStorage.setItem('code', document.getElementById('gameCodeInput').value)

    queryGame()
}

function queryGame() {
    let code = localStorage.getItem('code')

    axios.post('https://d3n1vu5aqz455s.cloudfront.net/personalgame', {
        code: code
      })
        .then(function (response) {
            let data = response.data
            if (data.length > 0 ) {
                location.href = 'personal_game.html';
            } else {
                document.getElementById("noGameFoundText").style.display = "block"
            }
        })
        .catch(function (error) {
            console.log(error);
        });
  }

function queryClues() {
    axios.get('https://d3n1vu5aqz455s.cloudfront.net/personalgameclues')
        .then(function (response) {
        })
        .catch(function (error) {
            console.log(error);
        });
}


