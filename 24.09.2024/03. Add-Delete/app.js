function addItem() {
    const input = document.getElementById('newItemText')
    const list = document.getElementById('items')
    const newItem=document.createElement('li')
    if (input.value==='') {
        return
    }
    newItem.textContent=input.value
    const deleteBtn=document.createElement('a')
    deleteBtn.textContent='[Delete]'
    deleteBtn.href='#'
    newItem.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', onClick)
    list.appendChild(newItem)
    input.value=''
    
    function onClick(event) {
        const btn=event.target
        btn.parentElement.remove()
    }
}