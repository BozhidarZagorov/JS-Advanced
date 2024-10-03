import { expect } from "chai";
import { StringBuilder } from "./stringBuilder.js";

describe('StringBuilder', function() {
    let ref

    this.beforeEach(()=> {
        ref = new StringBuilder()
    })
    describe('Constructor',function() {
        it('initializes as empty string with no parameters', () =>{
            expect(ref.toString()).to.equal('')
        })
        it('initializes to starting string', ()=> {
            ref = new StringBuilder('a')
            expect(ref.toString()).to.equal('a')
        })
        it('throws err for non-string values', ()=>{
            expect(()=>new StringBuilder(1)).to.throw()
        })
    })
    describe('append',function() {
        it('can append to empty storage',()=>{
            ref.append('a')
            expect(ref.toString()).to.equal('a')
        })
        it('can append to existing storage',()=>{
            ref.append('a')
            ref.append('a')
            expect(ref.toString()).to.equal('aa')
        })
    })
})