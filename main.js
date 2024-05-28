//------ getekende dobbestenen -----
var svg1 = '<svg width="150" height="150"><rect x="25" y="25" rx="20" ry="20"  width="100" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0);opacity:0.5"/><circle cx="75" cy="75" r="8" stroke="white" stroke-width="1" fill="white"/></svg>';

var svg2 = '<svg width="150" height="150"><rect x="25" y="25" rx="20" ry="20"  width="100" height="100"       style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0);opacity:0.5"/><circle cx="100" cy="50" r="8" stroke="white" stroke-width="1" fill="white"/><circle cx="50" cy="100" r="8" stroke="white" stroke-width="1" fill="white"/></svg>';

var svg3 = '<svg width="150" height="150"><rect x="25" y="25" rx="20" ry="20"  width="100" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0);opacity:0.5"/><circle cx="100" cy="50" r="8" stroke="white" stroke-width="1" fill="white"/><circle cx="75" cy="75" r="8" stroke="white" stroke-width="1" fill="white"/><circle cx="50" cy="100" r="8" stroke="white" stroke-width="1" fill="white"/></svg>';

var svg4 = '<svg width="150" height="150"><rect x="25" y="25" rx="20" ry="20"  width="100" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0);opacity:0.5"/><circle cx="100" cy="50" r="8" stroke="white" stroke-width="1" fill="white"/> <circle cx="50" cy="50" r="8" stroke="white" stroke-width="1" fill="white"/><circle cx="50" cy="100" r="8" stroke="white" stroke-width="1" fill="white"/><circle cx="100" cy="100" r="8" stroke="white" stroke-width="1" fill="white"/></svg>';

var svg5 = '<svg width="150" height="150"><rect x="25" y="25" rx="20" ry="20"  width="100" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0);opacity:0.5"/><circle cx="100" cy="50" r="8" stroke="white" stroke-width="1" fill="white"/><circle cx="50" cy="50" r="8" stroke="white" stroke-width="1" fill="white"/><circle cx="75" cy="75" r="8" stroke="white" stroke-width="1" fill="white"/><circle cx="50" cy="100" r="8" stroke="white" stroke-width="1" fill="white"/><circle cx="100" cy="100" r="8" stroke="white" stroke-width="1" fill="white"/></svg>';

var svg6 = '<svg width="150" height="150"><rect x="25" y="25" rx="20" ry="20"  width="100" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0);opacity:0.5"/><circle cx="100" cy="50" r="8" stroke="white" stroke-width="1" fill="white"/><circle cx="50" cy="50" r="8" stroke="white" stroke-width="1" fill="white"/><circle cx="100" cy="75" r="8" stroke="white" stroke-width="1" fill="white"/><circle cx="50" cy="75" r="8" stroke="white" stroke-width="1" fill="white"/><circle cx="50" cy="100" r="8" stroke="white" stroke-width="1" fill="white"/><circle cx="100" cy="100" r="8" stroke="white" stroke-width="1" fill="white"/></svg>';

var wak = 0;
var ijs = 0;
var ping = 0;

//laat dobbelstenen zien
var dbstn = [svg1, svg2, svg3, svg4, svg5, svg6];
for (var i = 0; i < dbstn.length; i++) {
  dbstn[i];
}

function reset() {
  //uileg weergave
  document.getElementById("explain").style.display = "block";

  //spel weergave
  document.getElementById("invisible").style.display = "none";
  
  //weergave dobbelstenen
  document.getElementById("demo5").style.display = "none";
  document.getElementById("demo6").style.display = "none";
  document.getElementById("demo7").style.display = "none";
  
  // controle melding
  document.getElementById("reportAnswer").style.display = "none";

  //invul velden leegmaken
  document.getElementById("wakField").value = "";
  document.getElementById("ijsField").value = "";
  document.getElementById("pingField").value = "";

  //reset de waarden wakken, ijsberen en pinguins
  wak = 0;
  ijs = 0;
  ping = 0;

}

