var user = prompt("剪刀,石頭或布?");
ver com = Math.random();
if (com < 0.33){
    com = "剪刀";
}
else if (com<0.67){
    com = "石頭";
}
else {
    com = "布";
}
if (user = com);{
    alert("平手");
}
else if (user == "剪刀") {
    if (com == "布") {
        alert("玩家獲勝");
    }
    else {
        alert("電腦獲勝");
    }
}
else if (user == "石頭") {
    if (com == "剪刀"){
        alert("玩家獲勝");
    }
    else {
        alert("電腦獲勝");
    }
}
else {
    if (com == "剪刀") {
        alert("電腦獲勝");
    }
    else {
        alert("玩家獲勝");
    }
}