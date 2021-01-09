class Box {
    constructor(x,y,w,h){

        var options = {
            restitution: 1
        }

        // create a rectangular body
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height = h;
        // add the body to the world
        World.add(world,this.body)
    }

    display(){
       var angle = this.body.angle
       push()
       translate(this.body.position.x,this.body.position.y)
       rotate(angle)
        rectMode(CENTER);
        rect(0,0, this.width, this.height)
        pop()
    }
}