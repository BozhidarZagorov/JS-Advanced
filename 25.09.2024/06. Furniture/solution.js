function solve() {

  const btnElGen=document.querySelector('button')
  btnElGen.addEventListener('click',event=>{
    const inputEl=document.querySelector('textarea')
    const data = JSON.parse(inputEl.value)

    const productListEl=document.querySelector('table.table tbody')

    data.forEach(item => {
      
      // console.log(item);
      

      const product = document.createElement('tr')
      const productImgCell = document.createElement('td')
      const productImg = document.createElement('img')
      productImg.setAttribute('src', item.img)
      productImgCell.appendChild(productImg)

      const productNameCell = document.createElement('td')
      productNameCell.textContent=item.name

      const productPriceCell = document.createElement('td')
      productPriceCell.textContent=item.price

      const productDecFactorCell = document.createElement('td')
      productDecFactorCell.textContent=item.decFactor

      const productMarkCell = document.createElement('td')
      const productMarkCheckBox = document.createElement('input')
      productMarkCheckBox.setAttribute('type', 'checkbox')
      productMarkCell.appendChild(productMarkCheckBox)


      product.append(
        productImgCell,
        productNameCell,
        productPriceCell,
        productDecFactorCell,
        productMarkCell
      )

      productListEl.appendChild(product)
    });
  })

  const shopBtnEl=document.querySelectorAll('button')[1]

  shopBtnEl.addEventListener('click', event=>{
    const outputEl = document.querySelectorAll('textarea')[1]

    const data = [...document.querySelectorAll('.table tbody tr:has(input:checked)')].map(item => ({
      name:item.childNodes[1].textContent,
      price:Number(item.childNodes[2].textContent),
      decFactor:Number(item.childNodes[3].textContent)
    }))
    // console.log(data);

    let output=`Bought furniture: ${data.map(i => i.name).join(', ')}\n`
    output+=`Total price: ${Number(data.reduce((acc,el)=>{return acc+=el.price},0)).toFixed(2)}\n`
    output+=`Average decoration factor: ${data.reduce((acc,el)=>{return acc+el.decFactor},0) /data.length}`
    
    outputEl.value=output
    // console.log(output);
  })
}


// second solve

// function solve() {
//   const td = (content) => e('td', {}, content);
//   const img = (src) => e('img', { src });
//   const check = () => e('input', { type: 'checkbox' });

//   const [input, output] = document.querySelectorAll('textarea');
//   const [generateBtn, buyBtn] = document.querySelectorAll('button');
//   const table = document.querySelector('tbody');

//   generateBtn.addEventListener('click', parseInput);
//   buyBtn.addEventListener('click', summary);

//   let data = [];

//   function parseInput() {
//       const json = input.value;
//       data = JSON.parse(json);

//       for (let entry of data) {
//           table.appendChild(createRow(entry));
//       }
//   }

//   function createRow(entry) {

//       const row = document.createElement('tr');
//       row.appendChild(td(img(entry.img)));
//       row.appendChild(td(document.createTextNode(entry.name)));
//       row.appendChild(td(document.createTextNode(entry.price)));
//       row.appendChild(td(document.createTextNode(entry.decFactor)));

//       const checkbox = check();

//       row.appendChild(td(checkbox));

//       entry.checked = () => checkbox.checked;

//       return row;
//   }

//   function summary() {
//       const selected = data.filter(e => e.checked());

//       const result = [
//           `Bought furniture: ${selected.map(e => e.name).join(', ')}`,
//           `Total price: ${selected.reduce((a, c) => a + Number(c.price), 0).toFixed(0)}`,
//           `Average decoration factor: ${selected.reduce((a, c, i, { length: t }) => a + Number(c.decFactor) / t, 0)}`,
//       ];

//       output.value = result.join('\n');
//   }

//   function e(type, attr, content) {
//       const result = document.createElement(type);

//       Object.assign(result, attr);

//       if (content) {
//           result.appendChild(content);
//       }

//       return result;
//   }
// }