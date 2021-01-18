class Form{
constructor(){
this.input = createInput("name")
this.button = createButton("press here")
this.greeting = createElement("h2")
    }

hide(){
this.greeting.hide();
this.input.hide();
this.button.hide();
}


display(){
var title = createElement('h1')
title.html("Welcome to the best game in your life that you will ever play:)")
title.position(250,100)

    
this.input.position(250,250);
this.button.position(250,300);

this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();
player.name = this.input.value();
playerCount+=1
player.index = playerCount;
player.update()
player.updateCount(playerCount)
this.greeting.html("WELCOME TO RACEATHON "+player.name)
this.greeting.position(250,250)

})
}
}