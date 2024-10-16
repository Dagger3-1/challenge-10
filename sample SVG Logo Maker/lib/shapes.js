class Shape{
    constructor(text,textColor,shapeColor){
       this.text=text;
       this.textColor=textColor;
       this.shapeColor=shapeColor

       
    }
    render(){
        return  "Child is required to use its own render()"
    }
}

module.exports=Shape


