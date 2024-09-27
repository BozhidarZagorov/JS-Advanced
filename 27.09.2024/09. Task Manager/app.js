function solve() {

    const addTaskFromEl=document.querySelector('form')

    addTaskFromEl.addEventListener('submit', e=>{
        e.preventDefault()
        // console.log('form submit');

        const title = e.target.querySelector('#task').value
        const description = e.target.querySelector('#description').value
        const date = e.target.querySelector('#date').value

        taskCreate(title,description,date)
        e.target.reset()
        // if (title&&description&&date) {
            
        // }
    })
    function taskCreate(title,description,date) {

        const areaOpenEl = document.querySelector('.wrapper section:nth-child(2) > div:nth-child(2)')

        const taskEl = document.createElement('article')
        const h3=document.createElement('h3')
        const p1=document.createElement('p')
        const p2=document.createElement('p')

        h3.textContent=title
        p1.textContent=`Description: ${description}`
        p2.textContent=`Due Date: ${date}`

        // taskEl.append(h3,p1,p2)

        const actionsEl = document.createElement('div')
        const btnProgress =document.createElement('button')
        const btnDelete =document.createElement('button')


        console.log(taskEl);
        
        actionsEl.className='flex'
        btnProgress.textContent='Start'
        btnProgress.className='green'

        btnDelete.textContent='Delete'
        btnDelete.className='red'

        btnProgress.addEventListener('click',e=>{
            const taskEl=e.target.closest('article')
            const nextSectionEl = e.target.closest('section').nextElementSibling.querySelector('div:last-child')
            const currActionEl=e.target.closest('div')

            if (e.target.textContent==='Start') {
                e.target.textContent='Finish'
                e.target.className='orange'
                e.target.remove()
                currActionEl.append(e.target)
            }else{
                currActionEl.remove()
            }
            
            taskEl.remove()
            nextSectionEl.append(taskEl)
        })

        btnDelete.addEventListener('click', ()=>taskDelete(taskEl))

        actionsEl.append(btnProgress,btnDelete)
        taskEl.append(h3,p1,p2,actionsEl)
        areaOpenEl.append(taskEl)
    }
    function taskDelete(taskEl){
        taskEl.remove()
    }
    // taskCreate('Check timesheet','Do the job!','TODAY!')
}




