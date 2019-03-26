function show() {

  fetch('/players')
      .then(function (response) {
          return response.json();
      })
      .then(function (myJson) {

          var top = [];
          var top10;
          for (var i = 0; i < myJson.length; i++) {
              top.push(myJson[i].victories)
          }

          function reverse(a) {
              a.sort(function (a, b) {
                  return b - a;
              });
              top10 = a;
          }
          reverse(top);

          recordTable(top10, myJson)
      });


  function recordTable(t, J) {
      console.log(t + " y " + J)
      var playerName = [];
      for (var e = 0; e < J.length; e++) {
          for (var b = 0; b < J.length; b++) {
              if (J[b].victories == t[e]) {
                  playerName.push(J[b].name)
              }
          }
      }


      document.getElementById("0").innerHTML = "Name: " + playerName[0] + " Victories: " + t[0];
      document.getElementById("1").innerHTML = "Name: " + playerName[1] + " Victories: " + t[1];
      document.getElementById("2").innerHTML = "Name: " + playerName[2] + " Victories: " + t[2];
      document.getElementById("3").innerHTML = "Name: " + playerName[3] + " Victories: " + t[3];
      document.getElementById("4").innerHTML = "Name: " + playerName[4] + " Victories: " + t[4];
      document.getElementById("5").innerHTML = "Name: " + playerName[5] + " Victories: " + t[5];
      document.getElementById("6").innerHTML = "Name: " + playerName[6] + " Victories: " + t[6];
      document.getElementById("7").innerHTML = "Name: " + playerName[7] + " Victories: " + t[7];
      document.getElementById("8").innerHTML = "Name: " + playerName[8] + " Victories: " + t[8];
      document.getElementById("9").innerHTML = "Name: " + playerName[9] + " Victories: " + t[9];
  }
};


