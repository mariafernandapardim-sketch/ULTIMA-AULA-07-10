import { Animal } from "./Animal.js";
import { GatoProps } from "../interface/GatoProps.js";

export class Gato extends Animal<GatoProps> {

    constructor(props: GatoProps) {
        super(props);
    }

    public getFivFelvTestado(): boolean {
        return this.props.fivFelvTestado;
    }

    public getIsIndoor(): boolean {
        return this.props.isIndoor;
    }
}