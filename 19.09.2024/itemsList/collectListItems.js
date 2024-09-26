function extractText() {
    const input = document.getElementById('items')
    const output = document.getElementById('result')


    output.value=''
    for (const item of input.children) {
        output.value+=item.textContent+'\n'
    }
}