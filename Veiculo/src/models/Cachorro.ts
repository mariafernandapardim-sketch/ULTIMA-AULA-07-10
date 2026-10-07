import { Animal } from "./Animal.js";
import { CachorroProps } from "../interface/CachorroProps.js";

export class Cachorro extends Animal<CachorroProps> {

    constructor(props: CachorroProps) {
        super(props);
    }

    public getPorte(): string {
        return this.props.porte;
    }

    public getPrecisaTosa(): boolean {
        return this.props.precisaTosa;
    }
}