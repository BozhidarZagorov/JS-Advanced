function deleteByEmail() {
    const input = document.querySelector('[name="email"]')
    const pattern=input.value.toLowerCase()

    const output = document.getElementById('result')
    if (!pattern) {
        return
    }
    // const table = document.getElementById('customers')
    const rows = document.querySelectorAll('#customers tbody tr')
    let found=false

    for (let i = 0; i < rows.length; i++) {
        const element = rows[i];
        if (element.textContent.toLowerCase().includes(pattern)) {
            element.remove()
            found=true
        }
    }

    input.value=''
    if (found) {
        output.textContent='Deleted.'
    }else{
        output.textContent='Not found.'
    }


}