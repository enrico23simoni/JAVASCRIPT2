import {cliente} from "./Cliente.js";
import {contaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./contaPoupanca.js";
import { ContaSalario } from "./contaSalario.js";

/*criando instancias da classe cliente*/
const cliente1 = new cliente("Enrico", 11122233309); 

/*criando instancias da classe CC*/
const contaCorrenteEnrico = new contaCorrente(cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaCorrenteEnrico.depositar(500);
contaCorrenteEnrico.sacar(200);
contaSalario.depositar(100);
contaSalario.sacar(10);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaCorrenteEnrico)
console.log(contaPoupanca);


console.log(contaSalario)

// /*para o jason: npm init*/