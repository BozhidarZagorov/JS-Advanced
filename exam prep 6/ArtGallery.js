class ArtGallery {
    constructor(creator) {
        this.creator=creator
        this.possibleArticles = {'picture':200,"photo":50,'item':250}
        this.listOfArticles=[]
        this.guests=[]
    }
    addArticle(articleModel,articleName,quantity){
        articleModel=articleModel.toLowerCase()
        let isInTheArr=false
        if (!this.possibleArticles[articleModel]) {
            throw new Error('This article model is not included in this gallery!')
        }
        for (const element of this.listOfArticles) {
            if (element.articleName===articleName && element.articleModel === articleModel) {
                element.quantity+=Number(quantity)
                isInTheArr=true
            }
        }
        if (!isInTheArr) {
            this.listOfArticles.push({articleModel,articleName,quantity})
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }
    inviteGuest(guestName,personality){

        for (const guest of this.guests) {
            if (guest.guestName===guestName) {
                throw new Error (`${guestName} has already been invited.`)
            }
        }
        let obj={guestName,points:0,purchaseArticle:0}
        switch (personality) {
            case 'Vip':
                obj.points=500
                break;
            case "Middle":
                obj.points=250
                break
            default:
                obj.points=50
                break;
        }
        this.guests.push(obj)
        return `You have successfully invited ${guestName}!`
    }
    buyArticle(articleModel,articleName,guestName){
        let article
        let guest
        let isArticleInArr=false
        for (const element of this.listOfArticles) {
            if (element.articleName !==articleName || element.articleModel !==articleModel) {
                isArticleInArr=false
            }else{
                article=element
                isArticleInArr=true
                break
            }
        }
        if (!isArticleInArr) {
            throw new Error('This article is not found.')
        }
        if (article.quantity===0) {
            throw new Error(`The ${articleName} is not available.`)
        }
        let isGuestInArr=false
        for (const element of this.guests) {
            if (element.guestName!==guestName) {
                isGuestInArr=false
            }else{
                isGuestInArr=true
                guest=element
                break
            }
        }
        if (!isGuestInArr) {
            return 'This guest is not invited.'
        }
        if (guest.points<this.possibleArticles[articleModel]) {
            return 'You need more points to purchase the article.'    //test here #1 was  'You need to more points to purchase the article.' //this is the way it was writen in the document so not a typo
        }else{
            article.quantity--
            guest.points-=this.possibleArticles[articleModel]
            guest.purchaseArticle++
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }
    showGalleryInfo(criteria){
        if (criteria==='article') {
            let result='Articles information:'
            for (const element of this.listOfArticles) {
                result+="\n" + `${element.articleModel} - ${element.articleName} - ${element.quantity}`
            }
            return result
        }else{
            let result ="Guests information:"
            for (const element of this.guests) {
                result+='\n' + `${element.guestName} - ${element.purchaseArticle}`
            }
            return result
        }
    }
}

// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
// console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
// console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));


// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));


// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));


// const artGallery = new ArtGallery('Curtis Mayfield'); 
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));
