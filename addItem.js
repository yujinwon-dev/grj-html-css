function addItem(e) {
  e.preventDefault();
  console.log(e);

  const name = e.target[0].value;
  const src = e.target[1].value;
  const content = e.target[2].value;

  const alcoholList = document.querySelector('.alcohol-list');
  const alcoholItem = document.createElement('li');
  const alcoholText = document.createTextNode(name);
  alcoholItem.appendChild(alcoholText);
  alcoholList.appendChild(alcoholItem);

  const cardList = document.querySelector('.card-list');
  const card = document.createElement('article');

  const img = document.createElement('img');
  img.src = src;
  img.alt = name;

  const explanation = document.createElement('p');
  const expText = document.createTextNode(content);
  explanation.appendChild(expText);

  card.appendChild(img);
  card.appendChild(explanation);
  card.classList.add('card');
  cardList.appendChild(card);

  closeModal();
}