// (function solve() {
    
//     Array.prototype.last=function () {
//         // return this[this.length-1]
//         return [...this].pop()
//     }

//     Array.prototype.skip=function (n) {
//         if (n<0 || n>this.length - 1) {
//             return
//         }

//         // let result = []

//         // for (let i = n; i < this.length; i++) {
//         //      result.push(this[i])
            
//         // }
//         // return result

//         return this.slice(n)
//     }
//     Array.prototype.take = function (n) {
//         if (n<0 || n>this.length - 1) {
//             return
//         }

//         // let result=[]

//         // for (let i = 0; i < n; i++) {
//         //     result.push(this[i])
            
//         // }
//         // return result

//         return this.slice(0,n)
//     }
//     Array.prototype.sum=function () {
//         // let sum = 0

//         // for (let i = 0; i < this.length; i++) {
//         //     sum+=this[i];
            
//         // }
//         // return sum

//         return this.reduce((acc,cur)=> acc+cur,0)
//     }
//     Array.prototype.average = function () {
//         return this.sum()/this.length
//     }

// })()




// (function solve() {
   
//     String.prototype.ensureStart=function(str){
//         if (!this.toString().startsWith(str)) {
//             return str+this
//         }
//         return this.toString()
//     }
    
//     String.prototype.ensureEnd=function(str){
//         if (!this.toString().endsWith(str)) {
//             return this+str
//         }
//         return this.toString()
//     }

//     String.prototype.isEmpty=function(str){
//         return !this.toString()
//     }

//     String.prototype.truncate=function(n){
        
//         if (this.length<=n) {
//             return this.toString()
//         }

//         if (n < 4) {
//             return '.'.repeat(n)
//         }

//         if (!this.includes(' ')) {
//             return this.substring(0, n-3) + '...'
//         }

//         let wordsArray=this.split(' ')
//         let result = this + '...'

//         while(result.length>n){
//             wordsArray.pop()
//             result=wordsArray.join(' ') + '...'
//         }

//         return result
//     }

//     String.format=function(string, ...params){
//         params.forEach(param =>{
//             string=string.replace(/{\d+}/, param)
//         })
//         return string
//     }

// })()


// function extensibleObject() {
    
//     const object = {
//         extend:function(targetObject) {
//             for (const key in targetObject) {
//                 if (typeof targetObject[key]=='function') {
//                     Object.getPrototypeOf(object)[key]=targetObject[key]
//                 }else{
//                     object[key]=targetObject[key]
//                 }
//             }
//         }
//     }
//     return object
// }

// const targetObject = {
//     targetObjectProperty: 'someString',
//     targetObjectMethod: function () {
//         console.log('Hi from targetObjectMethod')
//     }
// }
// const extentedObject = extensibleObject()
// console.log(extentedObject);

// extentedObject.extend(targetObject)
// console.log(extentedObject);

// extentedObject.targetObjectMethod()




// function solution() {
//     class Balloon {
//         constructor(color,gasWeight) {
//             this.color=color
//             this.gasWeight=gasWeight
//         }
//     }
//     class PartyBalloon extends Balloon {
//         constructor(color,gasWeight,ribbonColor,ribbonLength) {
//             super(color,gasWeight)
            
//             this._ribbon={
//                 color: ribbonColor,
//                 length: ribbonLength
//             }
//         }
//         get ribbon(){
//             return this._ribbon
//         }
//     }
//     class BirthdayBalloon extends PartyBalloon{
//         constructor(color,gasWeight,ribbonColor,ribbonLength,text) {
//             super(color,gasWeight,ribbonColor,ribbonLength)
//             this._text=text
//         }
//         get text(){
//             return this._text
//         }
//     }
//     return{
//         Balloon:Balloon,
//         PartyBalloon:PartyBalloon,
//         BirthdayBalloon:BirthdayBalloon
//     }
// }





// function solution() {

//     class Employee {
//         constructor(name,age) {
//             this.name=name
//             this.age=Number(age)
//             this.tasks = []
//             this.salary = 0
//         }
//         // get salary(){
//         //     return this._salary
//         // }
//         // set salary(value){
//         //     this._salary=Number(value)
//         // }

//         work(){
//             let currentTask = this.tasks.shift()
//             console.log(currentTask);
//             this.tasks.push(currentTask)
//         }
//         collectSalary(){
//             console.log(`${this.name} received ${this.salary} this month.`);
            
//         }
//     }
//     class Junior extends Employee {
//         constructor(name,age) {
//             super(name,age)

//             this.tasks = [`${this.name} is working on a simple task.`]
//         }
//     }
//     class Senior extends Employee {
//         constructor(name,age) {
//             super(name,age)
//             this.tasks = [
//                 `${this.name} is working on a complicated task.`,
//                 `${this.name} is taking time off work.`,
//                 `${this.name} is supervising junior workers.`
//             ]
//         }
//     }
//     class Manager extends Employee {
//         constructor(name,age) {
//             super(name,age)

//             this.dividend = 0
//             this.tasks=[
//                 `${this.name} scheduled a meeting.`,
//                 `${this.name} is preparing a quarterly report.`
//             ]
//         }
//         // get dividend(){
//         //     return this._dividend
//         // }
//         // set dividend(value){
//         //     this._dividend=Number(value)
//         // }
//         collectSalary(){
//             console.log(`${this.name} received ${this.salary+this.dividend} this month.`)
//         }
//     }
//     return{
//         Employee,
//         Junior,
//         Senior,
//         Manager,
//     }
// }


function solution() {
    class Post {
        constructor(title,content) {
            this.title=title
            this.content=content
        }
        toString(){
            let result=''

            result+=`Post: ${this.title}` + '\n'
            result+=`Content: ${this.content}`

            return result
        }
    }
    class SocialMediaPost extends Post {
        constructor(title,content,likes,dislikes) {
            super(title,content)

            this.likes=likes
            this.dislikes=dislikes
            this.comments = []
        }
        addComment(comment){
            this.comments.push(comment)
        }
        toString(){
           let result = super.toString()

           result+='\n' + `Rating: ${this.likes-this.dislikes}` + '\n'
           if (this.comments.length) {
                result+='Comments:' + '\n'
                this.comments.forEach(c => result+=` * ${c}\n`)
           }
           return result.trim()
        }

    }
    class BlogPost extends Post {
        constructor(title,content,views) {
            super(title,content)
            this.views = views
        }
        view(){
            this.views++
            return this
         }
        toString(){
            let result = super.toString()
            
            result+='\n'
            result+=`Views: ${this.views}`

            return result
         }
    }
    return{
        Post,
        SocialMediaPost,
        BlogPost
    }
}





const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
// * Good post
// * Very good post
// * Wow!