class Game {
  
  constructor(){

  

  }
  
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
      // creating an object of Player Class
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){

    form.hideForm();

    textSize(30);

    text("Game Start!", 120,100);

    //getAllPlayers is a static function. So called by the Class and not the object
    //Class - Player ; Object - player
    Player.getAllPlayers();

    if(allPlayers!==undefined){

      var displayPosition = 130

      for(var p in allPlayers){

        if(p=== "player"+player.index){

          fill("red");

        }

        else{

          fill("black");

        }

        displayPosition = displayPosition+20;

        textSize(15);

        text(allPlayers[p].name+" : "+allPlayers[p].distance, 120, displayPosition);
        
      }

     

    }

  }
}
