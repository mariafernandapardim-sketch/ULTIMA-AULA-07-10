import { Dispositivo } from "./Dispositivo.js";
import { TermostatoProps } from "../interface/TermostatoProps.js";

export class Termostato extends Dispositivo<TermostatoProps> {

    constructor(props: TermostatoProps) {
        super(props);
    }

    public getTemperaturaAtual(): number {
        return this.props.temperaturaAtual;
    }

    public getTemperaturaAlvo(): number {
        return this.props.temperaturaAlvo;
    }

    public setTemperaturaAlvo(temp: number): void {
        this.props.temperaturaAlvo = temp;
    }
}