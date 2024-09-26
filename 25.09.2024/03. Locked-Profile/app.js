function lockedProfile() {
    
    [...document.querySelectorAll('button')].forEach(button => {
        button.addEventListener('click', clickEventHandler)
    })

    function clickEventHandler(event) {
        // console.log(event.target);

        const profile=event.target.closest('.profile')
        // console.log(profile);
        
        const state = profile.querySelector('input[type="radio"]:checked').value
        // console.log(state);
        

        if (state == 'unlock') {

            const hiddenFieldsEl=profile.querySelector('[id*="HiddenFields"]')

            // console.log(hiddenFieldsEl);
            

            if (hiddenFieldsEl.style.display =='block') {

                hiddenFieldsEl.style.display = 'none'
                event.target.textContent = 'Show more'
            }else{

                hiddenFieldsEl.style.display = 'block'
                event.target.textContent = 'Hide it'
            }
        }

    }

}