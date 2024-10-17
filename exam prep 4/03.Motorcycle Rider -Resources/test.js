import { expect } from "chai";
import { motorcycleRider } from "./Motorcycle Rider.js";

describe('Test suite',function () {
    describe('licenseRestriction functionality',()=>{
        it('return correct output for AM',()=>{
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
        })
        it('return correct output for A1',()=>{
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
        })
        it('return correct output for A2',()=>{
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.')
        })
        it('return correct output for A',()=>{
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.')
        })
        it('throw err for invalid input',()=>{
            expect(()=>motorcycleRider.licenseRestriction('Z')).to.throw('Invalid Information!')
        })
        it('throw err for invalid input has to be string',()=>{
            expect(()=>motorcycleRider.licenseRestriction(5)).to.throw('Invalid Information!')
        })
    })
    describe('motorcycleShowroom',()=>{
        it('Should return 1 element form array',()=>{
            expect(motorcycleRider.motorcycleShowroom(['50'],50)).to.equal('There are 1 available motorcycles matching your criteria!')
        })
        it('Should return all elements form array',()=>{
            expect(motorcycleRider.motorcycleShowroom(['50','51'],100)).to.equal('There are 2 available motorcycles matching your criteria!')
        })
        it('Should return only matching element form array',()=>{
            expect(motorcycleRider.motorcycleShowroom(['50','51'],50)).to.equal('There are 1 available motorcycles matching your criteria!')
        })
        it('throws for non-array',()=>{
            expect(()=>motorcycleRider.motorcycleShowroom('50',50)).to.throw('Invalid Information!')
        })
        it('throws for non-array',()=>{
            expect(()=>motorcycleRider.motorcycleShowroom(5,50)).to.throw('Invalid Information!')
        })
        it('throws for non-array',()=>{
            expect(()=>motorcycleRider.motorcycleShowroom({},50)).to.throw('Invalid Information!')
        })
        it('throws for non-num',()=>{
            expect(()=>motorcycleRider.motorcycleShowroom(['50'],'50')).to.throw('Invalid Information!')
        })
    })
    describe('otherSpendings',()=>{
        it('returns correct sum without discount',()=>{
            expect(motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil','oil filter'],false)).to.equal('You spend $600.00 for equipment and consumables!')
        })
        it('returns correct sum with discount',()=>{
            expect(motorcycleRider.otherSpendings(['helmet','jacked'],['engine oil','oil filter'],true)).to.equal('You spend $540.00 for equipment and consumables with 10% discount!')
        })
        it('throws for non-arr equipment',()=>{
            expect(()=>motorcycleRider.otherSpendings('helmet',['engine oil','oil filter'],false)).to.throw('Invalid Information!')
        })
        it('throws for non-arr consumables',()=>{
            expect(()=>motorcycleRider.otherSpendings(['helmet'],'engine oil',false)).to.throw('Invalid Information!')
        })
        it('throws for non-boolean discount',()=>{
            expect(()=>motorcycleRider.otherSpendings(['helmet'],['engine oil','oil filter'],1)).to.throw('Invalid Information!')
        })
    })
})