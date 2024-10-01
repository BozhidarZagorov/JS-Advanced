import { expect } from "chai"
import { sum } from "./sumNumbers.js"

describe('Sum Numbers', function() {
    describe('happy path',function () {
        it('works with numbers',()=>{
            expect(sum([1,1])).to.equal(2)
        })

        it('works with more numbers',()=>{
            expect(sum([1,1,1])).to.equal(3)
        })
    })
    describe('Edge cases',function() {
        it('returns 0 for empty array',()=>{
            expect(sum([])).to.equal(0)
        })
    })
    describe('validation',function() {
        it('doesnt work with string', ()=>{
            expect(sum('aaa')).to.be.NaN
        })
    })
    describe('Test overload',function() {
        it('works with many numbers',()=>{
            expect(sum([10,20,30,40])).to.equal(100)
        })
        it('sums negative numbers',()=>{
            expect(sum([-1,-2,-3,-4])).to.equal(-10)
        })
    })
})