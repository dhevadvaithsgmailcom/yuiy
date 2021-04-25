player1name=localStorage.getItem("player_1");
player2name=localStorage.getItem("player_2");

player1score=0;
player2score=0;

document.getElementById("player1name").innerHTML=player1name + " : ";
document.getElementById("player2name").innerHTML=player2name + " : ";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("playerquestion").innerHTML="question turn : " + player1name;
document.getElementById("playeranswer").innerHTML="answer turn : " + player2name;

function send(){
  getword=document.getElementById("word").value; 
  word=getword.toLowerCase();
  charAt1=math.charAt(1);
  lengthByto=word.floor(word.length/2);
  charAt2=word.charAt(lengthByto);
  lengthminus=word.length-1;
  charAt3=word.charAt(lengthminus);  
  questionword="<h4 id='worddisplay'>Q. " + removecharAt3 + "</h4>";
  input_box = "<br>Answer : <input type='text' id='input_check_box'>";
  check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
  row = questionword + input_box + check_button;
  document.getElementById("output").innerHTML=row;
  document.getElementById("word").value=" ";
}