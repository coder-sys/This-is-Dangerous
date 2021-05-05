class  Game{
    constructor(){
    this.index=-1
    this.gameIndex=1
}
    gameIteration=function(){
        if(numplayers>1){
        if(gameState===1){
            for(let i = 0;i<numplayers;i++){
                let yval = 400;
                planes.push(new Plane(230,yval))
                yval -= 100 
            }
            for(let numPlanes=0;numPlanes<numplayers;numPlanes++){
                planes[numPlanes].appear()
            }
            for(let i in allPlayers){
                this.gameIndex+=1
            if(keyDown(UP_ARROW) && allPlayers[i].name === formobj.input.value()){
                database.ref('players/'+formobj.input.value()).update({
                    'static':false
                })
                let b = database.ref('players/'+formobj.input.value())
                b.on('value',function (data){
                    a = data.val().static
                })
                Matter.Body.setStatic(planes[this.gameIndex-1].body,a)
            }
            }
        }
    }
}
}