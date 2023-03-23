class Player {
  constructor() {
    this.name = null; //esse nome é vazio (null) inicialmente
    this.index = null; //esse indice (a quantia de jogadores registrada) é vazio inicialmente
    this.positionX = 0; //a posição x do jogador é zerada inicialmente 
    this.positionY = 0; //a posição y do jogador é zerada inicialmente
  }

   addPlayer() { //adiciona o jogador
    var playerIndex = "players/player" + this.index; //cria o indice/posição a partir das imagens que temos

    if (this.index === 1) { //se for o primeiro jogador a posição x será a metade da largura da tela subtraindo 100
      this.positionX = width / 2 - 100;
    } else {//se for o segundo jogador a posição x será a metade da largura adicionando 100
      this.positionX = width / 2 + 100;
    }

    database.ref(playerIndex).set({
      //no banco de dados irá trocar as informações conforme adicionadas no formulario e na função anterior 
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
    });
  }
  //TA
  getDistance() { //serve para obter/pegar a distancia do banco de dados e repassar aos jogadores
    var playerDistanceRef = database.ref("players/player" + this.index);
    playerDistanceRef.on("value", data => {
      var data = data.val();
      this.positionX = data.positionX;
      this.positionY = data.positionY;
    });
  }
 
  //Bp
  getCount() { //serve para obter/pegar a contagem de total de jogadores registrados no banco de dados
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  //Bp
  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }}

update() { //atualiza as informações no banco de dados sobre o jogador AULA C39
  var playerIndex = "players/player" + this.index;
  database.ref(playerIndex).update({
    name: this.name,
    positionX: this.positionX,
    positionY: this.positionY,
  });
}
//as funções estaticas não são anexadas a nenhum objeto da classe. Estamos tentando obtertodas as informações dos jogadores
//- e isso não envolve nenhum objeto em particular.
static getPlayerInfo() {
  var playerInfoRef.on("value", data => {
    allPlayers = data.val();
   });
 }
}
