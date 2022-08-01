let formComponent = function () {
  return /*html*/ `
    <form>
      <input id="nameInput" placeholder="Enter your name..." />
    </form>
`;
};

let displayComponent = function () {
  return /*html*/ `
    <p id="name-display">your name nigga</p>
  `;
};

let contentComponent = function (first, second) {
  return /*html*/ `
    <section class="first">${first}</section>
    <section class="second">${second}</section>
  `;
};

function loadEvent() {
  console.log('loadEvent executed');

  let rootElement = document.querySelector('#root');

  rootElement.insertAdjacentHTML(
    'beforeend',
    contentComponent(formComponent(), displayComponent())
  );

  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
  });

  let inputElement = document.querySelector('#nameInput');

  const displayElement = document.querySelector('#name-display');

  inputElement.addEventListener('input', function (event) {
    let inputData = event.target.value;
    displayElement.insertAdjacentHTML('beforeend', inputData);
    console.log(event.target.value);
  });
}

window.addEventListener('load', loadEvent);
