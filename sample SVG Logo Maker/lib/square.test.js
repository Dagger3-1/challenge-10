const Square=require("./square")

describe("Square",()=>{
     
    describe("shapeColor",()=>{
        it("test shapeColor",()=>{
            const square= new Square("PL","purple","black")
            expect(square.shapeColor).toEqual("black")
        })
    })

    describe("textColor",()=>{
        it("test text Color", ()=>{
            const square= new Square("PL","purple","black")
            expect(square.textColor).toEqual("purple")
        })
        
    })

     describe("render",()=>{
        it ("test square svg log", ()=>{
            const square= new Square("PL","purple","black")
            expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><square cx="150" cy="100" r="80" fill="${square.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${square.textColor}">${square.text}</text></svg>`)
        })
     })

})