import { expect } from "chai";
import {onlineStore} from './onlineStore.js'

describe('onlineStore', function () {
    describe('isProductAvailable',function () {
        it('Should throw an error with invalid input types.',()=>{
            expect(()=>onlineStore.isProductAvailable(0,0)).to.throw('Invalid input.')
            expect(()=>onlineStore.isProductAvailable('123','123')).to.throw('Invalid input.')
            expect(()=>onlineStore.isProductAvailable(1,'123')).to.throw('Invalid input.')
        })
        it('Should return an error message when stockQuantity is 0 or less.',()=>{
            const product = 'Pears'
            expect(onlineStore.isProductAvailable(product,0)).to.equal(`Sorry, ${product} is currently out of stock.`)
            expect(onlineStore.isProductAvailable(product,-5)).to.equal(`Sorry, ${product} is currently out of stock.`)

        })
        it('Should return successful message when stockQuantity is more than 0.',()=>{
            const product = 'Pears'
            expect(onlineStore.isProductAvailable(product,20)).to.equal(`Great! ${product} is available for purchase.`)
        })

    })
    describe('canAffordProduct',function () {

        it('Should throw an error with invalid input types.',()=>{
            expect(()=>onlineStore.canAffordProduct('0',0)).to.throw('Invalid input.')
            expect(()=>onlineStore.canAffordProduct(0,'123')).to.throw('Invalid input.')
            expect(()=>onlineStore.canAffordProduct('123','123')).to.throw('Invalid input.')
        })

        it('Should return insufficient funds if account ballance is less than product price.',()=>{
            expect(onlineStore.canAffordProduct(20,10)).to.equal("You don't have sufficient funds to buy this product.")
        })
        it('Should return success if account ballance is langer than product price.',()=>{
            expect(onlineStore.canAffordProduct(10,20)).to.equal("Product purchased. Your remaining balance is $10.")
            expect(onlineStore.canAffordProduct(20,20)).to.equal("Product purchased. Your remaining balance is $0.")

        })

    })
    describe('getRecommendedProducts',function () {
        it('Should throw an error with invalid input types.',()=>{
            expect(()=>onlineStore.getRecommendedProducts(0,'0')).to.throw('Invalid input.')
            expect(()=>onlineStore.getRecommendedProducts([1,2,3],1)).to.throw('Invalid input.')
            expect(()=>onlineStore.getRecommendedProducts(1,1)).to.throw('Invalid input.')
        })
        it('Should return no recommended product if there arent any in the category.',()=>{
            const products=[
                {name:'Apple',category:'Fruits'},
                {name:'Pear',category:'Fruits'},
                {name:'Tomato',category:'Fruits'}
            ]
            const category='Vegetables'

            expect(onlineStore.getRecommendedProducts(products,category)).to.equal(`Sorry, we currently have no recommended products in the ${category} category.`)
        })
        it('Should return recommended product list if there are in the category.',()=>{
            const products=[
                {name:'Apple',category:'Fruits'},
                {name:'Pear',category:'Fruits'},
                {name:'Tomato',category:'Fruits'}
            ]
            const category='Fruits'

            expect(onlineStore.getRecommendedProducts(products,category)).to.equal(`Recommended products in the ${category} category: ${products.map(entry=>entry.name).join(', ')}`)
        })
        
    })
})