import { ICompetidor } from '../interfaces/ICompetidor.js';
import { Jugador } from './Jugador.js';

export class Equipo implements ICompetidor {
    #jugadores: Jugador[];
    readonly id: string;
    nombre: string;

    constructor(id: string, nombre: string) {
        this.id = id;
        this.nombre = nombre;
        this.#jugadores = [];
    }

    agregarJugador(jugador: Jugador): void {
       
        const jugadorExiste = this.#jugadores.some(j => j.id === jugador.id);
        if (!jugadorExiste) {
            this.#jugadores.push(jugador);
        } else {
            console.warn(`El jugador con ID ${jugador.id} ya existe en el equipo`);
        }
    }

    listarIntegrantes(): string[] {
        return this.#jugadores.map(jugador => jugador.toString());
    }

    
    get cantidad(): number {
        return this.#jugadores.length;
    }

    
    toString(): string {
        return `Equipo: ${this.nombre} (ID: ${this.id}) - Jugadores: ${this.cantidad}`;
    }
}