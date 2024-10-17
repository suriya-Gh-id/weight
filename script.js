let poundsInput = document.getElementById('lbsInput');

poundsInput.addEventListener('input',inputFun);
document.getElementById('output').style.visibility = 'hidden';

function inputFun (e) {
  document.getElementById('output').style.visibility = 'visible';
  let lbs = e.target.value;
  document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
  document.getElementById('KgOutput').innerHTML = lbs/2.2046;
  document.getElementById('OzOutput').innerHTML = lbs*16;
}