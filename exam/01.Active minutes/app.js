window.addEventListener("load", solve);

function solve() {
  const activityTypeEl = document.getElementById('type');
  const intensityEl = document.getElementById('intensity');
  const caloriesEl = document.getElementById('calories');
  const durationEl = document.getElementById('duration');
  const dateEl = document.getElementById('date');

  const addBtn = document.getElementById('add-activity');
  const previewEl = document.getElementById('preview-activity');
  const tBody = document.getElementById('activities-table');


  addBtn.addEventListener('click', addActivity);

  function addActivity(e) {
    e.preventDefault();

    const activityType = activityTypeEl.value;
    const intensity = intensityEl.value;
    const calories = caloriesEl.value;
    const duration = durationEl.value;
    const date = dateEl.value;

   
    if (activityType==='' || intensity==='' || calories==='' || duration==='' || date==='') {
      return;
    }

    const listEl = createPreviewItem(activityType, intensity, calories, duration, date);
    previewEl.appendChild(listEl);

    clearInputs();
    addBtn.disabled = true;


    const editBtn = listEl.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => editBtnFunction(listEl, activityType, intensity, calories, duration, date));

    const nextBtn = listEl.querySelector('.next-btn');
    nextBtn.addEventListener('click', () => nextBtnFunction(listEl, activityType, intensity, calories, duration, date));
  }
  //helper fn cleaning inputs
  function clearInputs() {
    activityTypeEl.value = '';
    intensityEl.value = '';
    caloriesEl.value = '';
    durationEl.value = '';
    dateEl.value = '';
  }
  //helper for preview
  function createPreviewItem(activityType, intensity, calories, duration, date) {
    const listEl = document.createElement('li');
    const article = document.createElement('article');

    const activityPara = document.createElement('p');
    activityPara.textContent = `Activity: ${activityType}`;
    article.appendChild(activityPara);

    const intensityPara = document.createElement('p');
    intensityPara.textContent = `Intensity: ${intensity}`;
    article.appendChild(intensityPara);

    const durationPara = document.createElement('p');
    durationPara.textContent = `Duration: ${duration} min.`;
    article.appendChild(durationPara);

    const datePara = document.createElement('p');
    datePara.textContent = `Date: ${date}`;
    article.appendChild(datePara);

    const caloriesPara = document.createElement('p');
    caloriesPara.textContent = `Calories: ${calories}`;
    article.appendChild(caloriesPara);

    const btnDiv = document.createElement('div');
    btnDiv.classList.add('btn-container');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';

    const nextBtn = document.createElement('button');
    nextBtn.classList.add('next-btn');
    nextBtn.textContent = 'Next';

    btnDiv.appendChild(editBtn);
    btnDiv.appendChild(nextBtn);

    listEl.appendChild(article);
    listEl.appendChild(btnDiv);

    return listEl;
  }
  //edit btn
  function editBtnFunction(listEl, activityType, intensity, calories, duration, date) {
    activityTypeEl.value = activityType;
    intensityEl.value = intensity;
    caloriesEl.value = calories;
    durationEl.value = duration;
    dateEl.value = date;

    previewEl.removeChild(listEl);
    addBtn.disabled = false;
  }
  function createTrs(activityType, intensity, calories, duration, date) {
    const tableRow = document.createElement('tr');

    const typeCell = document.createElement('td');
    typeCell.textContent = activityType;
    tableRow.appendChild(typeCell);

    const durationCell = document.createElement('td');
    durationCell.textContent = `${duration} min.`;
    tableRow.appendChild(durationCell);

    const caloriesCell = document.createElement('td');
    caloriesCell.textContent = calories;
    tableRow.appendChild(caloriesCell);

    const dateCell = document.createElement('td');
    dateCell.textContent = date;
    tableRow.appendChild(dateCell);

    const intensityCell = document.createElement('td');
    intensityCell.textContent = intensity;
    tableRow.appendChild(intensityCell);

    const btnCell = document.createElement('td');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    btnCell.appendChild(deleteBtn);

    tableRow.appendChild(btnCell);

    return tableRow;
  }

  //next btn
  function nextBtnFunction(listEl, activityType, intensity, calories, duration, date) {
    const tr = createTrs(activityType, intensity, calories, duration, date);
    tBody.appendChild(tr);
    previewEl.removeChild(listEl);
    addBtn.disabled = false;

    const deleteBtn = tr.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      tBody.removeChild(tr);
    });
  }
}
