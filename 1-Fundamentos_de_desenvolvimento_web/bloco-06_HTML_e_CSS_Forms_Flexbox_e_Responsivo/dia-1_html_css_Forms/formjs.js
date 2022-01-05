function createOptions() {

const select = document.querySelector('select');
const estados =  [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
    ]

  for (let i = 0; i < estados.length; i += 1) {
    const option = document.createElement('option');
    option.innerText = estados[i]
    option.value = estados[i];
    select.appendChild(option);
  }
}

window.onload = function () {
    createOptions();
}