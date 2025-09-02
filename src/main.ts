import { Jugador } from './models/Jugador.js';
import { Equipo } from './models/Equipo.js';
import { Futbol } from './models/Futbol.js';
import { Basquet } from './models/Basquet.js';
import { Torneo } from './models/Torneo.js';

console.log('=== INICIO DE PRUEBAS ===\n');

const jugadoresFutbol: Jugador[] = [];
for (let i = 1; i <= 22; i++) {
    jugadoresFutbol.push(new Jugador(
        `f${i}`, 
        `Jugador Fútbol ${i}`, 
        20 + (i % 10), 
        i % 2 === 0 ? 'Defensa' : 'Delantero'
    ));
}

const jugadoresBasquet: Jugador[] = [];
for (let i = 1; i <= 10; i++) {
    jugadoresBasquet.push(new Jugador(
        `b${i}`, 
        `Jugador Básquet ${i}`, 
        22 + (i % 5), 
        i % 2 === 0 ? 'Alero' : 'Base'
    ));
}

const barcelona = new Equipo('barca', 'FC Barcelona');
const river = new Equipo('river', 'River Plate');
const lakers = new Equipo('lal', 'Los Angeles Lakers');
const warriors = new Equipo('gsw', 'Golden State Warriors');

jugadoresFutbol.slice(0, 11).forEach(j => barcelona.agregarJugador(j));
jugadoresFutbol.slice(11, 22).forEach(j => river.agregarJugador(j));

jugadoresBasquet.slice(0, 5).forEach(j => lakers.agregarJugador(j));
jugadoresBasquet.slice(5, 10).forEach(j => warriors.agregarJugador(j));

const futbol = new Futbol();
const basquet = new Basquet();

const torneo = new Torneo('t1', 'Torneo Internacional');

console.log('=== VALIDACIÓN DE EQUIPOS ===');
console.log(`Barcelona válido para fútbol: ${futbol.validar(barcelona)}`); // true
console.log(`Lakers válido para básquet: ${basquet.validar(lakers)}\n`); // true

try {
    console.log('=== REGISTRANDO PARTIDOS ===');
    // Usamos el nuevo nombre del método: registrarPartido
    torneo.registrarPartido('p1', barcelona, river, futbol);
    torneo.registrarPartido('p2', lakers, warriors, basquet);
    console.log('Partidos registrados exitosamente\n');

    try {
        // La validación de ID duplicado ahora también está en registrarPartido
        torneo.registrarPartido('p1', barcelona, lakers, futbol);
    } catch (error) {
        console.log('Error esperado al registrar partido con ID duplicado:', 
                    error instanceof Error ? error.message : String(error));
    }

    console.log('\n=== REGISTRANDO RESULTADOS ===');
    // Usamos el nuevo método registrarResultado del Torneo
    torneo.registrarResultado('p1', 2, 1);
    torneo.registrarResultado('p2', 98, 102);
    console.log('Resultados registrados exitosamente\n');

    console.log('=== RESULTADOS ===');
    // Obtenemos los partidos para mostrar los resultados
    const partidoFutbol = torneo.obtenerPartidoPorId('p1');
    const partidoBasquet = torneo.obtenerPartidoPorId('p2');
    console.log(partidoFutbol?.toString());
    console.log(partidoBasquet?.toString() + '\n');

    console.log('=== LISTA DE PARTIDOS ===');
    // Usamos el nuevo nombre del método: obtenerResumenPartidos
    console.log(torneo.obtenerResumenPartidos().join('\n') + '\n');

    const partidoEncontrado = torneo.obtenerPartidoPorId('p1');
    console.log('=== BUSCAR PARTIDO ===');
    console.log(partidoEncontrado?.toString() + '\n');

    console.log('=== DEMOSTRACIÓN DE POLIMORFISMO ===');
    const deportes: any[] = [futbol, basquet];
    const equipos = [barcelona, lakers];
    
    deportes.forEach(deporte => {
        equipos.forEach(equipo => {
            console.log(`Validando ${equipo.nombre} para ${deporte.constructor.name}: ${deporte.validar(equipo)}`);
        });
    });

    console.log('\n=== PRUEBA EQUIPOS INCOMPLETOS ===');
    const equipoIncompleto = new Equipo('incomp', 'Equipo Incompleto');
    console.log(`Equipo incompleto válido para fútbol: ${futbol.validar(equipoIncompleto)}`); // false
    console.log(`Equipo incompleto válido para básquet: ${basquet.validar(equipoIncompleto)}`); // false

} catch (error) {
    console.error('Error en el torneo:', error instanceof Error ? error.message : error);
}

console.log('\n=== FIN DE PRUEBAS ===');