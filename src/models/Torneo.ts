import { Partido } from "./Partido.js";
import { Equipo } from "./Equipo.js";
import { Deporte } from "./Deporte.js";

export class Torneo {
    #partidos: Partido[] = [];

    constructor(
        public readonly id: string,
        public nombre: string
    ) {}

    programarPartido(
        idPartido: string,
        local: Equipo,
        visitante: Equipo,
        deporte: Deporte
    ): Partido {
        const partidoExistente = this.buscarPartido(idPartido);
        if (partidoExistente) {
            throw new Error(`Ya existe un partido con el ID: ${idPartido}`);
        }

        const partido = new Partido(idPartido, local, visitante, deporte);
        this.#partidos.push(partido);
        return partido;
    }

    listarPartidos(): string[] {
        return this.#partidos.map(partido => partido.toString());
    }

    buscarPartido(id: string): Partido | undefined {
        return this.#partidos.find(partido => partido.id === id);
    }

    jugarPartido(idPartido: string, golesLocal: number, golesVisitante: number): void {
        const partido = this.buscarPartido(idPartido);
        if (!partido) {
            throw new Error(`No se encontró el partido con ID: ${idPartido}`);
        }
        partido.jugar(golesLocal, golesVisitante);
    }

    getPartidos(): Partido[] {
        return [...this.#partidos]; 
    }
}
