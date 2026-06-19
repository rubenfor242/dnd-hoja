const introduccionTrasfondos = {
    titulo: "¿Qué es un trasfondo?",
    parrafos: [
        "El trasfondo representa el lugar, ocupación y experiencias más importantes que tuvo tu personaje antes de convertirse en aventurero."
    ],
    subtitulo: "¿Qué aporta un trasfondo?",
    elementos: [
        "Aumentos de característica.",
        "Una dote de origen.",
        "Competencia en dos habilidades.",
        "Competencia en una herramienta.",
        "Equipo inicial, eligiendo entre el paquete indicado (A) o 50 po (B)."
    ],
    nota: "El equipo del trasfondo se suma al equipo inicial proporcionado por la clase."
};

const reglaAumentosTrasfondo = {
    titulo: "Aumentos de característica",
    texto: "Cada trasfondo indica tres características. Al crear el personaje, puedes aumentar el valor de una de ellas en 2 y otra en 1, o aumentar las tres en 1. Ninguna puntuación puede superar 20 con estos aumentos."
};

const catalogoTrasfondos = [
    {
        nombre: "Acólito",
        caracteristicas: [
            "Inteligencia",
            "Sabiduría",
            "Carisma"
        ],
        dote: "Iniciado en la magia (Clérigo)",
        habilidades: [
            "Perspicacia",
            "Religión"
        ],
        herramientas: [
            "Suministros de calígrafo"
        ],
        equipo: {
            opcionA: [
                "Suministros de calígrafo",
                "Libro de oraciones",
                "Pergamino (10 hojas)",
                "Símbolo sagrado",
                "Túnica",
                "8 po"
            ],
            opcionB: [
                "50 po"
            ]
        },
        resumen: "Has dedicado tu vida al servicio de un templo, aprendiendo ritos, religión y devoción."
    },

    {
        nombre: "Animador",
        caracteristicas: [
            "Fuerza",
            "Destreza",
            "Carisma"
        ],
        dote: "Músico",
        habilidades: [
            "Acrobacias",
            "Interpretación"
        ],
        herramientas: [
            "Un tipo de instrumento musical"
        ],
        equipo: {
            opcionA: [
                "Instrumento musical",
                "2 disfraces",
                "Espejo",
                "Perfume",
                "Ropas de viaje",
                "11 po"
            ],
            opcionB: [
                "50 po"
            ]
        },
        resumen: "Has recorrido ferias, festivales y escenarios, viviendo del espectáculo y del aplauso."
    },

    {
        nombre: "Artesano",
        caracteristicas: [
            "Fuerza",
            "Destreza",
            "Inteligencia"
        ],
        dote: "Fabricante",
        habilidades: [
            "Investigación",
            "Persuasión"
        ],
        herramientas: [
            "Un tipo de herramientas de artesano"
        ],
        equipo: {
            opcionA: [
                "Herramientas de artesano",
                "2 bolsas",
                "Ropas de viaje",
                "32 po"
            ],
            opcionB: [
                "50 po"
            ]
        },
        resumen: "Aprendiste un oficio artesano, creando obras básicas, tratando con clientes y desarrollando buen ojo para los detalles."
    },

    {
        nombre: "Campesino",
        caracteristicas: [
            "Fuerza",
            "Constitución",
            "Sabiduría"
        ],
        dote: "Duro",
        habilidades: [
            "Naturaleza",
            "Trato con animales"
        ],
        herramientas: [
            "Herramientas de carpintero"
        ],
        equipo: {
            opcionA: [
                "Hoz",
                "Herramientas de carpintero",
                "Útiles de sanador",
                "Olla de hierro",
                "Pala",
                "Ropas de viaje",
                "30 po"
            ],
            opcionB: [
                "50 po"
            ]
        },
        resumen: "Te criaste en el campo, cuidando animales y cultivando la tierra con paciencia, salud de hierro y respeto por la naturaleza."
    },

    {
        nombre: "Charlatán",
        caracteristicas: [
            "Destreza",
            "Constitución",
            "Carisma"
        ],
        dote: "Habilidoso",
        habilidades: [
            "Engaño",
            "Juego de manos"
        ],
        herramientas: [
            "Útiles para falsificar"
        ],
        equipo: {
            opcionA: [
                "Útiles para falsificar",
                "Disfraz",
                "Ropas de calidad",
                "15 po"
            ],
            opcionB: [
                "50 po"
            ]
        },
        resumen: "Te ganaste la vida mediante engaños, disfraces y falsificaciones, aprendiendo a manipular y confundir a los demás."
    },

    {
        nombre: "Comerciante",
        caracteristicas: [
            "Constitución",
            "Inteligencia",
            "Carisma"
        ],
        dote: "Afortunado",
        habilidades: [
            "Persuasión",
            "Trato con animales"
        ],
        herramientas: [
            "Herramientas de navegante"
        ],
        equipo: {
            opcionA: [
                "Herramientas de navegante",
                "2 bolsas",
                "Ropas de viaje",
                "22 po"
            ],
            opcionB: [
                "50 po"
            ]
        },
        resumen: "Aprendiste el oficio del comercio comprando, vendiendo y transportando mercancías, desarrollando buen ojo para los negocios y el trato con la gente."
    },

    {
        nombre: "Criminal",
        caracteristicas: [
            "Destreza",
            "Constitución",
            "Inteligencia"
        ],
        dote: "Alerta",
        habilidades: [
            "Juego de manos",
            "Sigilo"
        ],
        herramientas: [
            "Herramientas de ladrón"
        ],
        equipo: {
            opcionA: [
                "2 dagas",
                "Herramientas de ladrón",
                "2 bolsas",
                "Palanqueta",
                "Ropas de viaje",
                "16 po"
            ],
            opcionB: [
                "50 po"
            ]
        },
        resumen: "Te buscaste la vida entre robos, estafas y actividades ilegales, aprendiendo a moverte sin ser visto y a aprovechar cualquier oportunidad."
    },

    {
        nombre: "Ermitaño",
        caracteristicas: [
            "Constitución",
            "Sabiduría",
            "Carisma"
        ],
        dote: "Sanador",
        habilidades: [
            "Medicina",
            "Religión"
        ],
        herramientas: [
            "Útiles de herborista"
        ],
        equipo: {
            opcionA: [
                "Bastón",
                "Útiles de herborista",
                "Aceite (3 frascos)",
                "Lámpara",
                "Libro de filosofía",
                "Petate",
                "Ropas de viaje",
                "16 po"
            ],
            opcionB: [
                "50 po"
            ]
        },
        resumen: "Viviste apartado de la sociedad, dedicando años a la reflexión, el estudio y la observación de la naturaleza y los misterios del mundo."
    },

    {
        nombre: "Erudito",
        caracteristicas: [
            "Constitución",
            "Inteligencia",
            "Sabiduría"
        ],
        dote: "Iniciado en la magia (Mago)",
        habilidades: [
            "Conocimiento arcano",
            "Historia"
        ],
        herramientas: [
            "Suministros de calígrafo"
        ],
        equipo: {
            opcionA: [
                "Bastón",
                "Suministros de calígrafo",
                "Libro de historia",
                "Pergamino (8 hojas)",
                "Túnica",
                "8 po"
            ],
            opcionB: [
                "50 po"
            ]
        },
        resumen: "Pasaste años estudiando textos y conocimientos especializados, ampliando tu comprensión de la historia, la magia y los secretos del multiverso."
    },

    {
        nombre: "Escriba",
        caracteristicas: [
            "Destreza",
            "Inteligencia",
            "Sabiduría"
        ],
        dote: "Habilidoso",
        habilidades: [
            "Investigación",
            "Percepción"
        ],
        herramientas: [
            "Suministros de calígrafo"
        ],
        equipo: {
            opcionA: [
                "Suministros de calígrafo",
                "Aceite (3 frascos)",
                "Lámpara",
                "Pergamino (12 hojas)",
                "Ropas de calidad",
                "23 po"
            ],
            opcionB: [
                "50 po"
            ]
        },
        resumen: "Te formaste copiando documentos y textos con precisión, desarrollando una gran atención al detalle y una notable capacidad de observación."
    },

    {
        nombre: "Guardia",
        caracteristicas: [
            "Fuerza",
            "Inteligencia",
            "Sabiduría"
        ],
        dote: "Alerta",
        habilidades: [
            "Atletismo",
            "Percepción"
        ],
        herramientas: [
            "Juego (elige uno)"
        ],
        equipo: {
            opcionA: [
                "Lanza",
                "Ballesta ligera",
                "20 virotes",
                "Juego (el mismo que elijas)",
                "Aljaba",
                "Esposas",
                "Linterna sorda",
                "Ropas de viaje",
                "12 po"
            ],
            opcionB: [
                "50 po"
            ]
        },
        resumen: "Pasaste años vigilando murallas y caminos, desarrollando una gran capacidad de observación y manteniéndote siempre alerta ante cualquier amenaza."
    },

    {
        nombre: "Guía",
        caracteristicas: [
            "Destreza",
            "Constitución",
            "Sabiduría"
        ],
        dote: "Iniciado en la magia (Druida)",
        habilidades: [
            "Sigilo",
            "Supervivencia"
        ],
        herramientas: [
            "Herramientas de cartógrafo"
        ],
        equipo: {
            opcionA: [
                "Arco corto",
                "20 flechas",
                "Herramientas de cartógrafo",
                "Aljaba",
                "Petates",
                "Tienda",
                "Ropas de viaje",
                "3 po"
            ],
            opcionB: [
                "50 po"
            ]
        },
        resumen: "Creciste explorando tierras salvajes y aprendiendo a sobrevivir lejos de la civilización, guiando a otros a través de terrenos peligrosos."
    },

    {
        nombre: "Marinero",
        caracteristicas: [
            "Fuerza",
            "Destreza",
            "Sabiduría"
        ],
        dote: "Matón de taberna",
        habilidades: [
            "Acrobacias",
            "Percepción"
        ],
        herramientas: [
            "Herramientas de navegante"
        ],
        equipo: {
            opcionA: [
                "Daga",
                "Herramientas de navegante",
                "Cuerda",
                "Ropas de viaje",
                "20 po"
            ],
            opcionB: [
                "50 po"
            ]
        },
        resumen: "Viviste navegando mares y ríos, enfrentándote a tormentas, puertos desconocidos y las duras exigencias de la vida a bordo."
    },

    {
        nombre: "Noble",
        caracteristicas: [
            "Fuerza",
            "Inteligencia",
            "Carisma"
        ],
        dote: "Habilidoso",
        habilidades: [
            "Historia",
            "Persuasión"
        ],
        herramientas: [
            "Juego (elige uno)"
        ],
        equipo: {
            opcionA: [
                "Juego (el mismo que elijas)",
                "Perfume",
                "Ropas de calidad",
                "29 po"
            ],
            opcionB: [
                "50 po"
            ]
        },
        resumen: "Te criaste rodeado de riqueza, privilegios e influencia, adquiriendo educación, modales refinados y experiencia en el trato social."
    },

    {
        nombre: "Soldado",
        caracteristicas: [
            "Fuerza",
            "Destreza",
            "Constitución"
        ],
        dote: "Atacante salvaje",
        habilidades: [
            "Atletismo",
            "Intimidación"
        ],
        herramientas: [
            "Juego (elige uno)"
        ],
        equipo: {
            opcionA: [
                "Lanza",
                "Arco corto",
                "20 flechas",
                "Aljaba",
                "Juego (el mismo que elijas)",
                "Útiles de sanador",
                "Ropas de viaje",
                "14 po"
            ],
            opcionB: [
                "50 po"
            ]
        },
        resumen: "Recibiste entrenamiento militar y aprendiste las disciplinas del combate, la resistencia y la vida en campaña al servicio de un ejército."
    },

    {
        nombre: "Vagabundo",
        caracteristicas: [
            "Destreza",
            "Sabiduría",
            "Carisma"
        ],
        dote: "Afortunado",
        habilidades: [
            "Perspicacia",
            "Sigilo"
        ],
        herramientas: [
            "Herramientas de ladrón"
        ],
        equipo: {
            opcionA: [
                "2 dagas",
                "Herramientas de ladrón",
                "Juego (elige uno)",
                "2 bolsas",
                "Petate",
                "Ropas de viaje",
                "16 po"
            ],
            opcionB: [
                "50 po"
            ]
        },
        resumen: "Sobreviviste en las calles gracias a tu ingenio y determinación, aprendiendo a pasar desapercibido y a aprovechar cualquier oportunidad."
    },
];