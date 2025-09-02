import { Deporte } from "./Deporte.js";
import { Equipo } from "./Equipo.js";
import { Resultado } from "./Resultado.js";

export class Partido {
    resultado?: Resultado;

    constructor(
        public readonly id: string,
        public readonly local: Equipo,
        public readonly visitante: Equipo,
        public readonly deporte: Deporte
    ) {
        if (local.id === visitante.id) {
            throw new Error("El local y el visitante no pueden ser el mismo equipo");
        }
    }

    jugar(golesLocal: number, golesVisitante: number): void {
        if (!this.deporte.validar(this.local) || !this.deporte.validar(this.visitante)) {
            throw new Error("Los equipos no cumplen con la reglas del deporte");
        }
        this.resultado = new Resultado(golesLocal, golesVisitante);
    }

    toString(): string {
        const resultadoStr = this.resultado 
        ? this.resultado.toString() 
        : "No jugador";

        return `Partido ${this.id} - ${this.local.nombre} vs ${this.visitante.nombre} - ${resultadoStr}`;
    }
}


