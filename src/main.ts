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
    console.log('=== PROGRAMANDO PARTIDOS ===');
    const partidoFutbol = torneo.programarPartido('p1', barcelona, river, futbol);
    const partidoBasquet = torneo.programarPartido('p2', lakers, warriors, basquet);
    console.log('Partidos programados exitosamente\n');

    try {
        torneo.programarPartido('p1', barcelona, lakers, futbol);
    } catch (error) {
        console.log('Error esperado al programar partido con ID duplicado:', 
                   error instanceof Error ? error.message : String(error));
    }

    console.log('\n=== JUGANDO PARTIDOS ===');
    partidoFutbol.jugar(2, 1);
    partidoBasquet.jugar(98, 102);
    console.log('Partidos jugados exitosamente\n');

    console.log('=== RESULTADOS ===');
    console.log(partidoFutbol.toString());
    console.log(partidoBasquet.toString() + '\n');

    console.log('=== LISTA DE PARTIDOS ===');
    console.log(torneo.listarPartidos().join('\n') + '\n');

    const partidoEncontrado = torneo.buscarPartido('p1');
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
