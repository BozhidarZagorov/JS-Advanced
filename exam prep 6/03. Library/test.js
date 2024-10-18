import { expect } from "chai";
import { library } from "./library.js"

describe('library test',function (){
    describe('testing calcBookPrice',()=>{
        it('should throw errors for invalid names',()=>{
            expect(()=>library.calcPriceOfBook(1,1)).to.throw('Invalid input')
        })
        it('should throw errors for invalid year',()=>{
            expect(()=>library.calcPriceOfBook('1','1')).to.throw('Invalid input')
        })
        it('valid data nad year is below 1980',()=>{
            expect(library.calcPriceOfBook('little prince',1943)).to.equal('Price of little prince is 10.00')
        })
        it('valid data nad year is equal to 1980',()=>{
            expect(library.calcPriceOfBook('little prince',1980)).to.equal('Price of little prince is 10.00')
        })
        it('valid data nad year is greater than 1980',()=>{
            expect(library.calcPriceOfBook('little prince',1990)).to.equal('Price of little prince is 20.00')
        })
    })
    describe('testing findBook',()=>{
        it('invalid input empty Array',()=>{
            expect(()=>library.findBook([],'prince')).to.throw('No books currently available')
        })
        it('book not found',()=>{
            expect(library.findBook(['1','2','3'],'prince')).to.equal('The book you are looking for is not here!')
        })
        it('we found the book',()=>{
            expect(library.findBook(['1','2','prince'],'prince')).to.equal('We found the book you want.')
        })
    })
    describe('testing arrangeTheBooks',()=>{
        it('throw error for invalid input: str',()=>{
            expect(()=>library.arrangeTheBooks('')).to.throw('Invalid input')
            expect(()=>library.arrangeTheBooks('prince')).to.throw('Invalid input')
        })
        it('throw error for invalid input: negative num',()=>{
            expect(()=>library.arrangeTheBooks(-1)).to.throw('Invalid input')
        })
        it('Happy path below 40',()=>{
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.')
        })
        it('Happy path equal 40',()=>{
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.')
        })
        it('valid input more than 40',()=>{
            expect(library.arrangeTheBooks(42)).to.equal('Insufficient space, more shelves need to be purchased.')
        })
    })
})