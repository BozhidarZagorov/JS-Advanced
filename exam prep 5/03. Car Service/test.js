import { expect } from 'chai'
import { carService } from './03. Car Service.js'

describe('carService test',function () {
    describe('testing isItExpensive function',()=>{
        it('should return issue is too expensive / engine',()=>{
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money')
        })
        it('should return issue is too expensive / transmission',()=>{
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money')
        })
        it('should return positive on anything else',()=>{
            expect(carService.isItExpensive('Test')).to.equal('The overall price will be a bit cheaper')
        })
    })
    describe('testing discount function',()=>{
        it('should throw for invalid input for 1st number',()=>{
            expect(()=>carService.discount('invalid',100)).to.throw('Invalid input')
            expect(()=>carService.discount([],100)).to.throw('Invalid input')
            expect(()=>carService.discount({},100)).to.throw('Invalid input')
        })
        it('should throw for invalid input for 2nd number',()=>{
            expect(()=>carService.discount(100,'invalid')).to.throw('Invalid input')
            expect(()=>carService.discount(100,[])).to.throw('Invalid input')
            expect(()=>carService.discount(100,{})).to.throw('Invalid input')
        
        })
        it('should return no discount for 2 or lower',()=>{
            expect(carService.discount(1,100)).to.equal("You cannot apply a discount")
            expect(carService.discount(2,100)).to.equal("You cannot apply a discount")
        })
        it('should return discount 15% for 3 to 7 parts',()=>{
            expect(carService.discount(3,100)).to.equal('Discount applied! You saved 15$')
            expect(carService.discount(5,100)).to.equal('Discount applied! You saved 15$')
            expect(carService.discount(7,100)).to.equal('Discount applied! You saved 15$')
        })
        it('should return discount 30% for more than 7 parts',()=>{
            expect(carService.discount(8,100)).to.equal('Discount applied! You saved 30$')
            expect(carService.discount(10,100)).to.equal('Discount applied! You saved 30$')
            expect(carService.discount(11,100)).to.equal('Discount applied! You saved 30$')
        })
    })
    describe('testing partsToBuy function',()=>{
        it('should throw error for invalid inputs',()=>{
            expect(()=>carService.partsToBuy(10,['parts'])).to.throw("Invalid input")
            expect(()=>carService.partsToBuy({},20)).to.throw("Invalid input")
            expect(()=>carService.partsToBuy(10,{})).to.throw("Invalid input")
            expect(()=>carService.partsToBuy(10,'')).to.throw("Invalid input")
            expect(()=>carService.partsToBuy('',20)).to.throw("Invalid input")
            expect(()=>carService.partsToBuy(['parts'],20)).to.throw("Invalid input")
            expect(()=>carService.partsToBuy({},{})).to.throw("Invalid input")
            expect(()=>carService.partsToBuy('','')).to.throw("Invalid input")
        })
        it('should return normally',()=>{
            const partsCatalogList=[{part:'x1',price:105},{part:'x2',price:115}]
            expect(carService.partsToBuy(partsCatalogList,['x1','x3'])).to.equal(105)
            expect(carService.partsToBuy(partsCatalogList,[])).to.equal(0)
            expect(carService.partsToBuy(partsCatalogList,['x3'])).to.equal(0)
            expect(carService.partsToBuy(partsCatalogList,['x1','x2'])).to.equal(220)
        })
    })
})