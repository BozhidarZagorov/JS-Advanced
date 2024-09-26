function search() {
   const townsListEl = document.querySelector('#towns')
   const searchFieldEl=document.querySelector('#searchText')
   const resultEl=document.querySelector('#result')

   const searchStr=searchFieldEl.value.toLowerCase()

   if (searchStr === '') {
      return
   }

   const townsArray = Array.from(townsListEl.children)
   const towns = townsArray.map((el)=>el.textContent.toLowerCase())


   townsArray.forEach((el)=>{
      el.style.fontWeight='normal'
      el.style.textDecoration='none'

   })


   let result=[]
   for (let i = 0; i < towns.length; i++) {
      if (towns[i].indexOf(searchStr)>=0) {
         result.push(i)
      }
      
   }
   result.forEach((position,index)=>{
      townsListEl.children[position].style.fontWeight='bold'
      townsListEl.children[position].style.textDecoration='underline'

   })
   console.log(result);

   resultEl.textContent=`${result.length} matches found`
   searchFieldEl.value=''

}
