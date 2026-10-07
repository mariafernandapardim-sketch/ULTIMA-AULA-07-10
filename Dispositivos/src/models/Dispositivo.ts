import { DispositivoProps } from "../interface/DispositivoProps.js";

export class Dispositivo<T extends DispositivoProps> {
    protected props: T;

    constructor(props: T) {
        this.props = props;
    }

    public getIdRede(): string {
        return this.props.idRede;
    }

    public getNomeLocal(): string {
        return this.props.nomeLocal;
    }

    public getIsLigado(): boolean {
        return this.props.isLigado;
    }

    public alterarEnergia(): void {
        this.props.isLigado = !this.props.isLigado;
    }
}