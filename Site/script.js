function calcularNivel() {

    var wins = parseInt(document.getElementById("wins").value);
    var loses = parseInt(document.getElementById("loses").value);

    //Check if input is empty
    if(isNaN(wins) && isNaN(loses)){
        document.getElementById("result").innerText = `Digite a quantidade de vitorias e derrotas`;
        return;
    }

    var winRate = wins - loses;
    var level;
  
    if (winRate < 10) {
        level = "Ferro";
    } else if (winRate >= 10 && winRate <= 20) {
        level = "Bronze";
    } else if (winRate >= 21 && winRate <= 50) {
        level = "Prata";
    } else if (winRate >= 51 && winRate <= 80) {
        level = "Ouro";
    } else if (winRate >= 81 && winRate <= 90) {
        level = "Diamante";
    } else if (winRate >= 91 && winRate <= 100) {
        level = "Lendário";
    } else if (winRate >= 101) {
        level = "Imortal";
    }
    else {
        level = "Sem Rank!";
    }
  
    document.getElementById("result").innerText = `O Herói tem um saldo de ${winRate} e está no nível de ${level}`;
}
  