//controleert of het goed is
function ctrl() {
  document.getElementById("placeHldRa").style.display = "block";
  // laat opnieuw button zien
  document.getElementById("resetShow").style.display = "inline";
  
  var letters ="abcdefghijklmnopqrstuvwxyz";
  var correct = 0;
  var answer = document.getElementById("wakField").value;
  
  // laat goede en foute meldingen zien bij wak
  if (answer == wak) {
    correct += 1;
    document.getElementById("demo5").innerHTML = "Goed";
    document.getElementById("demo5").style.display = "inline";
  } 
  else {
    document.getElementById("demo5").innerHTML = "Fout";
    document.getElementById("demo5").style.display = "inline";
  }
  
  // laat goede en foute meldingen zien bij ijsberen
  var answer2 = document.getElementById("ijsField").value;
  if (answer2 == ijs) {
    correct += 1;
    document.getElementById("demo6").innerHTML = "Goed";
    document.getElementById("demo6").style.display = "inline";
  } else {
    document.getElementById("demo6").innerHTML = "Fout";
    document.getElementById("demo6").style.display = "inline";
  }
  
  // laat goede en foute meldingen zien bij pinguins
  var answer3 = document.getElementById("pingField").value;
  if (answer3 == ping) {
    correct += 1;
    document.getElementById("demo7").innerHTML = "Goed";
    document.getElementById("demo7").style.display = "inline";
  } else {
    document.getElementById("demo7").innerHTML = "Fout";
    document.getElementById("demo7").style.display = "inline";
  }

  //kijkt of alle vakken goed zijn of niet
  if (correct == 3) {
    document.getElementById("reportAnswer").innerHTML = "Je hebt ze allemaal goed!";
    document.getElementById("reportAnswer").style.display = "block";
  } else if (correct < 3 && correct >= 1) {
    document.getElementById("reportAnswer").innerHTML = "Je hebt er "+ correct + " goed, je bent goed of weg!";
    document.getElementById("reportAnswer").style.display = "block";
  } else if (correct == 0) {
    document.getElementById("reportAnswer").innerHTML = "Helaas je hebt ze allemaal fout!";
    document.getElementById("reportAnswer").style.display = "block";
  }

}

function throwDbs() {
  //reset wakken, ijsberen en pinguins
  document.getElementById("placeHldRa").style.display = "none";
  document.getElementById("explain").style.display = "none";
  document.getElementById("resetShow").style.display = "none";
  document.getElementById("invisible").style.display = "inline";

  wak = 0;
  ijs = 0;
  ping = 0;

  random = Math.floor(Math.random() * 6);
  var x = document.getElementById("selecteren");
  var y = x.selectedIndex;
  var aantal = x.options[y].value;
  
  //zorgt voor het aantal dobbestenen dat je kunt kiezen
  if (aantal == 3 || aantal == 4 || aantal == 5 || aantal == 6) {
    var dbs = "";
    var i = 0;
    //aantal dobbestenen dat gemaakt worden.
    while (i < aantal) {
      	i++
      	var rand = Math.floor(Math.random() * 6);
        switch (rand) {
          case 0:
            dbs += document.getElementById("demo1").innerHTML = dbstn[0];
            document.getElementById("demo1").style.display = "inline";
            wak += 1;
            ijs += 0;
            ping += 6;
            break;
          case 1:
            dbs += document.getElementById("demo1").innerHTML = dbstn[1];
            document.getElementById("demo1").style.display = "inline";
            break;
          case 2:
            dbs += document.getElementById("demo1").innerHTML = dbstn[2];
            document.getElementById("demo1").style.display = "inline";
            wak += 1;
            ijs += 2;
            ping += 4;
            break;
          case 3:
            dbs += document.getElementById("demo1").innerHTML = dbstn[3];
            document.getElementById("demo1").style.display = "inline";
            break;
          case 4:
            dbs += document.getElementById("demo1").innerHTML = dbstn[4];
            document.getElementById("demo1").style.display = "inline";
            wak += 1;
            ijs += 4;
            ping += 2;
            break;
          case 5:
            dbs += document.getElementById("demo1").innerHTML = dbstn[5];
            document.getElementById("demo1").style.display = "inline";
            break;
         }
    }
    //laat dobbestenen verschijnen
    document.getElementById("demo1").innerHTML = dbs;
  }

}
