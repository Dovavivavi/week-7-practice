// global scope = js mindenhol hozzáfér

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
