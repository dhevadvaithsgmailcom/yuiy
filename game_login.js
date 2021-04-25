function adduser(){
    player_1=document.getElementById("playername1").value;
    player_2=document.getElementById("playername2").value;

    localStorage.setItem("player_1",player_1);
    localStorage.setItem("player_2",player_2);

    window.location="game_page.html"
}