function loadReviews() {
    document.getElementById("reviewFieldComputer").innerHTML = ""
    document.getElementById("reviewFieldMobile").innerHTML = ""
    axios.get('https://d3n1vu5aqz455s.cloudfront.net/reviews')
      .then(function (response) {
        console.log(response);
        let data = response.data

        for (let i=0; i<data.length; i++) {
            
            let reviewId = "review"+data[i].id
            let reviewDate = new Date(data[i].posttimestamp)
            let showDate = reviewDate.getDate()+"/"+reviewDate.getMonth()+"/"+reviewDate.getFullYear()

            
            document.getElementById("reviewFieldComputer").innerHTML +=  '<div class="card" style="width: 18rem; margin: 5px">' +
            '<div class="card-body">' +
            '  <h5 class="card-title" ><div id="'+reviewId+'"></div></h5>' +
            '  <h6 class="card-subtitle mb-2 text-muted" style="margin-left:5px;">'+showDate+'</h6>' +
            '  <p class="card-text" style="margin-left:5px;">"'+data[i].review+'"</p>' +
            '</div>' +
            '</div>' 


            document.getElementById("reviewFieldMobile").innerHTML +=  '<div class="centered">' +
            '<div class="card" style="width: 18rem; margin: 5px">' +
            '<div class="card-body">' +
            '  <h5 class="card-title" ><div id="'+reviewId+'mobile"></div></h5>' +
            '  <h6 class="card-subtitle mb-2 text-muted" style="margin-left:5px;">'+showDate+'</h6>' +
            '  <p class="card-text" style="margin-left:5px;">"'+data[i].review+'"</p>' +
            '</div>' +
            '</div>' +
            '</div>'

            
            $("#"+reviewId).rateYo({
                rating: data[i].rating,
                readOnly: true,
                starWidth: "22px"
            });
            $("#"+reviewId+"mobile").rateYo({
                rating: data[i].rating,
                readOnly: true,
                starWidth: "22px"
            });
        
        }
  
      })
      .catch(function (error) {
        console.log(error);
      });
}

loadReviews()