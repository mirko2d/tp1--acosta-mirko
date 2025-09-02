import { Deporte } from "./Deporte.js";
import { Equipo } from "./Equipo.js";

export class Futbol extends Deporte {
    constructor() {
        super('Futbol', 11);
    }

    validar(equipo: Equipo): boolean {
        return equipo.cantidad === this.maxPorEquipo;
    }
}