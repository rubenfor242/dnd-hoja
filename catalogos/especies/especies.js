const introduccionEspecies = {
    titulo: "¿Qué es una especie?",
    parrafos: [
        "La especie representa el origen biológico o fantástico de tu personaje. Determina parte de sus capacidades innatas y le proporciona atributos especiales propios de su pueblo o linaje."
    ],
    subtitulo: "¿Qué aporta una especie?",
    elementos: [
        "Tipo de criatura.",
        "Tamaño.",
        "Velocidad.",
        "Atributos especiales."
    ]
};

const catalogoEspecies = [
    {
        nombre: "Aasimar",
        resumen: "Mortales con una chispa celestial en su alma, vinculados a la luz, la curación y la furia divina.",
        tipoCriatura: "Humanoide",
        tamano: "Mediano o Pequeño",
        velocidad: "9 m",
        atributosEspeciales: [
            {
                nombre: "Manos curativas",
                descripcion: "Puedes tocar a una criatura y hacer que recupere puntos de golpe; tira tantos d4 como tu bonificador de competencia. Después necesitas finalizar un descanso largo para volver a usar este atributo."
            },
            {
                nombre: "Portador de luz",
                descripcion: "Conoces el truco luz. Carisma es tu aptitud mágica para lanzarlo."
            },
            {
                nombre: "Resistencia celestial",
                descripcion: "Tienes resistencia al daño necrótico y al daño radiante."
            },
            {
                nombre: "Visión en la oscuridad",
                descripcion: "Tienes visión en la oscuridad hasta 18 m."
            },
            {
                nombre: "Revelación celestial",
                descripcion: "A nivel 3 puedes transformarte brevemente y elegir una manifestación celestial. La transformación dura 1 minuto. Después necesitas finalizar un descanso largo para volver a usar este atributo."
            }
        ],
        variantes: {
            titulo: "Opciones de revelación celestial",
            columnas: [
                "Opción",
                "Efecto"
            ],
            filas: [
                [
                    "Alas celestiales",
                    "Obtienes velocidad de vuelo igual a tu velocidad."
                ],
                [
                    "Fulgor interior",
                    "Emites luz brillante en un radio de 3 m y luz tenue 3 m más allá, y al final de cada uno de tus turnos, cada criatura a 3 m adicional recibe daño radiante igual a tu bonificador de competencia."
                ],
                [
                    "Mortaja necrótica",
                    "Las criaturas no aliadas a 3 m o menos de tí deben superar una tirada de salvación de Carisma, con CD 8 más tu modificador de Carisma y tu bonificador por competencia, o tendrán el estado de asustado hasta el final de tu siguinete turno."
                ]
            ]
        }
    },

    {
        nombre: "Dracónido",
        resumen: "Humanoides de aspecto dracónico cuyo linaje procede de dragones cromáticos o metálicos.",
        tipoCriatura: "Humanoide",
        tamano: "Mediano",
        velocidad: "9 m",
        atributosEspeciales: [
            {
                nombre: "Linaje dracónico",
                descripcion: "Elige un ancestro dracónico. Este ancestro determina el tipo de daño de tu ataque de aliento, tu resistencia al daño y parte del aspecto de tu personaje."
            },
            {
                nombre: "Ataque de aliento",
                descripcion: "Cuando realizas la acción Atacar en tu turno, puedes sustituir uno de tus ataques por una exhalación de energía mágica en un cono de 4,5 m o en una línea de 9 m de largo y 1,5 m de ancho. Cada criatura en el área debe hacer una tirada de salvación de Destreza con CD 8 más tu modificador de Constitución y tu bonificador por competencia. Si falla, recibe 1d10 de daño del tipo determinado por tu linaje dracónico; si supera la tirada, recibe la mitad. El daño aumenta a 2d10 a nivel 5, 3d10 a nivel 11 y 4d10 a nivel 17. Puedes usar este atributo tantas veces como tu bonificador por competencia y recuperas todos los usos al finalizar un descanso largo."
            },
            {
                nombre: "Resistencia al daño",
                descripcion: "Tienes resistencia al tipo de daño determinado por tu linaje dracónico."
            },
            {
                nombre: "Visión en la oscuridad",
                descripcion: "Tienes visión en la oscuridad hasta 18 m."
            },
            {
                nombre: "Vuelo dracónico",
                descripcion: "A nivel 5 puedes canalizar magia dracónica como acción adicional para obtener alas espectrales durante 10 minutos o hasta que tengas el estado incapacitado. Mientras las alas están activas, tienes velocidad de vuelo igual a tu velocidad. Después necesitas finalizar un descanso largo para volver a usar este atributo."
            }
        ],
        variantes: {
            titulo: "Ancestros dracónicos",
            columnas: [
                "Ancestro",
                "Tipo de daño"
            ],
            filas: [
                [
                    "Azul",
                    "Relámpago"
                ],
                [
                    "Blanco",
                    "Frío"
                ],
                [
                    "Bronce",
                    "Relámpago"
                ],
                [
                    "Cobre",
                    "Ácido"
                ],
                [
                    "Negro",
                    "Ácido"
                ],
                [
                    "Oro",
                    "Fuego"
                ],
                [
                    "Oropel",
                    "Fuego"
                ],
                [
                    "Plata",
                    "Frío"
                ],
                [
                    "Rojo",
                    "Fuego"
                ],
                [
                    "Verde",
                    "Veneno"
                ]
            ]
        }
    },

    {
        nombre: "Elfo",
        resumen: "Seres longevos vinculados a la magia, el trance y diferentes linajes élficos.",
        tipoCriatura: "Humanoide",
        tamano: "Mediano",
        velocidad: "9 m",
        atributosEspeciales: [
            {
                nombre: "Linaje élfico",
                descripcion: "Elige un linaje: alto elfo, drow o elfo de los bosques. El linaje te concede beneficios en nivel 1 y conjuros adicionales en niveles 3 y 5. Inteligencia, Sabiduría o Carisma es tu aptitud mágica para los conjuros obtenidos por este atributo, elegida al seleccionar el linaje."
            },
            {
                nombre: "Linaje feérico",
                descripcion: "Tienes ventaja en las tiradas de salvación para evitar o terminar el estado hechizado."
            },
            {
                nombre: "Sentidos agudos",
                descripcion: "Ganas competencia en una de estas habilidades a tu elección: Percepción, Perspicacia o Supervivencia."
            },
            {
                nombre: "Trance",
                descripcion: "No necesitas dormir y la magia no puede dormirte. Puedes finalizar un descanso largo en 4 horas si pasas ese tiempo en una meditación similar a un trance, durante el cual conservas la consciencia."
            },
            {
                nombre: "Visión en la oscuridad",
                descripcion: "Tienes visión en la oscuridad hasta 18 m."
            }
        ],
        variantes: {
            titulo: "Linajes élficos",
            columnas: [
                "Linaje",
                "Nivel 1",
                "Nivel 3",
                "Nivel 5"
            ],
            filas: [
                [
                    "Alto elfo",
                    "Conoces el truco prestidigitación. Tras finalizar un descanso largo, puedes sustituir ese truco por otro truco de la lista de conjuros de mago.",
                    "Detectar magia",
                    "Paso brumoso"
                ],
                [
                    "Drow",
                    "Tu alcance de visión en la oscuridad aumenta a 36 m. También conoces el truco luces danzantes.",
                    "Fuego feérico",
                    "Oscuridad"
                ],
                [
                    "Elfo de los bosques",
                    "Tu velocidad aumenta a 10,5 m. También conoces el truco saber druídico.",
                    "Zancada prodigiosa",
                    "Pasar sin rastro"
                ]
            ]
        }
    },

    {
        nombre: "Enano",
        resumen: "Pueblo resistente, ligado a la piedra, la forja, la tradición y la vida subterránea.",
        tipoCriatura: "Humanoide",
        tamano: "Mediano",
        velocidad: "9 m",
        atributosEspeciales: [
            {
                nombre: "Afinidad con la piedra",
                descripcion: "Como acción adicional, puedes obtener sentido sísmico con un alcance de 18 m durante 10 minutos. Debes encontrarte sobre una superficie de piedra o en contacto con una superficie de piedra para usar esta capacidad. La piedra puede ser natural o labrada. Puedes usar este atributo una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos al finalizar un descanso largo."
            },
            {
                nombre: "Aguante enano",
                descripcion: "Tus puntos de golpe máximos aumentan en 1 y vuelven a aumentar en 1 cada vez que subes de nivel."
            },
            {
                nombre: "Resistencia enana",
                descripcion: "Tienes resistencia al daño de veneno. También tienes ventaja en las tiradas de salvación para evitar o terminar el estado envenenado."
            },
            {
                nombre: "Visión en la oscuridad",
                descripcion: "Tienes visión en la oscuridad hasta 36 m."
            }
        ]
    },

    {
        nombre: "Gnomo",
        resumen: "Seres pequeños, curiosos y mágicos, asociados a la astucia, la invención y la ilusión.",
        tipoCriatura: "Humanoide",
        tamano: "Pequeño",
        velocidad: "9 m",
        atributosEspeciales: [
            {
                nombre: "Astucia gnoma",
                descripcion: "Tienes ventaja en las tiradas de salvación de Inteligencia, Sabiduría y Carisma."
            },
            {
                nombre: "Linaje gnomo",
                descripcion: "Elige gnomo de las rocas o gnomo de los bosques. Inteligencia, Sabiduría o Carisma es tu aptitud mágica para los conjuros que lances con este atributo, elegida al seleccionar el linaje."
            },
            {
                nombre: "Visión en la oscuridad",
                descripcion: "Tienes visión en la oscuridad hasta 18 m."
            }
        ],
        variantes: {
            titulo: "Linajes gnomos",
            columnas: [
                "Linaje",
                "Beneficio"
            ],
            filas: [
                [
                    "Gnomo de las rocas",
                    "Conoces los trucos prestidigitación y reparar. Además, puedes pasar 10 minutos lanzando prestidigitación para crear un dispositivo mecánico Diminuto. Cuando lo creas, eliges una función: juguete, encendedor o caja de música. Puedes tener tres dispositivos activos a la vez; cada uno se desarma 8 horas después de crearlo o cuando lo desmantelas con una acción."
                ],
                [
                    "Gnomo de los bosques",
                    "Conoces el truco ilusión menor. Además, siempre tienes el conjuro hablar con los animales preparado. Puedes lanzarlo sin gastar espacio de conjuro una vez por descanso largo, y también usando cualquier espacio de conjuro que tengas."
                ]
            ]
        }
    },

    {
        nombre: "Goliat",
        resumen: "Descendientes lejanos de gigantes, fuertes, resistentes y marcados por un linaje gigante concreto.",
        tipoCriatura: "Humanoide",
        tamano: "Mediano",
        velocidad: "10,5 m",
        atributosEspeciales: [
            {
                nombre: "Constitución poderosa",
                descripcion: "Tienes ventaja en cualquier prueba de característica que hagas para poner fin al estado agarrado. Además, al determinar tu capacidad de carga, cuentas como si tuvieras un tamaño una categoría superior."
            },
            {
                nombre: "Forma grande",
                descripcion: "A partir de nivel 5, como acción adicional y si estás en un lugar lo bastante espacioso, puedes cambiar tu tamaño a Grande durante 10 minutos o hasta que tengas el estado incapacitado. Mientras dura, tienes ventaja en pruebas de Fuerza y tu velocidad aumenta en 3 m. Después necesitas finalizar un descanso largo para volver a usar este atributo."
            },
            {
                nombre: "Linaje gigante",
                descripcion: "Elige un linaje gigante. Puedes usar el beneficio elegido una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos al finalizar un descanso largo."
            }
        ],
        variantes: {
            titulo: "Linajes gigantes",
            columnas: [
                "Linaje",
                "Beneficio"
            ],
            filas: [
                [
                    "Gigante de fuego",
                    "Cuando aciertes a un objetivo con una tirada de ataque y le causes daño, también puedes causarle 1d10 de daño de fuego."
                ],
                [
                    "Gigante de las colinas",
                    "Cuando aciertes a una criatura Grande o más pequeña con una tirada de ataque y le causes daño, también puedes infligirle el estado derribado."
                ],
                [
                    "Gigante de las nubes",
                    "Como acción adicional, te teletransportas mágicamente hasta 9 m a un espacio sin ocupar que puedas ver."
                ],
                [
                    "Gigante de escarcha",
                    "Cuando aciertes a un objetivo con una tirada de ataque y le causes daño, también puedes causarle 1d6 de daño de frío y reducir su velocidad en 3 m hasta el principio de tu siguiente turno."
                ],
                [
                    "Gigante de piedra",
                    "Cuando recibas daño, puedes usar una reacción para tirar 1d12. Suma tu modificador de Constitución al resultado y reduce el daño en ese total."
                ],
                [
                    "Gigante de las tormentas",
                    "Cuando una criatura que esté a 18 m o menos de ti te cause daño, puedes usar una reacción para infligirle 1d8 de daño de trueno."
                ]
            ]
        }
    },

    {
        nombre: "Humano",
        resumen: "La especie más extendida y adaptable, caracterizada por su versatilidad, ingenio y ambición.",
        tipoCriatura: "Humanoide",
        tamano: "Mediano o Pequeño",
        velocidad: "9 m",
        atributosEspeciales: [
            {
                nombre: "Diestro",
                descripcion: "Ganas competencia en una habilidad de tu elección."
            },
            {
                nombre: "Ingenioso",
                descripcion: "Obtienes inspiración heroica tras finalizar un descanso largo."
            },
            {
                nombre: "Versátil",
                descripcion: "Obtienes una dote de origen de tu elección. Se recomienda Habilidoso."
            }
        ]
    },

    {
        nombre: "Mediano",
        resumen: "Pequeños, discretos y sorprendentemente valientes, suelen destacar por su suerte y su capacidad para pasar desapercibidos.",
        tipoCriatura: "Humanoide",
        tamano: "Pequeño",
        velocidad: "9 m",
        atributosEspeciales: [
            {
                nombre: "Agilidad de mediano",
                descripcion: "Puedes moverte a través del espacio de cualquier criatura que sea de un tamaño mayor que el tuyo, pero no puedes detenerte en el mismo espacio."
            },
            {
                nombre: "Fortuna",
                descripcion: "Cuando sacas un 1 en una prueba de d20, puedes repetir la tirada y debes usar el nuevo resultado."
            },
            {
                nombre: "Sigiloso por naturaleza",
                descripcion: "Puedes llevar a cabo la acción Esconderte incluso tras una criatura que tenga, al menos, una categoría de tamaño superior al tuyo."
            },
            {
                nombre: "Valiente",
                descripcion: "Tienes ventaja en las tiradas de salvación que hagas para evitar o poner fin al estado asustado."
            }
        ]
    },

    {
        nombre: "Orco",
        resumen: "Humanoides fuertes y resistentes, marcados por una gran determinación y una energía combativa difícil de detener.",
        tipoCriatura: "Humanoide",
        tamano: "Mediano",
        velocidad: "9 m",
        atributosEspeciales: [
            {
                nombre: "Aguante incansable",
                descripcion: "Cuando tus puntos de golpe se reducen a 0 pero no mueres inmediatamente, puedes recuperar 1 punto de golpe. Después necesitas finalizar un descanso largo para volver a usar este atributo."
            },
            {
                nombre: "Descarga de adrenalina",
                descripcion: "Puedes llevar a cabo la acción Correr como acción adicional. Cuando lo haces, obtienes una cantidad de puntos de golpe temporales igual a tu bonificador por competencia. Puedes usar este atributo una cantidad de veces igual a tu bonificador por competencia y recuperas todos los usos al finalizar un descanso corto o largo."
            },
            {
                nombre: "Visión en la oscuridad",
                descripcion: "Tienes visión en la oscuridad hasta 36 m."
            }
        ]
    },

    {
        nombre: "Tiefling",
        resumen: "Personas con un legado infernal, abisal o ctónico, marcadas por resistencias sobrenaturales y magia heredada.",
        tipoCriatura: "Humanoide",
        tamano: "Mediano o Pequeño",
        velocidad: "9 m",
        atributosEspeciales: [
            {
                nombre: "Legado infernal",
                descripcion: "Elige un legado de otro plano: abisal, ctónico o infernal. Ese legado determina una resistencia al daño y los conjuros que obtienes a determinados niveles."
            },
            {
                nombre: "Presencia sobrenatural",
                descripcion: "Conoces el truco taumaturgia. Cuando lo lances con este atributo, utiliza la misma aptitud mágica que hayas elegido para tu legado infernal."
            },
            {
                nombre: "Visión en la oscuridad",
                descripcion: "Tienes visión en la oscuridad hasta 18 m."
            }
        ],
        variantes: {
            titulo: "Legados infernales",
            columnas: [
                "Legado",
                "Nivel 1",
                "Nivel 3",
                "Nivel 5"
            ],
            filas: [
                [
                    "Abisal",
                    "Tienes resistencia al daño de veneno. También conoces el truco rociada venenosa.",
                    "Rayo nauseabundo",
                    "Inmovilizar persona"
                ],
                [
                    "Ctónico",
                    "Tienes resistencia al daño necrótico. También conoces el truco toque helado.",
                    "Falsa vida",
                    "Rayo debilitador"
                ],
                [
                    "Infernal",
                    "Tienes resistencia al daño de fuego. También conoces el truco descarga de fuego.",
                    "Represión infernal",
                    "Oscuridad"
                ]
            ]
        }
    }
];