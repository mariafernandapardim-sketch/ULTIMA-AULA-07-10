import { PessoaFisica } from "./PessoaFisica.js";

export class Estagiario extends PessoaFisica {
    private instituicaoEnsino: string;
    private bolsaAuxilio: number;

    constructor(
        cpf: string,
        nome: string,
        telefone: string,
        email: string,
        dataNascimento: string,
        instituicaoEnsino: string,
        bolsaAuxilio: number
    ) {
        super(cpf, nome, telefone, email, dataNascimento);

        this.instituicaoEnsino = instituicaoEnsino;
        this.bolsaAuxilio = bolsaAuxilio;
    }

    public get getInstituicaoEnsino(): string {
        return this.instituicaoEnsino;
    }

    public get getBolsaAuxilio(): number {
        return this.bolsaAuxilio;
    }

    public set setInstituicaoEnsino(novaInstituicao: string) {
        if (novaInstituicao.trim().length === 0) {
            console.log("\nERRO: A instituição de ensino não pode ser vazia!");
            return;
        }

        this.instituicaoEnsino = novaInstituicao;
    }

    public set setBolsaAuxilio(novoValor: number) {
        if (novoValor < 0) {
            console.log("\nERRO: A bolsa auxílio não pode ser negativa!");
            return;
        }

        this.bolsaAuxilio = novoValor;
    }
}