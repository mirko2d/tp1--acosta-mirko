var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Equipo_jugadores;
export class Equipo {
    constructor(id, nombre) {
        _Equipo_jugadores.set(this, void 0);
        this.id = id;
        this.nombre = nombre;
        __classPrivateFieldSet(this, _Equipo_jugadores, [], "f");
    }
    agregarJugador(jugador) {
        const jugadorExiste = __classPrivateFieldGet(this, _Equipo_jugadores, "f").some(j => j.id === jugador.id);
        if (!jugadorExiste) {
            __classPrivateFieldGet(this, _Equipo_jugadores, "f").push(jugador);
        }
        else {
            console.warn(`El jugador con ID ${jugador.id} ya existe en el equipo`);
        }
    }
    listarIntegrantes() {
        return __classPrivateFieldGet(this, _Equipo_jugadores, "f").map(jugador => jugador.toString());
    }
    get cantidad() {
        return __classPrivateFieldGet(this, _Equipo_jugadores, "f").length;
    }
    toString() {
        return `Equipo: ${this.nombre} (ID: ${this.id}) - Jugadores: ${this.cantidad}`;
    }
}
_Equipo_jugadores = new WeakMap();
//# sourceMappingURL=Equipo.js.map