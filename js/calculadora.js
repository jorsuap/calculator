const keynumber = document.getElementsByName('data-number');
const keyoperator = document.getElementsByName('data-operator');
const keyequals = document.getElementsByName('data-equals')[0];
const keydelete = document.getElementsByName('data-delete')[0];
const keypoint = document.getElementsByName('data-point');
var result = document.getElementById('salida');
var opeActual = '';
var operAnterior = '';
var operacion = undefined;

keynumber.forEach(function (key) {
    key.addEventListener('click', function () {
        agregarNumero(key.innerText);
    })
});

keyoperator.forEach(function (key) {
    key.addEventListener('click', function () {
        selecoperador(key.innerText);
    })
});

keyequals.addEventListener('click', function () {
    calcular();
    actaulizardisplay();
});

keydelete.addEventListener('click', function () {
    clear();
    actaulizardisplay();
});

function selecoperador(op) {
    if (opeActual === '') return;

    if (operAnterior !== '') {
        calcular()
    }
    operacion = op.toString();
    operAnterior = opeActual;
    opeActual = '';
}

function calcular() {
    var calculo;
    const anterior = parseFloat(operAnterior);
    const actual = parseFloat(opeActual);
    if (isNaN(anterior) && isNaN(actual)) return;
    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        case '%':
            calculo = anterior / 100;
            break;
        case '√':
            calculo = Math.sqrt(anterior);
            break;
        case 'x^2':
            calculo = Math.pow(anterior, 2);
            break;
        case 'sin':
            calculo = Math.sin(anterior);
            break;
        case 'cos':
            calculo = Math.cos(anterior);
            break;
        case 'tan':
            calculo = Math.tan(anterior);
            break;
        default:
            return;
    }


    opeActual = calculo;
    operAnterior = '';
    operacion = undefined;

    console.log(calculo);
}

function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString();
    actaulizardisplay();
}

function clear() {
    opeActual = '';
    operAnterior = '';
    operacion = undefined;
}

function actaulizardisplay() {
    result.value = opeActual;
}
clear();