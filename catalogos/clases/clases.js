const introduccionClases = {
    titulo: "¿Qué es una clase?",
    parrafos: [
        "La clase representa las capacidades principales de tu personaje como aventurero. Determina su estilo de juego, sus rasgos especiales, sus competencias y la forma en que progresa al subir de nivel."
    ],
    subtitulo: "¿Qué aporta una clase?",
    elementos: [
        "Dado de golpe.",
        "Competencias.",
        "Equipo inicial.",
        "Rasgos de clase.",
        "Progresión por niveles.",
        "Acceso a una subclase."
    ]
};

const resumenClases = {
    titulo: "Clases disponibles",
    clases: [
        {
            nombre: "Bárbaro",
            descripcion: "Combatiente feroz que usa la furia para resistir daño y golpear con fuerza.",
            subclases: [
                "Árbol del Mundo",
                "Berserker",
                "Corazón Salvaje",
                "Fanático"
            ]
        },
        {
            nombre: "Bardo",
            descripcion: "Lanzador de conjuros que inspira, cura y manipula mediante música, magia y talento.",
            subclases: [
                "Danza",
                "Conocimiento",
                "Glamour",
                "Valor"
            ]
        },
        {
            nombre: "Brujo",
            descripcion: "Lanzador de conjuros que obtiene poder mediante un pacto sobrenatural.",
            subclases: [
                "Patrón Celestial",
                "Patrón Feérico",
                "Patrón Infernal",
                "Patrón Primigenio"
            ]
        },
        {
            nombre: "Clérigo",
            descripcion: "Canalizador de magia divina capaz de sanar, proteger y castigar.",
            subclases: [
                "Dominio de la Guerra",
                "Dominio de la Luz",
                "Dominio de la Vida",
                "Dominio del Engaño"
            ]
        },
        {
            nombre: "Druida",
            descripcion: "Lanzador de magia natural capaz de sanar, transformarse y controlar los elementos.",
            subclases: [
                "Círculo de la Luna",
                "Círculo de la Tierra",
                "Círculo de las Estrellas",
                "Círculo del Mar"
            ]
        },
        {
            nombre: "Explorador",
            descripcion: "Combatiente experto en naturaleza, supervivencia, rastreo y magia primal.",
            subclases: [
                "Acechador en la Penumbra",
                "Cazador",
                "Errante Feérico",
                "Señor de las Bestias"
            ]
        },
        {
            nombre: "Guerrero",
            descripcion: "Especialista marcial versátil que domina armas, armaduras y técnicas de combate.",
            subclases: [
                "Caballero Arcano",
                "Campeón",
                "Guerrero Psiónico",
                "Maestro del Combate"
            ]
        },
        {
            nombre: "Hechicero",
            descripcion: "Lanzador de magia innata que moldea sus conjuros mediante poder interior.",
            subclases: [
                "Hechicería Aberrante",
                "Hechicería de Magia Salvaje",
                "Hechicería Dracónica",
                "Hechicería Mecánica"
            ]
        },
        {
            nombre: "Mago",
            descripcion: "Estudioso de la magia arcana que prepara conjuros mediante su libro de conjuros.",
            subclases: [
                "Abjurador",
                "Adivino",
                "Evocador",
                "Ilusionista"
            ]
        },
        {
            nombre: "Monje",
            descripcion: "Combatiente ágil que usa disciplina corporal y energía interior para luchar.",
            subclases: [
                "Guerrero de la Mano Abierta",
                "Guerrero de la Misericordia",
                "Guerrero de la Sombra",
                "Guerrero de los Elementos"
            ]
        },
        {
            nombre: "Paladín",
            descripcion: "Combatiente sagrado que protege aliados y castiga enemigos con poder divino.",
            subclases: [
                "Juramento de Entrega",
                "Juramento de Gloria",
                "Juramento de los Antiguos",
                "Juramento de Venganza"
            ]
        },
        {
            nombre: "Pícaro",
            descripcion: "Especialista en sigilo, precisión, habilidades y ataques furtivos.",
            subclases: [
                "Asesino",
                "Embaucador Arcano",
                "Ladrón",
                "Rebanalmas"
            ]
        }
    ]
};

