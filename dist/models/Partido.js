import { Resultado } from "./Resultado.js";
export class Partido {
    constructor(id, local, visitante, deporte) {
        this.id = id;
        this.local = local;
        this.visitante = visitante;
        this.deporte = deporte;
        if (local.id === visitante.id) {
            throw new Error("El local y el visitante no pueden ser el mismo equipo");
        }
    }
    jugar(golesLocal, golesVisitante) {
        if (!this.deporte.validar(this.local) || !this.deporte.validar(this.visitante)) {
            throw new Error("Los equipos no cumplen con la reglas del deporte");
        }
        this.resultado = new Resultado(golesLocal, golesVisitante);
    }
    toString() {
        const resultadoStr = this.resultado
            ? this.resultado.toString()
            : "No jugador";
        return `Partido ${this.id} - ${this.local.nombre} vs ${this.visitante.nombre} - ${resultadoStr}`;
    }
}
//# sourceMappingURL=Partido.js.map