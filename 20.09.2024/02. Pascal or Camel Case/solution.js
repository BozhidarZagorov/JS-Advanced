function solve() {
  const input= document.querySelector('#text').value.toLowerCase().trim().split(' ')
  const coversionEl=document.querySelector('#naming-convention').value.toLowerCase()

  const resultEl=document.querySelector('#result')


  if (input ==='' || coversionEl ==='') {
    return
  }

  let result=''

  if (coversionEl==='camel case') {

    result=input[0] + input.slice(1).map((word) => word[0].toUpperCase() + word.slice(1)).join('')

  }else if (coversionEl==='pascal case') {
    
    result=input.map((word) => word[0].toUpperCase() + word.slice(1)).join('')

  }else{
    result = 'Error!'
  }
  resultEl.textContent=result
}