const catalogoClases = [
    {
        nombre: "Bárbaro",
        resumen: "Combatiente poderoso que canaliza fuerzas primigenias mediante la furia. Destaca en cuerpo a cuerpo, resistencia física y ataques brutales.",
        caracteristicaPrincipal: "Fuerza",
        dadoGolpe: "1d12 por nivel de bárbaro",
        salvaciones: [
            "Fuerza",
            "Constitución"
        ],
        competenciasArmadura: "Armaduras ligeras y medias, y escudos",
        competenciasArmas: "Armas sencillas y marciales",
        entrenamientoHerramientas: "Ninguno",
        equipoInicial: {
            opcionA: [
                "Hacha a dos manos",
                "4 hachas de mano",
                "Paquete de explorador",
                "15 po"
            ],
            opcionB: [
                "75 po"
            ]
        },

        progresion: {
            titulo: "Progresión del bárbaro",
            columnas: [
                "Nivel",
                "Comp.",
                "Usos furia",
                "Daño furia",
                "Maestría"
            ],
            filas: [
                ["1", "+2", "2", "+2", "2"],
                ["2", "+2", "2", "+2", "2"],
                ["3", "+2", "3", "+2", "2"],
                ["4", "+2", "3", "+2", "3"],
                ["5", "+3", "3", "+2", "3"],
                ["6", "+3", "4", "+2", "3"],
                ["7", "+3", "4", "+2", "3"],
                ["8", "+3", "4", "+2", "3"],
                ["9", "+4", "4", "+3", "3"],
                ["10", "+4", "4", "+3", "4"],
                ["11", "+4", "4", "+3", "4"],
                ["12", "+4", "5", "+3", "4"],
                ["13", "+5", "5", "+3", "4"],
                ["14", "+5", "5", "+3", "4"],
                ["15", "+5", "5", "+3", "4"],
                ["16", "+5", "5", "+4", "4"],
                ["17", "+6", "6", "+4", "4"],
                ["18", "+6", "6", "+4", "4"],
                ["19", "+6", "6", "+4", "4"],
                ["20", "+6", "6", "+4", "4"]
            ]
        },
        rasgosClase: [
            {
                nombre: "Nivel 1: Defensa sin armadura",
                descripcion: "Mientras no lleves armadura, tu Clase de Armadura es igual a 10 + tu modificador de Destreza + tu modificador de Constitución. Puedes usar escudo y seguir obteniendo este beneficio."
            },
            {
                nombre: "Nivel 1: Furia",
                descripcion: "Como acción adicional, puedes dejarte llevar por la furia si no llevas armadura pesada. Mientras estás enfurecido, tienes resistencia al daño contundente, cortante y perforante; cuando atacas usando Fuerza causas daño adicional; tienes ventaja en pruebas y salvaciones de Fuerza; y no puedes mantener concentración ni lanzar conjuros. La furia dura hasta el final de tu siguiente turno, pero puedes prolongarla si atacas, obligas a un enemigo a hacer una salvación o usas una acción adicional para mantenerla. El número de usos y el daño adicional aumentan con el nivel según la tabla de progresión de la clase. Recuperas todos los usos al finalizar un descanso corto o largo."
            },
            {
                nombre: "Nivel 1: Maestría con armas",
                descripcion: "Puedes usar las propiedades de maestría de armas sencillas o marciales a tu elección. Tras un descanso largo, puedes cambiar las armas elegidas. El número de armas dominadas aumenta con el nivel según la tabla de progresión de la clase."
            },
            {
                nombre: "Nivel 2: Ataque temerario",
                descripcion: "Puedes atacar abandonando parte de tu defensa. La primera tirada de ataque de tu turno con Fuerza puede tener ventaja, pero hasta el inicio de tu siguiente turno las tiradas de ataque contra ti también tienen ventaja."
            },
            {
                nombre: "Nivel 2: Sentir el peligro",
                descripcion: "Tienes ventaja en las tiradas de salvación de Destreza, siempre que no tengas el estado incapacitado."
            },
            {
                nombre: "Nivel 3: Conocimiento primigenio",
                descripcion: "Ganas competencia en otra habilidad de la lista del bárbaro. Además, mientras estás enfurecido, puedes usar Fuerza para ciertas pruebas de Acrobacias, Intimidación, Percepción, Sigilo o Supervivencia, representando poder primigenio que agudiza tus capacidades."
            },
            {
                nombre: "Nivel 3: Subclase de bárbaro",
                descripcion: "Eliges una subclase de bárbaro. Recibes sus rasgos en los niveles indicados por la clase."
            },
            {
                nombre: "Nivel 4: Mejora de característica",
                descripcion: "Obtienes una dote de Mejora de característica u otra dote para la que cumplas los requisitos. Vuelves a obtener este rasgo en los niveles 8, 12 y 16."
            },
            {
                nombre: "Nivel 5: Ataque adicional",
                descripcion: "Cuando llevas a cabo la acción Atacar en tu turno, puedes atacar dos veces en lugar de una."
            },
            {
                nombre: "Nivel 5: Movimiento rápido",
                descripcion: "Tu velocidad aumenta en 3 m si no llevas armadura pesada."
            },
            {
                nombre: "Nivel 7: Instinto salvaje",
                descripcion: "Tus instintos están tan afinados que tienes ventaja en las tiradas de iniciativa."
            },
            {
                nombre: "Nivel 7: Salto instintivo",
                descripcion: "Como parte de la acción adicional que usas para entrar en furia, puedes moverte hasta la mitad de tu velocidad."
            },
            {
                nombre: "Nivel 9: Golpe brutal",
                descripcion: "Si usas Ataque temerario, puedes renunciar a una ventaja en una tirada de ataque con Fuerza durante tu turno. Si el ataque impacta, causa 1d10 de daño adicional y aplicas un efecto de Golpe brutal: empujar al objetivo o reducir su velocidad. Solo puedes aplicar un efecto de Golpe brutal por vez."
            },
            {
                nombre: "Nivel 11: Furia implacable",
                descripcion: "Mientras estás enfurecido, si tus puntos de golpe se reducen a 0 y no mueres inmediatamente, puedes hacer una salvación de Constitución CD 10. Si la superas, tus puntos de golpe pasan a una cantidad igual al doble de tu nivel de bárbaro. La CD aumenta cada vez que lo usas y vuelve a 10 tras un descanso corto o largo."
            },
            {
                nombre: "Nivel 13: Golpe brutal mejorado",
                descripcion: "Obtienes nuevas opciones de Golpe brutal, como penalizar la siguiente salvación del objetivo o facilitar el siguiente ataque de otra criatura contra él."
            },
            {
                nombre: "Nivel 15: Furia persistente",
                descripcion: "Al tirar iniciativa, recuperas todos los usos gastados de furia. Además, la furia dura 10 minutos sin necesidad de prolongarla turno a turno y solo termina antes si quedas incapacitado o te pones armadura pesada."
            },
            {
                nombre: "Nivel 17: Golpe brutal mejorado",
                descripcion: "El daño adicional de Golpe brutal aumenta a 2d10. Además, puedes usar dos efectos diferentes de Golpe brutal siempre que uses este rasgo."
            },
            {
                nombre: "Nivel 18: Poderío indómito",
                descripcion: "Si el resultado de una prueba de Fuerza o una salvación de Fuerza es inferior a tu puntuación de Fuerza, puedes usar esa puntuación en lugar del resultado."
            },
            {
                nombre: "Nivel 19: Don épico",
                descripcion: "Obtienes una dote de don épico u otra dote para la que cumplas los requisitos."
            },
            {
                nombre: "Nivel 20: Campeón primordial",
                descripcion: "Tus puntuaciones de Fuerza y Constitución aumentan en 4, hasta un máximo de 25."
            }
        ],
        subclases: [
            {
                nombre: "Senda del Árbol del Mundo",
                resumen: "Bárbaro conectado al Árbol del Mundo, capaz de usar la furia para proteger aliados, invocar ramas espectrales y teleportarse.",
                rasgos: [
                    {
                        nombre: "Nivel 3: Vitalidad del árbol",
                        descripcion: "Cuando te enfureces, obtienes puntos de golpe temporales. Además, al principio de cada uno de tus turnos mientras estás enfurecido, puedes conceder puntos de golpe temporales a otra criatura cercana."
                    },
                    {
                        nombre: "Nivel 6: Ramas del árbol",
                        descripcion: "Cuando una criatura que puedes ver empieza su turno cerca de ti mientras estás enfurecido, puedes usar una reacción para invocar ramas espectrales. El objetivo debe superar una salvación de Fuerza o ser teleportado a un espacio que puedas ver cerca de ti, y después puedes reducir su velocidad."
                    },
                    {
                        nombre: "Nivel 10: Raíces apaleadoras",
                        descripcion: "Durante tu turno, tu alcance aumenta con cualquier arma cuerpo a cuerpo con propiedad pesada o versátil. Cuando impactas con ella, puedes activar una propiedad de maestría adicional."
                    },
                    {
                        nombre: "Nivel 14: Viajar por el árbol",
                        descripcion: "Mientras estás enfurecido, puedes teleportarte como acción adicional. Una vez por furia, puedes aumentar el alcance y transportar también a criaturas voluntarias cercanas."
                    }
                ]
            },
            {
                nombre: "Senda del Berserker",
                resumen: "Bárbaro que convierte su furia en una violencia indómita, centrada en causar daño, resistir el miedo y responder con represalias.",
                rasgos: [
                    {
                        nombre: "Nivel 3: Frenesí",
                        descripcion: "Si usas Ataque temerario mientras estás enfurecido, causas daño adicional al primer objetivo al que impactes en tu turno con un ataque basado en Fuerza. El daño adicional se calcula con dados d6 igual a tu bonificador de daño por furia."
                    },
                    {
                        nombre: "Nivel 6: Furia irracional",
                        descripcion: "Mientras estás enfurecido tienes inmunidad a los estados asustado y hechizado. Si ya tenías uno de esos estados antes de entrar en furia, termina."
                    },
                    {
                        nombre: "Nivel 10: Represalia",
                        descripcion: "Cuando recibes daño de una criatura cercana, puedes usar una reacción para hacer un ataque cuerpo a cuerpo contra esa criatura."
                    },
                    {
                        nombre: "Nivel 14: Presencia intimidante",
                        descripcion: "Como acción adicional, puedes sembrar el terror en criaturas cercanas. Las criaturas elegidas deben superar una salvación de Sabiduría o quedar asustadas durante 1 minuto. Pueden repetir la salvación al final de sus turnos. Tras usar este rasgo, necesitas un descanso largo para recuperarlo, salvo que gastes un uso de furia."
                    }
                ]
            },
            {
                nombre: "Senda del Corazón Salvaje",
                resumen: "Bárbaro que canaliza una conexión espiritual con los animales y la naturaleza.",
                rasgos: [
                    {
                        nombre: "Nivel 3: Furia de lo salvaje",
                        descripcion: "Cuando te enfureces, eliges una opción animal. Águila te permite llevar a cabo Destrabarse y Correr como parte de una acción adicional; Lobo concede ventaja a tus aliados contra enemigos cercanos a ti; Oso te da resistencia adicional a varios tipos de daño."
                    },
                    {
                        nombre: "Nivel 3: Portavoz de los animales",
                        descripcion: "Puedes lanzar hablar con los animales y sentido de la bestia como rituales. Sabiduría es tu aptitud mágica para estos conjuros."
                    },
                    {
                        nombre: "Nivel 6: Aspecto de lo salvaje",
                        descripcion: "Obtienes una opción salvaje tras cada descanso largo. Búho mejora tu visión en la oscuridad; Pantera mejora tu velocidad de trepar; Salmón te da velocidad nadando."
                    },
                    {
                        nombre: "Nivel 10: Hablante de la naturaleza",
                        descripcion: "Puedes lanzar comunión con la naturaleza como ritual. Sabiduría es tu aptitud mágica para este conjuro."
                    },
                    {
                        nombre: "Nivel 14: Poder de lo salvaje",
                        descripcion: "Cuando te enfureces, eliges una opción. Carnero puede derribar a un objetivo Grande o menor al impactar; Halcón te permite volar durante tu turno si no llevas armadura; León dificulta que enemigos cercanos ataquen a otros objetivos."
                    }
                ]
            },
            {
                nombre: "Senda del Fanático",
                resumen: "Bárbaro que canaliza su furia mediante una unión eufórica con una divinidad o poder sagrado.",
                rasgos: [
                    {
                        nombre: "Nivel 3: Furia divina",
                        descripcion: "En cada uno de tus turnos mientras estás enfurecido, la primera criatura a la que impactes con un arma o ataque sin armas recibe daño adicional necrótico o radiante."
                    },
                    {
                        nombre: "Nivel 3: Guerrero de los dioses",
                        descripcion: "Tienes una reserva de dados d12 que puedes usar para curarte. Como acción adicional, gastas dados de la reserva y recuperas puntos de golpe. La reserva aumenta con tu nivel de bárbaro y se recupera al finalizar un descanso largo."
                    },
                    {
                        nombre: "Nivel 6: Foco fanático",
                        descripcion: "Una vez por furia, si fallas una tirada de salvación, puedes repetirla con un bonificador igual a tu bonificador de daño por furia y debes usar el nuevo resultado."
                    },
                    {
                        nombre: "Nivel 10: Presencia ferviente",
                        descripcion: "Como acción adicional, das un grito de guerra imbuido de poder divino. Tú y criaturas cercanas elegidas obtenéis ventaja en ataques y salvaciones hasta el inicio de tu siguiente turno. Se recupera con descanso largo o gastando un uso de furia."
                    },
                    {
                        nombre: "Nivel 14: Furia de los dioses",
                        descripcion: "Cuando te enfureces, puedes adoptar una forma de guerrero divino durante 1 minuto o hasta que tus puntos de golpe se reduzcan a 0. Obtienes resistencia al daño necrótico, psíquico y radiante; puedes usar una reacción para impedir que una criatura cercana caiga a 0 puntos de golpe, cambiándolos a una cantidad igual a tu nivel de bárbaro; y tienes velocidad de vuelo igual a tu velocidad y puedes levitar."
                    }
                ]
            }
        ]
    },

    {
        nombre: "Bardo",
        resumen: "Artista mágico que usa palabras, música y creatividad para inspirar aliados, manipular enemigos y lanzar conjuros mediante Carisma.",
        caracteristicaPrincipal: "Carisma",
        dadoGolpe: "1d8 por nivel de bardo",
        salvaciones: [
            "Destreza",
            "Carisma"
        ],
        competenciasArmadura: "Armaduras ligeras",
        competenciasArmas: "Armas sencillas",
        entrenamientoHerramientas: "Elige tres instrumentos musicales",
        equipoInicial: {
            opcionA: [
                "Armadura de cuero",
                "2 dagas",
                "Instrumento musical de tu elección",
                "Paquete de artista",
                "19 po"
            ],
            opcionB: [
                "90 po"
            ]
        },
        progresion: {
            titulo: "Progresión del bardo",
            columnas: [
                "Nivel",
                "Comp.",
                "Dado",
                "Trucos",
                "Conjuros"
            ],
            filas: [
                ["1", "+2", "d6", "2", "4"],
                ["2", "+2", "d6", "2", "5"],
                ["3", "+2", "d6", "2", "6"],
                ["4", "+2", "d6", "3", "7"],
                ["5", "+3", "d8", "3", "9"],
                ["6", "+3", "d8", "3", "10"],
                ["7", "+3", "d8", "3", "11"],
                ["8", "+3", "d8", "3", "12"],
                ["9", "+4", "d8", "3", "14"],
                ["10", "+4", "d10", "4", "15"],
                ["11", "+4", "d10", "4", "16"],
                ["12", "+4", "d10", "4", "16"],
                ["13", "+5", "d10", "4", "17"],
                ["14", "+5", "d10", "4", "17"],
                ["15", "+5", "d12", "4", "18"],
                ["16", "+5", "d12", "4", "18"],
                ["17", "+6", "d12", "4", "19"],
                ["18", "+6", "d12", "4", "20"],
                ["19", "+6", "d12", "4", "21"],
                ["20", "+6", "d12", "4", "22"]
            ]
        },
        espaciosConjuro: {
            titulo: "Espacios de conjuro",
            columnas: [
                "Nivel",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9"
            ],
            filas: [
                ["1", "2", "-", "-", "-", "-", "-", "-", "-", "-"],
                ["2", "3", "-", "-", "-", "-", "-", "-", "-", "-"],
                ["3", "4", "2", "-", "-", "-", "-", "-", "-", "-"],
                ["4", "4", "3", "-", "-", "-", "-", "-", "-", "-"],
                ["5", "4", "3", "2", "-", "-", "-", "-", "-", "-"],
                ["6", "4", "3", "3", "-", "-", "-", "-", "-", "-"],
                ["7", "4", "3", "3", "1", "-", "-", "-", "-", "-"],
                ["8", "4", "3", "3", "2", "-", "-", "-", "-", "-"],
                ["9", "4", "3", "3", "3", "1", "-", "-", "-", "-"],
                ["10", "4", "3", "3", "3", "2", "-", "-", "-", "-"],
                ["11", "4", "3", "3", "3", "2", "1", "-", "-", "-"],
                ["12", "4", "3", "3", "3", "2", "1", "-", "-", "-"],
                ["13", "4", "3", "3", "3", "2", "1", "1", "-", "-"],
                ["14", "4", "3", "3", "3", "2", "1", "1", "-", "-"],
                ["15", "4", "3", "3", "3", "2", "1", "1", "1", "-"],
                ["16", "4", "3", "3", "3", "2", "1", "1", "1", "-"],
                ["17", "4", "3", "3", "3", "2", "1", "1", "1", "1"],
                ["18", "4", "3", "3", "3", "3", "1", "1", "1", "1"],
                ["19", "4", "3", "3", "3", "3", "2", "1", "1", "1"],
                ["20", "4", "3", "3", "3", "3", "2", "2", "1", "1"]
            ]
        },
        rasgosClase: [
            {
                nombre: "Nivel 1: Inspiración bárdica",
                descripcion: "Puedes inspirar sobrenaturalmente a otra criatura que esté a 18 m o menos de ti y pueda verte u oírte. Como acción adicional, le otorgas un dado de Inspiración bárdica. Durante la siguiente hora, la criatura puede tirar ese dado y sumarlo a una prueba, ataque o tirada de salvación después de tirar el d20, pero antes de saber si tiene éxito. El tamaño del dado y el número de usos aumentan con el nivel según la tabla de progresión de la clase. Recuperas todos los usos al finalizar un descanso largo."
            },
            {
                nombre: "Nivel 1: Lanzamiento de conjuros",
                descripcion: "Puedes lanzar conjuros de la lista de conjuros de bardo usando Carisma como aptitud mágica. El número de trucos, conjuros preparados y espacios de conjuro aumenta con el nivel según las tablas de progresión. Puedes usar un instrumento musical como canalizador mágico para tus conjuros de bardo."
            },
            {
                nombre: "Nivel 2: Aprendiz de mucho",
                descripcion: "Puedes sumar la mitad de tu bonificador por competencia, redondeando hacia abajo, a cualquier prueba de característica que uses con una habilidad en la que no tengas competencia y que no se beneficie ya de tu bonificador por competencia."
            },
            {
                nombre: "Nivel 2: Pericia",
                descripcion: "Ganas pericia en dos habilidades en las que tengas competencia. En nivel 9 obtienes pericia en otras dos habilidades."
            },
            {
                nombre: "Nivel 3: Subclase de bardo",
                descripcion: "Eliges una subclase de bardo. Recibes sus rasgos en los niveles indicados por la clase."
            },
            {
                nombre: "Nivel 4: Mejora de característica",
                descripcion: "Obtienes una dote de Mejora de característica u otra dote para la que cumplas los requisitos. Vuelves a obtener este rasgo en los niveles 8, 12 y 16."
            },
            {
                nombre: "Nivel 5: Fuente de inspiración",
                descripcion: "Recuperas todos los usos de Inspiración bárdica al finalizar un descanso corto o largo. Además, puedes gastar un espacio de conjuro sin usar acción para recuperar un uso gastado de Inspiración bárdica."
            },
            {
                nombre: "Nivel 7: Contraencantamiento",
                descripcion: "Puedes usar música o palabras de poder para proteger contra efectos mentales. Si tú o una criatura a 9 m o menos falláis una salvación contra un efecto que aplique el estado asustado o hechizado, puedes usar una reacción para repetir la tirada con ventaja, usando el nuevo resultado."
            },
            {
                nombre: "Nivel 10: Secretos mágicos",
                descripcion: "Cuando tu cantidad de conjuros preparados aumente, puedes elegir conjuros de las listas de bardo, clérigo, druida y mago. Los conjuros elegidos cuentan como conjuros de bardo para ti. Además, cuando sustituyas un conjuro preparado de bardo, puedes sustituirlo por un conjuro de cualquiera de esas listas."
            },
            {
                nombre: "Nivel 18: Inspiración superior",
                descripcion: "Cuando tiras iniciativa, recuperas usos gastados de Inspiración bárdica hasta tener al menos dos usos disponibles."
            },
            {
                nombre: "Nivel 19: Don épico",
                descripcion: "Obtienes una dote de don épico u otra dote para la que cumplas los requisitos."
            },
            {
                nombre: "Nivel 20: Palabras de creación",
                descripcion: "Dominas dos palabras de creación: palabra de poder sanar y palabra de poder matar. Siempre tienes ambos conjuros preparados. Cuando lanzas uno de ellos, puedes elegir una segunda criatura situada a 3 m o menos del objetivo inicial para que también sea afectada."
            }
        ],
        subclases: [
            {
                nombre: "Colegio de la Danza",
                resumen: "Bardo que convierte el movimiento, la música y el ritmo en una forma de combate ágil y elegante.",
                rasgos: [
                    {
                        nombre: "Nivel 3: Juego de pies deslumbrante",
                        descripcion: "Mientras no llevas armadura ni portas escudo, obtienes beneficios como ventaja en pruebas de Interpretación relacionadas con la danza, una defensa sin armadura basada en Destreza y Carisma, ataques sin armas ágiles y daño adicional al golpear sin armas gastando Inspiración bárdica."
                    },
                    {
                        nombre: "Nivel 6: Juego de pies conjunto",
                        descripcion: "Cuando tiras iniciativa, puedes gastar un uso de Inspiración bárdica para que tú y aliados cercanos suméis una tirada de tu dado de Inspiración bárdica a vuestra iniciativa."
                    },
                    {
                        nombre: "Nivel 6: Movimiento inspirador",
                        descripcion: "Cuando un enemigo termina su turno cerca de ti, puedes usar una reacción y gastar Inspiración bárdica para moverte hasta la mitad de tu velocidad. Un aliado cercano también puede moverse hasta la mitad de su velocidad sin provocar ataques de oportunidad."
                    },
                    {
                        nombre: "Nivel 14: Evasión dirigida",
                        descripcion: "Cuando sufres un efecto que permite una salvación de Destreza para recibir la mitad de daño, no recibes daño si superas la salvación y solo recibes la mitad si fallas. Puedes compartir este beneficio con criaturas cercanas."
                    }
                ]
            },
            {
                nombre: "Colegio del Conocimiento",
                resumen: "Bardo centrado en el saber, la investigación, los secretos mágicos y el uso preciso de la palabra.",
                rasgos: [
                    {
                        nombre: "Nivel 3: Competencias adicionales",
                        descripcion: "Ganas competencia en tres habilidades de tu elección."
                    },
                    {
                        nombre: "Nivel 3: Palabras cortantes",
                        descripcion: "Cuando una criatura cercana a la que puedas ver tenga éxito en una prueba de característica o una tirada de ataque, puedes usar una reacción y gastar Inspiración bárdica para restar el resultado del dado a esa tirada, pudiendo convertir el éxito en un fallo."
                    },
                    {
                        nombre: "Nivel 6: Descubrimientos mágicos",
                        descripcion: "Aprendes dos conjuros de tu elección de las listas de clérigo, druida o mago, o una combinación de ellas. Estos conjuros cuentan como conjuros de bardo para ti y puedes sustituirlos al subir de nivel por otros que cumplan los mismos requisitos."
                    },
                    {
                        nombre: "Nivel 14: Habilidad sin parangón",
                        descripcion: "Cuando haces una prueba de característica y fallas, puedes gastar Inspiración bárdica, tirar el dado y sumar el resultado, pudiendo convertir el fallo en éxito. Si aun así fallas, la Inspiración bárdica no se gasta."
                    }
                ]
            },
            {
                nombre: "Colegio del Glamour",
                resumen: "Bardo que usa magia feérica, presencia sobrenatural y encanto para fascinar, proteger y dominar la escena.",
                rasgos: [
                    {
                        nombre: "Nivel 3: Magia cautivadora",
                        descripcion: "Siempre tienes preparados los conjuros hechizar persona e imagen múltiple. Además, después de lanzar un conjuro de encantamiento o ilusión usando un espacio de conjuro, puedes intentar hechizar o asustar a una criatura cercana."
                    },
                    {
                        nombre: "Nivel 3: Manto de inspiración",
                        descripcion: "Como acción adicional, puedes gastar Inspiración bárdica para conceder puntos de golpe temporales a criaturas cercanas elegidas. Esas criaturas pueden usar su reacción para moverse sin provocar ataques de oportunidad."
                    },
                    {
                        nombre: "Nivel 6: Manto de majestad",
                        descripcion: "Siempre tienes preparado orden imperiosa. Puedes lanzar orden imperiosa sin gastar espacio de conjuro y adoptar una apariencia majestuosa durante 1 minuto. Mientras dure, puedes lanzar orden imperiosa como acción adicional sin gastar espacios."
                    },
                    {
                        nombre: "Nivel 14: Majestad inquebrantable",
                        descripcion: "Como acción adicional, adoptas una presencia mágica imponente durante 1 minuto. Las criaturas que intenten atacarte por primera vez en un turno deben superar una salvación de Carisma contra tu CD de conjuros o fallar el ataque."
                    }
                ]
            },
            {
                nombre: "Colegio del Valor",
                resumen: "Bardo marcial que inspira desde la primera línea, mezclando armas, magia y relatos heroicos.",
                rasgos: [
                    {
                        nombre: "Nivel 3: Entrenamiento marcial",
                        descripcion: "Ganas competencia con armas marciales y armaduras medias y escudos. Además, puedes usar un arma sencilla o marcial como canalizador mágico para lanzar tus conjuros de bardo."
                    },
                    {
                        nombre: "Nivel 3: Inspiración en combate",
                        descripcion: "Una criatura que tenga tu Inspiración bárdica puede usarla para mejorar su defensa o su ataque. Puede sumar el dado a su CA como reacción contra un ataque, o sumarlo al daño justo después de impactar."
                    },
                    {
                        nombre: "Nivel 6: Ataque adicional",
                        descripcion: "Cuando llevas a cabo la acción Atacar en tu turno, puedes hacer dos ataques en lugar de uno. Además, puedes sustituir uno de esos ataques por el lanzamiento de uno de tus trucos con tiempo de lanzamiento de una acción."
                    },
                    {
                        nombre: "Nivel 14: Magia de batalla",
                        descripcion: "Tras lanzar un conjuro con tiempo de lanzamiento de una acción, puedes hacer un ataque con arma como acción adicional."
                    }
                ]
            }
        ]
    }
];