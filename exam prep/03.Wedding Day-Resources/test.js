import { expect } from "chai";
import { weddingDay } from "./weddingDay.js"

describe('WeddingDay', ()=>{
    describe('PickVenue',()=>{
        it('Should meet the requirements',()=>{
        const capacity = 150
        const pricePerGuest = 120
        expect(weddingDay.pickVenue(capacity,pricePerGuest,'Varna')).to.equal(`This venue meets the requirements, with capacity of ${capacity} guests and ${pricePerGuest}$ cover.`)
        })
        it('Should have valid input data',()=>{
            expect(()=>weddingDay.pickVenue(1,2,'')).to.throw('Invalid Information')
            expect(()=>weddingDay.pickVenue(1,2,undefined)).to.throw('Invalid Information')
            expect(()=>weddingDay.pickVenue(1,2,3)).to.throw('Invalid Information')
            expect(()=>weddingDay.pickVenue([1],2,'Sofia')).to.throw('Invalid Information')
            expect(()=>weddingDay.pickVenue(1,{},'Sofia')).to.throw('Invalid Information')
            expect(()=>weddingDay.pickVenue([],{},'Sofia')).to.throw('Invalid Information')
        })
        it('Should throw if location is different from varna', ()=>{
            expect(()=>weddingDay.pickVenue(150,120,'Sofia')).to.throw("The location of this venue is not in the correct area!")
        })
        it('Should meet the requirement',()=>{
            expect(weddingDay.pickVenue(149,120,'Varna')).to.equal('This venue does not meet your requirements!')
            expect(weddingDay.pickVenue(150,121,'Varna')).to.equal('This venue does not meet your requirements!')
        })
        
    })
    describe('otherSpendings', ()=>{
        it('Should return spending for each option without discount',()=>{
            expect(weddingDay.otherSpendings(['flowers'],['pictures'],false)).to.equal(`You spend 1200$ for wedding decoration and photography!`)
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'],['video'],false)).to.equal(`You spend 1700$ for wedding decoration and photography!`)
            expect(weddingDay.otherSpendings(['flowers','Fabric drapes and curtains'],['video','pictures'],false)).to.equal(`You spend 2900$ for wedding decoration and photography!`)
        })
        it('Should return spending for each option with discount',()=>{
            expect(weddingDay.otherSpendings(['flowers'],['pictures'],true)).to.equal(`You spend ${1200*0.85}$ for wedding decoration and photography with 15% discount!`)
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'],['video'],true)).to.equal(`You spend ${1700*0.85}$ for wedding decoration and photography with 15% discount!`)
            expect(weddingDay.otherSpendings(['flowers','Fabric drapes and curtains'],['video','pictures'],true)).to.equal(`You spend ${2900*0.85}$ for wedding decoration and photography with 15% discount!`)
        })

        it('Should have valid input data',()=>{
            expect(()=>weddingDay.otherSpendings({},{},{})).to.throw('Invalid Information!')
            expect(()=>weddingDay.otherSpendings(1,2,3)).to.throw('Invalid Information!')
            expect(()=>weddingDay.otherSpendings(false,false,false)).to.throw('Invalid Information!')
            expect(()=>weddingDay.otherSpendings('','','')).to.throw('Invalid Information!')
            expect(()=>weddingDay.otherSpendings(null,null,null)).to.throw('Invalid Information!')
            expect(()=>weddingDay.otherSpendings(NaN,NaN,NaN)).to.throw('Invalid Information!')
            expect(()=>weddingDay.otherSpendings(-1,-2,-3)).to.throw('Invalid Information!')
        })
        it('Should cost 0 if no decoration and photography is given',()=>{
            expect(weddingDay.otherSpendings([],[],true)).to.equal(`You spend ${0}$ for wedding decoration and photography with 15% discount!`)
            expect(weddingDay.otherSpendings([],[],false)).to.equal(`You spend ${0}$ for wedding decoration and photography!`)
        })
    })
    describe('tableDistribution', ()=>{
        it('Should return join more ppl msg if less than 6 guest on talbe',()=>{
            expect(weddingDay.tableDistribution(50,10)).to.equal(`There is only ${5} people on every table, you can join some tables.`)
        })
        it('Should return information for guests and tables if equal or more than 6 guest on table',()=>{
            expect(weddingDay.tableDistribution(200,20)).to.equal(`You have ${20} tables with ${10} guests on table.`)
        })
        it('Should have valid input',()=>{
            expect(()=>weddingDay.tableDistribution(-1,-1)).to.throw('Invalid Information!')
            expect(()=>weddingDay.tableDistribution(null,null)).to.throw('Invalid Information!')
            expect(()=>weddingDay.tableDistribution(undefined,undefined)).to.throw('Invalid Information!')
            expect(()=>weddingDay.tableDistribution('10','5')).to.throw('Invalid Information!')
            expect(()=>weddingDay.tableDistribution('','')).to.throw('Invalid Information!')
            expect(()=>weddingDay.tableDistribution(true,true)).to.throw('Invalid Information!')
            expect(()=>weddingDay.tableDistribution([],[])).to.throw('Invalid Information!')
            expect(()=>weddingDay.tableDistribution({},{})).to.throw('Invalid Information!')
            expect(()=>weddingDay.tableDistribution([100],[10])).to.throw('Invalid Information!')
        })
    })
})