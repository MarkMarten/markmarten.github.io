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
          document.getElementById("gameRow"+i).innerHTML = [data[i-1].name]
          document.getElementById("teamNameRow"+i).innerHTML = data[i-1].team_name
          document.getElementById("resultRow"+i).innerHTML = data[i-1].correctness + "%"
        }
  
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  latestCompletions()