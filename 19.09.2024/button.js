let counter = 0

function sayHello() {
    counter++
    alert(`You clicked the button ${counter} times!`)
    const input = confirm(`Are you having fun yet?`)

    console.log(`The user said `+ (input ? `Yes` : `No`));
    
}