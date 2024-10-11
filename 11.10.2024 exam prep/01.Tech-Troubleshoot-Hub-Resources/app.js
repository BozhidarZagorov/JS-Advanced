window.addEventListener('load', solution);

function solution() {
  const formEl = document.querySelector('.container-text > form')
  const addBtnEl = document.querySelector('#add-btn')

  const previewListEl= document.querySelector('.preview-list')
  const pendingListEl= document.querySelector('.pending-list')
  const resolvedListEl= document.querySelector('.resolved-list')

  const formFieldsPrefix=['From:', 'Category:', 'Urgency:', 'Assigned to:', 'Description:']

  const formFieds =Array.from(formEl.querySelectorAll('input, select')) 

  // console.log(formFieds);

  addBtnEl.addEventListener('click',e=>{
    e.preventDefault()
    const emptyFieldsCount = formFieds.filter((el)=>el.value=='')
    if (emptyFieldsCount.length>0) {
      return
    }
    // console.log('yes');
    

    const problemListEl=document.createElement('li')
    problemListEl.className='problem-content'

    const problemElement=document.createElement('article')

    formFieds.forEach((field,index)=>{
      const paragraph = document.createElement('p')
      paragraph.textContent=formFieldsPrefix[index]+' '+field.value
      paragraph.setAttribute('data-value', field.value)
      paragraph.setAttribute('data-field-id', field.getAttribute('id'))
      problemElement.appendChild(paragraph)
    })

    const editBtnEl = document.createElement('button')
    editBtnEl.className='edit-btn'
    editBtnEl.textContent='Edit'
    const continueBtnEl = document.createElement('button')
    continueBtnEl.className='continue-btn'
    continueBtnEl.textContent='Continue'

    problemListEl.appendChild(problemElement)
    previewListEl.appendChild(problemListEl)

    problemListEl.appendChild(editBtnEl)
    problemListEl.appendChild(continueBtnEl)

    editBtnEl.addEventListener('click',()=>{
      eventHandlerEdit(problemListEl)
    })
    continueBtnEl.addEventListener('click',()=>{
      eventHandlerContinue(problemListEl)
    })

    e.target.parentNode.reset()
    e.target.setAttribute('disabled','disabled')
  })
  

  function eventHandlerEdit(problemListEl){
    problemListEl.remove()
    Array.from(problemListEl.children[0].children).forEach((entry)=>{
      document.querySelector('#'+entry.getAttribute('data-field-id')).value=entry.getAttribute('data-value')
    })
    addBtnEl.removeAttribute('disabled')
  }
  function eventHandlerContinue(problemListEl) {
    problemListEl.remove()
    problemListEl.querySelector('button').remove()
    problemListEl.querySelector('button').remove()

    const resolvedBtnEl = document.createElement('button')
    resolvedBtnEl.className='resolve-btn'
    resolvedBtnEl.textContent='Resolved'
    
    resolvedBtnEl.addEventListener('click',()=>{
      eventHandlerResolve(problemListEl)
    })

    problemListEl.appendChild(resolvedBtnEl)
    pendingListEl.appendChild(problemListEl)
  }

  function eventHandlerResolve(problemListEl) {
    problemListEl.remove()
    problemListEl.querySelector('button').remove()
   
    const cleardBtnEl = document.createElement('button')
    cleardBtnEl.className='clear-btn'
    cleardBtnEl.textContent='Clear'

    cleardBtnEl.addEventListener('click',()=>{
      eventHandlerClear(problemListEl)
    })
    problemListEl.appendChild(cleardBtnEl)
    resolvedListEl.appendChild(problemListEl)
  }
  function eventHandlerClear(problemListEl) {
    problemListEl.remove()
    addBtnEl.removeAttribute('disabled')
  }
}

//moje da si vkarvame stoinosti ot scripta kym htmla koito ne sa permanentni i spestqvat vreme
document.querySelector('#employee').value='malelei'
document.querySelector('#category').value='Hardware'
document.querySelector('#urgency').value='Medium'
document.querySelector('#team').value='Hardware Support Division'
document.querySelector('#description').value='Hell'

    
