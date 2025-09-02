var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Torneo_partidos;
import { Partido } from "./Partido.js";
export class Torneo {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        _Torneo_partidos.set(this, []);
    }
    programarPartido(idPartido, local, visitante, deporte) {
        const partidoExistente = this.buscarPartido(idPartido);
        if (partidoExistente) {
            throw new Error(`Ya existe un partido con el ID: ${idPartido}`);
        }
        const partido = new Partido(idPartido, local, visitante, deporte);
        __classPrivateFieldGet(this, _Torneo_partidos, "f").push(partido);
        return partido;
    }
    listarPartidos() {
        return __classPrivateFieldGet(this, _Torneo_partidos, "f").map(partido => partido.toString());
    }
    buscarPartido(id) {
        return __classPrivateFieldGet(this, _Torneo_partidos, "f").find(partido => partido.id === id);
    }
    jugarPartido(idPartido, golesLocal, golesVisitante) {
        const partido = this.buscarPartido(idPartido);
        if (!partido) {
            throw new Error(`No se encontró el partido con ID: ${idPartido}`);
        }
        partido.jugar(golesLocal, golesVisitante);
    }
    getPartidos() {
        return [...__classPrivateFieldGet(this, _Torneo_partidos, "f")];
    }
}
_Torneo_partidos = new WeakMap();
//# sourceMappingURL=Torneo.js.map