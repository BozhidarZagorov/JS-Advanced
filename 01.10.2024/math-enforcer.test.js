import { expect } from "chai";
import {mathEnforcer} from "./math-enforcer.js"

describe('Test mathEnforcer',function() {
    describe('addFive',function () {
        it('should return correct result with a non-number parameter',()=>{
            expect(mathEnforcer.addFive('hello')).to.be.undefined
            expect(mathEnforcer.addFive([1,2,3])).to.be.undefined
            expect(mathEnforcer.addFive({name:'David'})).to.be.undefined

        })
        it('should return correct result',function() {
            expect(mathEnforcer.addFive(5)).to.equal(10)
            expect(mathEnforcer.addFive(-5)).to.equal(0)
            expect(mathEnforcer.addFive(1.5)).to.closeTo(6.5,0.01)
        })
    })
    describe('substractTen',function () {
        it('should return correct result with a non-number parameter',()=>{
            expect(mathEnforcer.subtractTen('hello')).to.be.undefined
            expect(mathEnforcer.subtractTen([1,2,3])).to.be.undefined
            expect(mathEnforcer.subtractTen({name:'David'})).to.be.undefined
        })
        it('should return correct result',function() {
            expect(mathEnforcer.subtractTen(10)).to.equal(0)
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20)
            expect(mathEnforcer.subtractTen(10.5)).to.closeTo(0.5,0.01)
        })
    })
    describe('sum',function () {
        it('should return correct result with a non-number parameter',()=>{
                expect(mathEnforcer.sum('hello',1)).to.be.undefined
                expect(mathEnforcer.sum(1,[1,2,3])).to.be.undefined
                expect(mathEnforcer.sum({name:'David'})).to.be.undefined
        })
        it('should return correct result',function() {
            expect(mathEnforcer.sum(1,2)).to.equal(3)
            expect(mathEnforcer.sum(-10,5)).to.equal(-5)
            expect(mathEnforcer.sum(10.2,12.3)).to.closeTo(22.5,0.01)
        })
    })
})