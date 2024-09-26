// function toggle() {
//     // const buttonEl = document.getElementsByClassName('button')
//     const buttonEl = document.querySelector('.button')
//     const extraEl = document.querySelector('#extra')
//     const initialDisplay = extraEl.style.display

//     if (initialDisplay==='block') {
//         extraEl.style.display='none'
//         buttonEl.textContent='More'
//     }else{
//         extraEl.style.display='block'
//         buttonEl.textContent='Less'
//     }
// }

function toggle() {
    const buttonEl=document.querySelector('.button')

    buttonEl.classList.toggle('opened')
}