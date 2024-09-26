const buttons=document.getElementById('buttons')


function onClick(event) {
    const btn=event.target

    if (btn.tagName!='BUTTON') {
        return
    }
    const newValue = Number(btn.textContent.split(' ')[2])+1
    btn.textContent=`Click Me ${newValue}`
}
document.addEventListener('click', onClick)

for (let i = 0; i < 10; i++) {
    const btn=document.createElement('button')
    btn.textContent='Click Me 0'
    buttons.appendChild(btn)
}

//event.stopPropagation() // spira na syshtoto nivo
//event.stopImmediatePropagation() // spira na syshtoto nivo i na po sledvasht element izpylnqva samo za syotvetent element