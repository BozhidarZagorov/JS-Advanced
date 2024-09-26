function encodeAndDecodeMessages() {
    
    document.querySelector('#main > div:nth-child(1) button').addEventListener('click', event=>{
        const encodeInputEl=event.target.parentNode.querySelector('textarea')
        const msg = encodeInputEl.value
        const receiver = document.querySelector('#main > div:nth-child(2) textarea')
        
        const encodedMsg=msg.split('').map((ch)=>String.fromCharCode(ch.charCodeAt()+1)).join('')

        receiver.value=encodedMsg
        encodeInputEl.value=''
    })

    document.querySelector('#main>div:nth-child(2) button').addEventListener('click', event=>{

        const decodeEl=event.target.parentNode.querySelector('textarea')
        const msg=decodeEl.value
        
        const decodedMsg =msg.split('').map((ch)=>String.fromCharCode(ch.charCodeAt()-1)).join('')
        decodeEl.value=decodedMsg
    })
}