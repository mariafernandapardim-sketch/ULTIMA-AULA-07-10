import { LampadaInteligente } from "./src/models/LampadaInteligente.js";
import { Termostato } from "./src/models/Termostato.js";

console.log("=== DISPOSITIVOS INTELIGENTES ===");

const lampada = new LampadaInteligente({
    idRede: "LAMP-001",
    nomeLocal: "Quarto",
    isLigado: true,
    corHexadecimal: "#FFFFFF",
    nivelBrilho: 80
});

const termostato = new Termostato({
    idRede: "TERM-001",
    nomeLocal: "Sala",
    isLigado: true,
    temperaturaAtual: 23,
    temperaturaAlvo: 22
});

console.log("\n========================================");
console.log("          LÂMPADA INTELIGENTE");
console.log("========================================");

console.log(`ID da rede:            ${lampada.getIdRede()}`);
console.log(`Local:                 ${lampada.getNomeLocal()}`);
console.log(`Está ligado:           ${lampada.getIsLigado()}`);
console.log(`Cor:                   ${lampada.getCorHexadecimal()}`);
console.log(`Nível de brilho:       ${lampada.getNivelBrilho()}`);

console.log("\nAlterando energia da lâmpada...");
lampada.alterarEnergia();

console.log(`Está ligado:           ${lampada.getIsLigado()}`);

console.log("\n========================================");
console.log("              TERMOSTATO");
console.log("========================================");

console.log(`ID da rede:            ${termostato.getIdRede()}`);
console.log(`Local:                 ${termostato.getNomeLocal()}`);
console.log(`Está ligado:           ${termostato.getIsLigado()}`);
console.log(`Temperatura atual:     ${termostato.getTemperaturaAtual()}°C`);
console.log(`Temperatura alvo:      ${termostato.getTemperaturaAlvo()}°C`);

console.log("\nAlterando temperatura alvo...");
termostato.setTemperaturaAlvo(20);

console.log(`Nova temperatura alvo: ${termostato.getTemperaturaAlvo()}°C`);

console.log("========================================");