// global scope = belülről vissza lehet kérni mindent, de kívülről nem

let globalVariable = 'amogus';

function logVariable() {
  let globalVariable = 'redsus';
  console.log(globalVariable);

  function changeVariable() {
    let globalVariable = 'greensus';
    console.log(globalVariable);
  }

  changeVariable();
}
console.log(globalVariable);

logVariable();
