function solve() {
  const input=document.querySelector('#input')
  const outputEl=document.querySelector('#output')
  
  if (input.value==='') {
    return
  }
  const sentances = input.value.split('. ')
  const sentancePerParagraph = 3

  const numberOfParagrs=Math.ceil(sentances.length/sentancePerParagraph)

  let output=''

  for (let i = 0; i < numberOfParagrs; i++) {
    const p = i*numberOfParagrs
    const text = sentances.slice(p,(p+sentancePerParagraph)).join('. ')
    output+=`<p>${text}</p>`
    
  }
  outputEl.innerHTML=output
}