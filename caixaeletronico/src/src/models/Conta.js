export class Conta{
    id;
    titular;
    saldo=0;

    depositar(valor){
        this.saldo += valor;
    }
    sacar(valor){
        this.saldo -+ valor;
    }
    exibirSalso(){
        console.log(`Id do cliente: ${this.id}`);
        console.log(`Nome do cliente: &{this.titular}`);
        console.log(`Saldo do cliente: &{this.titular}`);
    }