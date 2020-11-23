class chain{
    constructor(pointA, pointB){
       var options ={
            pointA: pointA,
            pointB: pointB,
            stiffness:0.04,
            length:10
       }
       this.chain=constraint.create(options)
       world.add(world, this.chain)
    }
display(){
    var pointA = this.chain.bodyA.position 
    var pointB = this.chain.bodyB.position
    strokeweight(4)
    line(pointA.x, pointA.y, pointB.x, pointB.y)
}
}
