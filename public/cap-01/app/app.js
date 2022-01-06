import { Conta } from './models/conta.js';
import { calculeImc } from './oms.js';


const imc = calculeImc({peso:74, altura:1.63});
console.log(imc);



const conta  = new Conta ({
    titular: 'Flávio',
    banco: '123',
    agencia: '456',
    numero: '789'

});

console.log(conta);