class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    text("GO PLAY CSGO INSTEAD",200,200);
    Player.getPlayerInfo()
    if(allPlayers!==undefined){
      var pos=250;
      for(var plr in allPlayers){
        if(plr==="player"+player.index){
          fill(255,0,0);
        }
        else{
          fill(0);
        }
        pos=pos+30;
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,200,pos);
      }
      if(keyIsDown(UP_ARROW)&& player.index!=null){
        player.distance=player.distance+50;
        player.update();
      }
    }
  }
}
