export class Resultado {

    constructor( public golesLocal: number, public golesVisitante: number) {
        this.golesLocal = golesLocal;
        this.golesVisitante = golesVisitante;
    }

    toString(): string {
        return `${this.golesLocal} - ${this.golesVisitante}`;
    }
}