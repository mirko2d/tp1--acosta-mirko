import { Partido } from "./Partido.js";
import { Equipo } from "./Equipo.js";
import { Deporte } from "./Deporte.js";

export class Torneo {
    // Usamos un Map para un acceso más rápido a los partidos por su ID.
    // La clave es el ID del partido (string) y el valor es el objeto Partido.
    #partidos: Map<string, Partido> = new Map();

    constructor(
        public readonly id: string,
        public nombre: string
    ) {}

    // En lugar de "programar", lo llamamos "registrar".
    registrarPartido(
        idPartido: string,
        local: Equipo,
        visitante: Equipo,
        deporte: Deporte
    ): Partido {
        if (this.#partidos.has(idPartido)) {
            throw new Error(`Ya existe un partido con el ID: ${idPartido}`);
        }

        const nuevoPartido = new Partido(idPartido, local, visitante, deporte);
        this.#partidos.set(idPartido, nuevoPartido);
        return nuevoPartido;
    }

    // El nombre del método es más descriptivo.
    obtenerResumenPartidos(): string[] {
        // Obtenemos los valores del Map y los transformamos en un array de strings.
        return Array.from(this.#partidos.values()).map(partido => partido.toString());
    }

    // "obtener" es un nombre más estándar que "buscar".
    obtenerPartidoPorId(id: string): Partido | undefined {
        return this.#partidos.get(id);
    }

    // El nombre del método indica que estamos registrando el resultado.
    registrarResultado(idPartido: string, golesLocal: number, golesVisitante: number): void {
        const partido = this.obtenerPartidoPorId(idPartido);
        if (!partido) {
            throw new Error(`No se encontró el partido con ID: ${idPartido}`);
        }
        partido.jugar(golesLocal, golesVisitante);
    }

    // Devuelve una copia de los partidos para evitar modificaciones externas directas.
    // Usamos el método values() del Map para obtener un iterador de los partidos.
    getPartidos(): Partido[] {
        return Array.from(this.#partidos.values());
    }
}