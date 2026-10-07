import { PessoaFisicaProps } from "./PessoaFisicaProps.js";

export interface EstagiarioProps extends PessoaFisicaProps {
    instituicaoEnsino: string;
    bolsaAuxilio: number;
}