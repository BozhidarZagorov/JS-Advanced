class InventoryManager {
    constructor(capacity) {
        this.capacity=capacity
        this.items=new Map()
        this.outOfStock = new Set()
    }
    addItem(itemName,quantity){
        this._validateQuantity(quantity)

        if (this.capacity<=this.items.size + this.outOfStock.size) {
            throw new Error("The inventory is already full.");
            
        }

        this._addItemToStock(itemName,quantity)

        return `Added ${quantity} ${itemName}(s) to the inventory.`
    }

    sellItem(itemName,quantity){
        this._validateQuantity(quantity)

        if (this.items.has(itemName)==false) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
            
        }

        const exisiting = this.items.get(itemName)

        if (exisiting<quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
            
        }

        const newValue = exisiting-quantity

        this.items.set(itemName,exisiting-quantity)
        
        if (newValue == 0) {
            this.items.delete(itemName)
            this.outOfStock.add(itemName)
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`
    }

    restockItem(itemName,quantity){
        this._validateQuantity(quantity)
        this._addItemToStock(itemName,quantity)

        if (this.outOfStock.has(itemName)) {
            this.outOfStock.delete(itemName)
        }
        return `Restocked ${quantity} ${itemName}(s) in the inventory.`
    }

    getInventorySummary(){
        let result = ['Current Inventory:']
        
        for (let [name,qty] of this.items) {
            result.push(`${name}: ${qty}`)
        }
        if (this.outOfStock.size>0) {
            result.push(`Out of Stock: ${[...this.outOfStock.values()].join(', ')}`)
        }

        return result.join('\n')
    }

    _validateQuantity(qty){
        if (qty<=0) {
            throw new RangeError(`Quantity must be greater than zero.`)
        }
    }

    _addItemToStock(itemName,quantity){
        if (this.items.has(itemName)==false) {
            this.items.set(itemName,0)
        }

        const existing = this.items.get(itemName)
        this.items.set(itemName,existing+quantity)
    }
}

// const manager = new InventoryManager(2);console.log(manager.addItem("Drill", 10));console.log(manager.addItem("Hammer", 5));console.log(manager.addItem("Level", 3))

// const manager = new InventoryManager(3);console.log(manager.addItem("Drill", 10));console.log(manager.addItem("Hammer", 5));console.log(manager.addItem("Chisel", 3));console.log(manager.sellItem("Drill", 3));console.log(manager.sellItem("Paintbrush", 2));

// const manager = new InventoryManager(3);console.log(manager.addItem("Drill", 10));console.log(manager.addItem("Hammer", 5));console.log(manager.addItem("Chisel", 3));console.log(manager.sellItem("Drill", 3));console.log(manager.restockItem("Drill", 5));console.log(manager.restockItem("Paintbrush", 1));

// const manager = new InventoryManager(3);console.log(manager.addItem("Drill", 10));console.log(manager.addItem("Hammer", 5));console.log(manager.addItem("Chisel", 3));console.log(manager.sellItem("Drill", 3));console.log(manager.sellItem("Hammer", 5));console.log(manager.restockItem("Drill", 5));console.log(manager.restockItem("Paintbrush", 1));console.log(manager.getInventorySummary())


// //Testing getInventorySummary
// const manager=new InventoryManager(2)

// // "Added 10 Hammer(s) to the inventory.");
// // "Sold 10 Hammer(s) from the inventory.");
//  //"Restocked 5 Chisel(s) in the inventory.");
//  //"Restocked 1 Drill(s) in the inventory.");
//  //"Current Inventory:\nChisel: 5\nDrill: 1\nOut of Stock: Hammer");
// console.log(manager.addItem("Hammer", 10));
// console.log(manager.sellItem("Hammer", 10));
// console.log(manager.restockItem("Chisel", 5));
// console.log(manager.restockItem("Drill", 1));
// console.log(manager.getInventorySummary());



