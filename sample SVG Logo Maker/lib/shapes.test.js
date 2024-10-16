const Shape=require("./shapes.js")

describe("Shape",()=>{
     
    describe("shapeColor",()=>{
        it("test shapeColor",()=>{
            const shape= new Shape("PL","purple","black")
            expect(shape.shapeColor).toEqual("black")
        })
    })

    describe("textColor",()=>{
        it("test text Color", ()=>{
            const shape= new Shape("PL","purple","black")
            expect(shape.textColor).toEqual("purple")
        })
        
    })

     describe("render",()=>{
        it ("test Shape svg log", ()=>{
            const shape= new Shape("PL","purple","black")
  
            expect(shape.render()).toEqual("Child is required to use its own render()")
        })
     })

})