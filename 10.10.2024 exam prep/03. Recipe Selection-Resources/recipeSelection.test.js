import { expect } from 'chai';
import { recipeSelection } from './recipeSelection.js'

describe('recipe selection',function () {
    describe('isTypeSuitable',function () {
        it('output vegeterian restrictions', ()=>{
            expect(recipeSelection.isTypeSuitable('Meat','Vegetarian')).to.equal('This recipe is not suitable for vegetarians')
        })
        it('output vegen restrictions', ()=>{
            expect(recipeSelection.isTypeSuitable('Meat','Vegan')).to.equal('This recipe is not suitable for vegans')
            expect(recipeSelection.isTypeSuitable('Dairy','Vegan')).to.equal('This recipe is not suitable for vegans')

        })
        it('allows any other combination', ()=>{
            expect(recipeSelection.isTypeSuitable('Dairy','Vegetarian')).to.equal('This recipe is suitable for your dietary restriction')
            expect(recipeSelection.isTypeSuitable('Celery','Vegan')).to.equal('This recipe is suitable for your dietary restriction')
            expect(recipeSelection.isTypeSuitable('Salo','Keto')).to.equal('This recipe is suitable for your dietary restriction')
        })
        it('validates input parameters', ()=>{
            expect(()=> recipeSelection.isTypeSuitable(1,'Vegetarian')).to.throw("Invalid input");
            expect(()=> recipeSelection.isTypeSuitable('Vegetarian',1)).to.throw("Invalid input");
        })
    })
    describe('isItAffortable',function () {
        it('prints affordable message',()=>{
            expect(recipeSelection.isItAffordable(1,10)).to.equal('Recipe ingredients bought. You have 9$ left')
        })

        it('prints too expensive message',()=>{
            expect(recipeSelection.isItAffordable(2,1)).to.equal('You don\'t have enough budget to afford this recipe')
        })

        it('prints affordable message with zero leftover',()=>{
            expect(recipeSelection.isItAffordable(1,1)).to.equal('Recipe ingredients bought. You have 0$ left')
        })
        it('validates input', ()=>{
            expect(()=>recipeSelection.isItAffordable('1',1)).to.throw()
            expect(()=>recipeSelection.isItAffordable(1,'1')).to.throw()
        })
    })
    describe('getRecipesByCategory',function () {
        it('filters recipes', ()=>{
            const input=[{title:'Tofu',category: 'Asian'}, {title: 'Trout',category:'Seafood'}]
            const result=recipeSelection.getRecipesByCategory(input,'Seafood')
            expect(result.length).to.equal(1)
            expect(result).to.contain('Trout')
        })
        it('works with empty input', ()=>{
            const input=[]
            const result=recipeSelection.getRecipesByCategory(input,'Seafood')
            expect(result.length).to.equal(0)
        })
        it('returns empty array when nothing matches', ()=>{
            const input=[{title:'Tofu',category: 'Asian'}, {title: 'Trout',category:'Seafood'}]
            const result=recipeSelection.getRecipesByCategory(input,'Keto')
            expect(result.length).to.equal(0)
        })
        it('validates input', ()=>{
            expect(()=>recipeSelection.getRecipesByCategory([],1)).to.throw()
            expect(()=>recipeSelection.getRecipesByCategory('aaa','Keto')).to.throw()

        })
    })
})