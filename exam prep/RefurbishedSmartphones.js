class RefurbishedSmartphones{
    availableSmartphones=[]
    soldSmartphones=[]

    constructor(retailer,revenue=0){
        this.retailer=retailer
        this.revenue=revenue

    }
    addSmartphone(model,storage,price,condition){
        if (!model) {
            throw new Error(`Invalid smartphone!`)
        }
        if (!Number.isInteger(storage)||storage<0) {
            throw new Error(`Invalid smartphone!`)
        }
        if (price<0) {
            throw new Error(`Invalid smartphone!`)
        }
        if (!condition) {
            throw new Error(`Invalid smartphone!`)
        }
        const newSmartphone = {
            model,
            storage,
            price,
            condition
        }
        this.availableSmartphones.push(newSmartphone)

        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
    }

    sellSmartphone(model,desiredStorage){
        const smartphone = this.availableSmartphones.find(phone=>phone.model==model)
        if (!smartphone) {
            throw new Error(`${model} was not found!`)
        }
        let soldPrice = smartphone.price
        let storageDiff =desiredStorage - smartphone.storage

        if (storageDiff>0 && storageDiff <= 128) {
            soldPrice=soldPrice*0.9
        }
        if (storageDiff>0 && storageDiff > 128) {
            soldPrice=soldPrice*0.8
        }
        this.availableSmartphones=this.availableSmartphones.filter(phone=>phone.model!==model)

        this.soldSmartphones.push({
            model:smartphone.model,
            storage:smartphone.storage,
            price:soldPrice
        })
        this.revenue+=soldPrice

        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }

    upgradePhones(){
        let resltMessage = ['Upgraded Smartphones:']

        if (this.availableSmartphones.length===0) {
            throw new Error('There are no available smartphones!')
        }
        this.availableSmartphones.forEach(phone=>{
            phone.storage*=2

            const msg=`${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`

            resltMessage.push(msg)
        })
        return resltMessage.join('\n')
    }

    salesJournal(criteria){
        const criterias = ['storage','model']
        if (!criterias.includes(criteria)) {
            throw new Error('Invalid criteria!')
        }
        const sorters = {
            storage: (a,b)=>b.storage-a.storage,
            model: (a,b)=>a.model.localeCompare(b.model)
        }
        let msgs = [`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`,`${this.soldSmartphones.length} smartphones sold:`]
        this.soldSmartphones.sort(sorters[criteria]).forEach(phone=>msgs.push(`${phone.model} / ${phone.storage} GB / ${phone.price.toFixed(2)}$`))

        return msgs.join('\n')
    }
}
// let retailer = new RefurbishedSmartphones('SecondLife Devices');console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000,'good'));console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800,'perfect'));console.log(retailer.addSmartphone('', 512, 1900, 'good'));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');console.log(retailer.upgradePhones());

// let retailer = new RefurbishedSmartphones('SecondLife Devices');retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');retailer.sellSmartphone('Samsung S20 Ultra', 256);retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);console.log(retailer.salesJournal('model'))
