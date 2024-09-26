function attachGradientEvents() {
    const output = document.getElementById('result')
    const box=document.getElementById('gradient')
    box.addEventListener('mousemove',onMove)

    function onMove(event) {
        // const offset=Math.floor(event.offsetX/box.clientWidth*100)+'%' //main task
        const offset=(event.offsetX/box.clientWidth*100).toFixed(2)+'%' //more cooler

        output.textContent=offset
    }
}