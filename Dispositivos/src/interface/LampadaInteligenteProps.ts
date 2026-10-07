
import { DispositivoProps } from "./DispositivoProps.js";

export interface LampadaInteligenteProps extends DispositivoProps {
    corHexadecimal: string;
    nivelBrilho: number;
}