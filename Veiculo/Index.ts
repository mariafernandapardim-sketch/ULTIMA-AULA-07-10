import { Cachorro } from "./src/models/Cachorro.js";
import { Gato } from "./src/models/Gato.js";

console.log("=== CADASTRO DE ANIMAIS ===");

const cachorro = new Cachorro({
    nomePaciente: "Thor",
    nomeTutor: "Carlos Silva",
    pesoKG: 25,
    porte: "Grande",
    precisaTosa: true
});

const gato = new Gato({
    nomePaciente: "Mingau",
    nomeTutor: "João Santos",
    pesoKG: 5,
    fivFelvTestado: true,
    isIndoor: true
});

console.log("\n========================================");
console.log("              CACHORRO");
console.log("========================================");

console.log(`Nome do paciente:     ${cachorro.getNomePaciente()}`);
console.log(`Nome do tutor:        ${cachorro.getNomeTutor()}`);
console.log(`Peso:                 ${cachorro.getPesoKG()} KG`);
console.log(`Porte:                ${cachorro.getPorte()}`);
console.log(`Precisa de tosa:      ${cachorro.getPrecisaTosa()}`);

console.log("\n========================================");
console.log("                 GATO");
console.log("========================================");

console.log(`Nome do paciente:     ${gato.getNomePaciente()}`);
console.log(`Nome do tutor:        ${gato.getNomeTutor()}`);
console.log(`Peso:                 ${gato.getPesoKG()} KG`);
console.log(`FIV/FeLV testado:     ${gato.getFivFelvTestado()}`);
console.log(`É indoor:             ${gato.getIsIndoor()}`);

console.log("========================================");