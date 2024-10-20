import { expect } from 'chai'
import { streamingServiceSelector } from './streamingServiceSelector.js'

describe('streamingService test',function (){
    describe('testing selectingContent',()=>{
        it('throws on invalid genre',()=>{
            //str, str, str
            expect(()=>streamingServiceSelector.selectingContent('Movie','YouTube','AmericanHumor')).to.throw(`We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.`)
            expect(()=>streamingServiceSelector.selectingContent('Movie','YouTube','Soap')).to.throw(`We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.`)
        })
        it('throws on invalid type',()=>{
            expect(()=>streamingServiceSelector.selectingContent('ShortFilm','YouTube','Action')).to.throw(`We currently only support 'Movie' or 'TV Show' types.`)
        })
        it('returns successfull msg',()=>{
            expect(streamingServiceSelector.selectingContent('Movie','Netflix','Action')).to.equal('You can watch this Action Movie on Netflix. Enjoy your Action-filled experience!')
            expect(streamingServiceSelector.selectingContent('TV Show','Netflix','Sci-Fi')).to.equal('You can watch this Sci-Fi TV Show on Netflix. Enjoy your Sci-Fi-filled experience!')
        })
    })
    describe('testing availablePlatforms',()=>{
        it('throws on invalid inputs on number',()=>{
            //array and num
            expect(()=>streamingServiceSelector.availablePlatforms([],'')).to.throw("Invalid platform selection.")
            expect(()=>streamingServiceSelector.availablePlatforms([],[])).to.throw("Invalid platform selection.")
            expect(()=>streamingServiceSelector.availablePlatforms([],{})).to.throw("Invalid platform selection.")
            expect(()=>streamingServiceSelector.availablePlatforms([],-1)).to.throw("Invalid platform selection.")
            expect(()=>streamingServiceSelector.availablePlatforms([],3)).to.throw("Invalid platform selection.") 

        })
        it('throws on invalid inputs on array',()=>{
            expect(()=>streamingServiceSelector.availablePlatforms(0,1)).to.throw("Invalid platform selection.")
            expect(()=>streamingServiceSelector.availablePlatforms('',2)).to.throw("Invalid platform selection.")
            expect(()=>streamingServiceSelector.availablePlatforms({},1)).to.throw("Invalid platform selection.")
            expect(()=>streamingServiceSelector.availablePlatforms('',0)).to.throw("Invalid platform selection.")
        })
        it('returns on valid inputs successfull msg',()=>{
            expect(streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"],0)).to.equal("Other available platforms are: HBO, Disney+.")
            expect(streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"],2)).to.equal("Other available platforms are: Netflix, HBO.")
        })
    })
    describe('testing contentRationg',()=>{
        it('throws on invalid inputs on first num',()=>{
            expect(()=>streamingServiceSelector.contentRating(-1,1)).to.throw("Invalid runtime or rating.")
            expect(()=>streamingServiceSelector.contentRating('',2)).to.throw("Invalid runtime or rating.")
            expect(()=>streamingServiceSelector.contentRating([],3)).to.throw("Invalid runtime or rating.")
            expect(()=>streamingServiceSelector.contentRating({},4)).to.throw("Invalid runtime or rating.")
            // num , num
        })
        it('throws on invalid inputs on second num',()=>{
            expect(()=>streamingServiceSelector.contentRating(60,-1)).to.throw("Invalid runtime or rating.")
            expect(()=>streamingServiceSelector.contentRating(60,11)).to.throw("Invalid runtime or rating.")
            expect(()=>streamingServiceSelector.contentRating(120,'')).to.throw("Invalid runtime or rating.")
            expect(()=>streamingServiceSelector.contentRating(180,[])).to.throw("Invalid runtime or rating.")
            expect(()=>streamingServiceSelector.contentRating(180,{})).to.throw("Invalid runtime or rating.")
        })
        it('returns on valid inputs successfull msg with 7 or grater rating',()=>{
            expect(streamingServiceSelector.contentRating(60,7)).to.equal(`This content is highly rated (7/10) and has a runtime of 1.00 hours. Enjoy your watch!`)
            expect(streamingServiceSelector.contentRating(60,10)).to.equal(`This content is highly rated (10/10) and has a runtime of 1.00 hours. Enjoy your watch!`)
        })
        it('returns on valid inputs successfull msg with 6 or lower rating',()=>{
            expect(streamingServiceSelector.contentRating(120,6)).to.equal(`This content has a lower rating (6/10) and runs for 2.00 hours. You might want to check reviews first.`)
            expect(streamingServiceSelector.contentRating(60,0)).to.equal(`This content has a lower rating (0/10) and runs for 1.00 hours. You might want to check reviews first.`)
        })
    })
})
