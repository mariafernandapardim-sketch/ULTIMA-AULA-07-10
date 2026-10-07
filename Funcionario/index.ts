import { Estagiario } from "./src/models/Estagiario.js";
import readLine from "readline-sync";

console.log("=== CADASTRO DE ESTAGIÁRIO ===");

const novoEstagiario = new Estagiario(
    "111.222.333-44",
    "Carlos",
    "1599999-9999",
    "carlos@email.com",
    "10/05/2008",
    "SENAI",
    800
);

console.log("\n=== DADOS DO ESTAGIÁRIO ===");
console.log("CPF:", novoEstagiario.getCpf);
console.log("Nome:", novoEstagiario.getNome);
console.log("Telefone:", novoEstagiario.getTelefone);
console.log("Email:", novoEstagiario.getEmail);
console.log("Data de nascimento:", novoEstagiario.getDataNascimento);
console.log("Instituição de ensino:", novoEstagiario.getInstituicaoEnsino);
console.log("Bolsa auxílio:", novoEstagiario.getBolsaAuxilio);

console.log("\n=== ALTERAÇÃO DE DADOS ===");

novoEstagiario.setNome = readLine.question("Digite o novo nome: ");
novoEstagiario.setTelefone = readLine.question("Digite o novo telefone: ");
novoEstagiario.setInstituicaoEnsino = readLine.question("Digite a nova instituição: ");

console.log("\n=== DADOS ATUALIZADOS ===");
console.log("Nome:", novoEstagiario.getNome);
console.log("Telefone:", novoEstagiario.getTelefone);
console.log("Instituição de ensino:", novoEstagiario.getInstituicaoEnsino);
console.log("Bolsa auxílio:", novoEstagiario.getBolsaAuxilio);