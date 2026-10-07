import { AnimalProps } from "../interface/AnimalProps.js";

export class Animal<T extends AnimalProps> {
    protected props: T;

    constructor(props: T) {
        this.props = props;
    }

    public getNomePaciente(): string {
        return this.props.nomePaciente;
    }

    public getNomeTutor(): string {
        return this.props.nomeTutor;
    }

    public getPesoKG(): number {
        return this.props.pesoKG;
    }

    public setPeso(novoPeso: number): void {
        if (novoPeso <= 0) {
            console.log("\nERRO: O peso deve ser maior que zero!");
            return;
        }

        this.props.pesoKG = novoPeso;
    }
}