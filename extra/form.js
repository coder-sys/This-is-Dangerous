class Form{
     input(){
        let name = createInput()
        name.value('Enter your name')
        name.position(displayWidth/2,displayHeight/2)
        let button = createButton()
        button.position(displayWidth/2,(displayHeight/2)+20)
        button.mousePressed(function (){
            i++
            let playerref = 'Player'+i
            database.ref('/').update({
                numPlayer:i
            })
            database.ref(playerref).set({
                namevalue:name.value(),
                x:displayHeight-100
            })
        })
        name.hide()
        button.hide()
    }
    next_Stage=function(){

    }
}