const Triangle=require("./triangle")

describe("Triangle",()=>{
     
    describe("shapeColor",()=>{
        it("test shapeColor",()=>{
            const triangle= new Triangle("PL","purple","black")
            expect(triangle.shapeColor).toEqual("black")
        })
    })

    describe("textColor",()=>{
        it("test text Color", ()=>{
            const triangle= new Triangle("PL","purple","black")
            expect(triangle.textColor).toEqual("purple")
        })
        
    })

     describe("render",()=>{
        it ("test triangle svg log", ()=>{
            const triangle= new Triangle("PL","purple","black")
            expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><triangle cx="150" cy="100" r="80" fill="${triangle.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${triangle.textColor}">${triangle.text}</text></svg>`)
        })
     })

})