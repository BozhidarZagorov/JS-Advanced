window.addEventListener("load", solve);

function solve() {
 
    const gemEl = document.getElementById('gem-name')
    const colorEl = document.getElementById('color')
    const caratsEl = document.getElementById('carats')
    const priceEl = document.getElementById('price')
    const typeEl = document.getElementById('type')
    const addButtonEl = document.getElementById('add-btn')

    const previewList = document.getElementById('preview-list')
    const collectionList = document.getElementById('collection')

    addButtonEl.addEventListener('click', addButtonClickHandler)

    function addButtonClickHandler(e) {
        // e.preventDefault()
        const inputEls=[gemEl,colorEl,caratsEl,priceEl,typeEl]

        if (inputEls.some(element=>element.value == '')) {
            return
        }

        const previewEl = createPrevieEls(gemEl.value,colorEl.value,caratsEl.value,priceEl.value,typeEl.value)

        previewList.appendChild(previewEl)

        e.currentTarget.setAttribute('disabled', 'disabled')

        inputEls.forEach(element=>element.value='')
    }

    function createPrevieEls(name,color,carats,price,type) {

        const articleHeaderEl = document.createElement('h4')
        articleHeaderEl.textContent=name

        const colorParaEl = document.createElement('p')
        colorParaEl.textContent=`Color: ${color}`

        const caratsParaEl = document.createElement('p')
        caratsParaEl.textContent=`Carats: ${carats}`

        const priceParaEl =document.createElement('p')
        priceParaEl.textContent=`Price: ${price}$`

        const typeParaEl = document.createElement('p')
        typeParaEl.textContent=`Type: ${type}`

        const articleEl = document.createElement('article')
        articleEl.appendChild(articleHeaderEl)
        articleEl.appendChild(colorParaEl)
        articleEl.appendChild(caratsParaEl)
        articleEl.appendChild(priceParaEl)
        articleEl.appendChild(typeParaEl)

        const saveBtnEl =document.createElement('button')
        saveBtnEl.classList.add('save-btn')
        saveBtnEl.textContent='Save to Collection'

        const editBtnEl =document.createElement('button')
        editBtnEl.classList.add('edit-btn')
        editBtnEl.textContent='Edit Information'
     

        const cancelBtnEl =document.createElement('button')
        cancelBtnEl.classList.add('cancel-btn')
        cancelBtnEl.textContent='Cancel'

        const liEl=document.createElement('li')
        liEl.classList.add('gem-info')

        liEl.appendChild(articleEl)
        liEl.appendChild(saveBtnEl)
        liEl.appendChild(editBtnEl)
        liEl.appendChild(cancelBtnEl)

        editBtnEl.addEventListener('click',(e)=>{
            gemEl.value = name
            colorEl.value = color
            caratsEl.value = carats
            priceEl.value = price
            typeEl.value = type

            e.currentTarget.parentElement.remove()

            addButtonEl.removeAttribute('disabled')
        })

        saveBtnEl.addEventListener('click',(e)=>{

            const collectionItemPara = document.createElement('p')
            collectionItemPara.classList.add('collection-item')
            collectionItemPara.textContent=`${name} - Color: ${color}/ Carats: ${carats}/ Price: ${price}$/ Type: ${type}`

            const collectionListItem = document.createElement('li')
            collectionListItem.appendChild(collectionItemPara)

            collectionList.appendChild(collectionListItem)

            e.currentTarget.parentElement.remove()

            addButtonEl.removeAttribute('disabled')
        })

        cancelBtnEl.addEventListener('click',(e)=>{
            e.currentTarget.parentElement.remove()

            addButtonEl.removeAttribute('disabled')
        })

        return liEl
    }

}
