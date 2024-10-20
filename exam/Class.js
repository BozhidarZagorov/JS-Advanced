class Hotel {
    constructor(initialBudget) {
        this.initialBudget=Number(initialBudget)
        this.roomAvailability={}
        this.supplyStock={}
    }
    restockSupplies(supplies){
        //array
        let result =[]
        for (let i = 0; i < supplies.length; i++) {
            const element = supplies[i].split(' ')
            const supplyName = element[0]
            const supplyQuantity = Number(element[1])
            const supplyTotalPrice = Number(element[2])

            if (this.initialBudget-supplyTotalPrice < 0) {
               result.push(`There was not enough money to restock ${supplyQuantity} ${supplyName}`)
            }else{
                this.initialBudget-=supplyTotalPrice
                if (this.supplyStock.hasOwnProperty(supplyName)) {
                    this.supplyStock[supplyName]+=supplyQuantity
                }else{
                    this.supplyStock[supplyName]=supplyQuantity
                }
                result.push(`Successfully stocked ${supplyQuantity} ${supplyName}`)
            }
        }
        // console.log(this.supplyStock);
        
        return result.join('\n')
    }
    addRoomType(roomType, neededSupplies, pricePerNight){
        //string , arr of strings , number
        if (this.roomAvailability.hasOwnProperty(roomType)) {
            return `The ${roomType} is already available in our hotel, try something different.`

        }else{

            // for (let i = 0; i < neededSupplies.length; i++) {
            //     const element = neededSupplies[i].split(' ')
            //     const supplyName = element[0]
            //     const supplyQuantity=Number(element[1])

            //     if (this.supplyStock.hasOwnProperty(supplyName)) {           //might not be needed
            //         this.supplyStock[supplyName]-=supplyQuantity
            //     }
            //     //else?
            // }

            //should have some type of error msg for insufficient supplies ... none given

            this.roomAvailability[roomType]={
                neededSupplies:neededSupplies,
                pricePerNight:pricePerNight
            }

            const roomTypeCount = Object.keys(this.roomAvailability).length
            return `Great idea! Now with the ${roomType}, we have ${roomTypeCount} types of rooms available, any other ideas?`
        }
        
    }
    showAvailableRooms(){
        const roomTypeCount = Object.keys(this.roomAvailability).length
        if (roomTypeCount===0) {
           return "Our rooms are not ready yet, please come back later..."
        }else{
            const rooms=Object.entries(this.roomAvailability)
            let result =[]
                for (const [roomType,arr] of rooms) {
                    result.push(`${roomType} - $ ${arr.pricePerNight}`)
                }
            return result.join('\n')
        }
    }
    bookRoom(roomType){
        let hasSupply=false
        if (!this.roomAvailability.hasOwnProperty(roomType)) {
            return `There is no ${roomType} available, would you like to book another room?`
        }else{
           const element = Object.entries(this.roomAvailability[roomType])
           const supply = element[0][1]
           for (const type of supply) {
                const split=type.split(' ')
                
                const supplyName = split[0]
                const supplyQuantity=Number(split[1])
                

                if (this.supplyStock.hasOwnProperty(supplyName)&&this.supplyStock[supplyName]-supplyQuantity>=0) {
                    hasSupply=true
                }
                else{
                    hasSupply=false
                    return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`
                }

           }
           if (hasSupply) {
               return `Your booking for ${roomType} has been confirmed! The price is $${this.roomAvailability[roomType].pricePerNight} per night.`
            }
        }
    }
}


// let hotel = new Hotel(500);

// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75","Soap 100 50"]));



// let hotel = new Hotel(500);

// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));


// let hotel = new Hotel(500);

// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

// // console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
// // console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.showAvailableRooms());

// let hotel = new Hotel(500);

// console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

// console.log(hotel.addRoomType("Deluxe Suite", ["Soap 50", "Towels 2"], 200));
// console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
// console.log(hotel.showAvailableRooms());
// console.log(hotel.bookRoom("Apartment"));
// console.log(hotel.bookRoom("Deluxe Suite"));
