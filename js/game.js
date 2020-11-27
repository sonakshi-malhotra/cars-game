class Game{
constructor(){}
readGameState(){
    var gameStateRef=database.ref('gameState')
    gameStateRef.on("value",function(data){
        gameState=data.val()
    })
}
updateGameState(state){
    database.ref('/').update({gameState:state})
} 
startGame(){
    if(gameState===0){
        form = new Form()
        form.display()
        player = new Player()
        player.getCount()
        
    }
    car1=createSprite(100,200)
    car1.addImage(car1Image)
    car2=createSprite(300,200)
    car2.addImage(car2Image)
    car3=createSprite(500,200)
    car3.addImage(car3Image)
    car4=createSprite(700,200)
    car4.addImage(car4Image)
    cars=[car1,car2,car3,car4]
    
}

play(){
    form.hide()
   Player.getPlayerInfo()

   player.getCarsAtEnd()
   
   if(allPlayers!==undefined){

       background("black")
       image (pathImage,0,-displayHeight*3,displayWidth,displayHeight*4)
       
       var index=0//indexing of the cars array
       var x=200,y
       for (var plr in allPlayers) {
        index=index+1
           x=x+200 
           y=displayHeight-allPlayers[plr].distance
           cars[index-1].x=x
           cars[index-1].y=y
           if(index===player.index){
               strokeWeight(10)
               fill("red")
               ellipse(x,y,60,60)
            camera .position.x=displayWidth/2
            camera.position.y=cars[index -1 ].y
           }
           
               
          
       }
   }
   if(keyDown(UP_ARROW)&&player.index!==null){
    player.distance+=10
    player.update()
}
if (player.distance >3360)
{gameState=2
player.rank=player.rank+1
Player.updateCarsAtEnd(player.rank)
textSize(50)
text ("your rank is "+player.rank,displayWidth/2,camera.position.y-300)
}
drawSprites()
}
end(){
    console.log("rank:"+player.rank)
   
}

}