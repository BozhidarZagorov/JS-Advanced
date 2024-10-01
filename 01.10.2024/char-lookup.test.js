import { expect } from "chai";
import { lookupChar } from "./char-lookup";
import { describe, it } from "node:test";

describe('Test lookupChar', function() {
    it('Should return undefined if invalid argument is passed',()=>{
        expect(lookupChar(1,1)).to.be.undefined
        expect(lookupChar('test',2.3)).to.be.undefined

    })
    it('Should return Incorrect index if index argument is out of bounds',()=>{
        expect(lookupChar('test',20)).to.equal('Incorrect index')
        expect(lookupChar('test',-1)).to.equal('Incorrect index')

    })
    it('Should return correct char at given index',()=>{
        expect(lookupChar('Nice',3)).to.equal('e')
    })

})