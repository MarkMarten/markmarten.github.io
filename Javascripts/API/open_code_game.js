function startGame() {
    localStorage.setItem('code', document.getElementById('gameCodeInput').value)

    queryGame()
}

function queryGame() {
    let code = localStorage.getItem('code')
    console.log("found code:", code)
    axios.post('https://d3n1vu5aqz455s.cloudfront.net/personalgame', {
        code: code
      })
        .then(function (response) {
            console.log(response);
            let data = response.data
            if (data.length > 0 ) {
                console.log("found a game")
                localStorage.setItem('base64_html', data[0].base64_html)
                
                
                location.href = 'personal_game.html';
            } else {
                console.log("didnt find a game")
            }
        })
        .catch(function (error) {
            console.log(error);
        });
  }

function queryClues() {
    axios.get('https://d3n1vu5aqz455s.cloudfront.net/personalgameclues')
        .then(function (response) {
            console.log()
        })
        .catch(function (error) {
            console.log(error);
        });
}


