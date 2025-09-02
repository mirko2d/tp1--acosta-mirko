import { Deporte } from "./Deporte.js";
export class Futbol extends Deporte {
    constructor() {
        super('Futbol', 11);
    }
    validar(equipo) {
        return equipo.cantidad === this.maxPorEquipo;
    }
}
//# sourceMappingURL=Futbol.js.map