function addItem() {
    const input = document.getElementById('newItemText')
    const list = document.getElementById('items')
    const newItem=document.createElement('li')
    if (input.value==='') {
        return
    }
    newItem.textContent=input.value
    list.appendChild(newItem)
    input.value=''
}