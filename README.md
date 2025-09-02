# Trabajo Práctico: Programación Orientada a Objetos en TypeScript

## Objetivo
Modelar un torneo con equipos, jugadores, deportes y partidos aplicando **clases, interfaces, herencia, encapsulamiento, polimorfismo y clases abstractas** en TypeScript.

El objetivo es **consolidar las bases de POO vistas en el curso** a través de un proyecto práctico.

---

## Organización del código
La estructura recomendada del proyecto es la siguiente:

```
tp-torneos/
  src/
    interfaces/
      IIdentificable.ts
      ICompetidor.ts
    models/
      Jugador.ts
      Equipo.ts
      Deporte.ts
      Futbol.ts
      Basquet.ts
      Resultado.ts
      Partido.ts
      Torneo.ts
    main.ts
  tsconfig.json
  package.json
  README.md
```

---

## Consignas

### 1) Interfaces base
1. `IIdentificable` con `readonly id: string`
2. `ICompetidor` con propiedades/métodos:
   - `nombre: string`
   - `listarIntegrantes(): string[]`

### 2) Clases: Jugador y Equipo
- `Jugador`: id, nombre, edad, posición (opcional), método `toString()`.
- `Equipo`: implementa `ICompetidor`, mantiene lista **privada** de jugadores.
  - Métodos: `agregarJugador()`, `listarIntegrantes()`, `toString()`
  - Encapsulamiento: `get cantidad()`

### 3) Abstracción de Deporte y especializaciones
- Clase abstracta `Deporte`: nombre, maxPorEquipo, método abstracto `validar(equipo: Equipo)`
- Subclases:
  - `Futbol` → máximo 11 jugadores
  - `Basquet` → máximo 5 jugadores

### 4) Partidos y resultados
- `Resultado`: golesLocal, golesVisitante, método `toString()`
- `Partido`: id, local, visitante, deporte, resultado opcional
  - Validar que local ≠ visitante
  - Jugar solo si los equipos cumplen con el deporte
  - Métodos: `jugar()`, `toString()`

### 5) Torneo
- `Torneo`: id, nombre, lista privada de partidos
  - Métodos: `programarPartido()`, `listarPartidos()`, `buscarPartido()`

### 6) `main.ts` (pruebas mínimas)
- Crear jugadores y equipos de fútbol y básquet
- Validar cupos por deporte
- Crear y jugar partidos
- Mostrar resultados
- Demostrar polimorfismo con `validar()`

---

## Reglas y validaciones mínimas
- Un equipo no puede tener jugadores repetidos por id.
- Un partido no puede tener el mismo local y visitante.
- Un partido solo puede jugarse si ambos equipos son válidos para el deporte.
- Controlar cupos de jugadores.

---

## Entregable
- Crear repositorio en GitHub con la nomenclatura ```tp1-${apellido-nombre}``` (NO usar mayúsculas)
- Proyecto con la estructura indicada y módulos ESM.
- `main.ts` debe incluir pruebas demostrables por consola.
- Subir el proyecto a GitHub y entregar en classroom tanto el link del repositorio.

---

## Recomendaciones
- Usa **TypeScript estricto** para detectar errores.
- Divide las clases en archivos separados.
- Incluye comentarios que expliquen tu diseño de clases.
- Realiza commits frecuentes en GitHub para documentar tu avance.

---

## Rúbrica de Evaluación
| Dimensión | Descripción | Ponderación |
|-----------|-------------|-------------|
| **1. Modelo de clases e interfaces** | Se implementan correctamente las clases pedidas (`Jugador`, `Equipo`, `Deporte`, `Futbol`, `Basquet`, `Partido`, `Torneo`) y las interfaces (`IIdentificable`, `ICompetidor`, etc.). Se respeta la separación de responsabilidades y cada clase tiene sus propiedades y métodos mínimos. | **30 pts** |
| **2. Abstracción, herencia y polimorfismo** | Uso correcto de la clase abstracta `Deporte` y su especialización en `Futbol` y `Basquet`. Métodos `validar()` sobrescritos correctamente. Se demuestra polimorfismo al validar equipos de distintos deportes. | **20 pts** |
| **3. Encapsulamiento y validaciones** | Uso de propiedades privadas, getters y setters (`Equipo.jugadores`, `Partido.resultado`). Se validan reglas: no jugadores duplicados, no partido con mismo equipo, no exceder cupos, etc. | **10 pts** |
| **4. Funcionamiento y demostración en `main.ts`** | Se crean jugadores, equipos, partidos y torneos. Se prueban reglas de validación y se muestran resultados en consola. El `main.ts` funciona sin errores y demuestra los casos pedidos. | **25 pts** |
| **5. Estilo, organización y uso de TypeScript** | Estructura de carpetas (`models/`, `interfaces/`). Uso de `export`/`import` con módulos ESM. Tipos explícitos, sin abusar de `any`. Código legible, con nombres claros y consistentes. | **15 pts** |

---

## Escala de calificación

- **90–100 pts:** Excelente, implementación completa y sin errores.  
- **75–89 pts:** Muy bueno, algunos detalles menores faltantes.  
- **60–74 pts:** Aprobado, pero con fallas en validaciones o diseño.  
- **<60 pts:** No aprobado, falta implementación clave o errores graves.  

---

## Nota opcional
- Bonus de +5 pts si el estudiante implementa alguna mejora no pedida (ej: `Arbitro`, tabla de posiciones, persistencia en JSON).  
- Si se usa corrección automática con **tests**, cada archivo de test puede mapearse directamente a estas dimensiones:
  - `01-jugador.equipo.spec.ts` → Dimensión 1 y 3 (30 pts)  
  - `02-deporte-validaciones.spec.ts` → Dimensión 2 (20 pts)  
  - `03-partido.spec.ts` → Dimensión 3 (20 pts)  
  - `04-torneo.spec.ts` → Dimensiones 1 y 4 (30 pts)  
# tp1--amarilla-rodrigo-
# tp1--acosta-mirko
