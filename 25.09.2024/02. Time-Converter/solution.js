function attachEventsListeners() {

    const inputElDays=document.querySelector('#days')
    const inputElHrs=document.querySelector('#hours')
    const inputElMin=document.querySelector('#minutes')
    const inputElSec=document.querySelector('#seconds')

    const buttons = document.querySelectorAll('input[type="button"]')

    const units= {
        days:86400,
        hours:3600,
        minutes:60,
        seconds:1
    }

    function updateUnits(secondsAmount) {
        inputElDays.value=Number(secondsAmount/units.days).toFixed(2)
        inputElHrs.value=Number(secondsAmount/units.hours).toFixed(2)
        inputElMin.value=Number(secondsAmount/units.minutes).toFixed(2)
        inputElSec.value=Number(secondsAmount/units.seconds).toFixed(2)

    }
    function clickEventHandler(e) {
        const inputTimeType=e.target.getAttribute('id').split('Btn')[0]
        const currInputEl = document.querySelector('#'+inputTimeType)
        const currValue=currInputEl.value

        const multiplier=units[inputTimeType]
        updateUnits(currValue*multiplier)
    }

    // buttons.forEach((button)=>{
    //     button.addEventListener('click',e=>{
        //     const inputTimeType=e.target.getAttribute('id').split('Btn')[0]
        //     const currInputEl = document.querySelector('#'+inputTimeType)
        //     const currValue=currInputEl.value

        //     const multiplier=units[inputTimeType]
        //     updateUnits(currValue*multiplier)
        // })

        buttons.forEach((button)=>{
            button.addEventListener('click',clickEventHandler)
        })
    // })
}