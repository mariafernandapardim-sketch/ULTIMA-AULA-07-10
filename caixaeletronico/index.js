import { conta } from "./src/models/conta.js";
import readline from "readiline-sync";
import { Conta } from "./src/src/models/Conta";

objConta = new Conta
objConta.id = readline.questionInt('digite o id do usuario:');
objConta.titular = readline.questionInt('digite o nome do usuario:');
let deposito = readline.questionFloat('Digite o valor do deposito:');
    objConta.depositar(deposito);

    let saque = readline.questioFloat('Digite o valor do saque:');
    objConta.conta.sacar(saque);


