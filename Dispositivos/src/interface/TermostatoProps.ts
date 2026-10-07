import { DispositivoProps } from "./DispositivoProps.js";

export interface TermostatoProps extends DispositivoProps {
    temperaturaAtual: number;
    temperaturaAlvo: number;
}