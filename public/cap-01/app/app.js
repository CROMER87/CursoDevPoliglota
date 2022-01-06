import { calculeImc } from './oms.js';


const imc = calculeImc({peso:74, altura:1.63});
console.log(imc);


const configuration = {
    peso: 74,
    altura: 1.63
};

const{ peso, altura } = configuration;