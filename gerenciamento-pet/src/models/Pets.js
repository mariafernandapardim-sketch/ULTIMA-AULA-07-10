export class Pets{
    id;
    nome;
    idade;
    especie;
    peso;

    // Metodos (Comportamentos da regra de negocio)
    verificarSaude() {
      if(this.peso <= 2) {
       return"abaixo do peso";
        }else{
        return "peso normal";
        }
    }

    exibirFicha() {
        console.log(`\n--- RELATORIO DE FICHAS ---`);
        console.log(`ID: ${this.id}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`idade: R$ ${this.idade}`);
        console.log(`especie: ${this.especie} unidades`);
        console.log(`peso: ${this.peso} unidades`);
        console.log(`Total em Estoque: R$ ${this.verificarSaude()}`);
        console.log(`----------------------------\n`);
    }
}