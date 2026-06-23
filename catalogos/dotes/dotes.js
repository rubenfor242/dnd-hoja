const dotes = [
    {
        nombre: "Acechador",
        categoria: "General",
        requisito: "Nivel 4 o más, Destreza 13 o más",
        resumen: "Mejora tu capacidad para esconderte, moverte en sigilo y atacar sin revelar tu posición.",
        beneficios: [
            "Aumenta tu Destreza en 1, hasta un máximo de 20.",
            "Obtienes visión ciega con un alcance de 3 m.",
            "Puedes intentar esconderte si estás muy oscurecido o detrás de cobertura tres cuartos o cobertura total.",
            "Si fallas una tirada de ataque mientras estás escondido, no revelas tu posición."
        ]
    },
    {
        nombre: "Actor",
        categoria: "General",
        requisito: "Nivel 4 o más, Carisma 13 o más",
        resumen: "Mejora tu capacidad para interpretar, engañar y suplantar a otras criaturas.",
        beneficios: [
            "Aumenta tu Carisma en 1, hasta un máximo de 20.",
            "Tienes ventaja en pruebas de Carisma para hacerte pasar por otra persona.",
            "Puedes imitar voces o sonidos que hayas escuchado durante al menos 1 minuto.",
            "Quien escuche la imitación puede descubrirla con una prueba de Sabiduría enfrentada a tu Carisma."
        ]
    },
    {
        nombre: "Afortunado",
        categoria: "Origen",
        requisito: "Ninguno",
        resumen: "Te permite alterar momentos clave mediante puntos de suerte.",
        beneficios: [
            "Obtienes puntos de suerte igual a tu bonificador por competencia.",
            "Cuando hagas una tirada de d20, puedes gastar 1 punto de suerte para tirar otro d20 y elegir cuál usar.",
            "Cuando una criatura haga una tirada de ataque contra ti, puedes gastar 1 punto de suerte para tirar un d20 y elegir si el ataque usa su tirada o la tuya.",
            "Recuperas todos los puntos de suerte gastados al finalizar un descanso largo."
        ]
    },
    {
        nombre: "Alerta",
        categoria: "Origen",
        requisito: "Ninguno",
        resumen: "Mejora tu iniciativa y tu capacidad para reaccionar al comienzo del combate.",
        beneficios: [
            "Añades tu bonificador por competencia a tus tiradas de iniciativa.",
            "Justo después de tirar iniciativa, puedes intercambiar tu resultado con el de un aliado dispuesto en el mismo combate.",
            "No puedes hacer este intercambio si tú o el aliado estáis incapacitados."
        ]
    },
    {
        nombre: "Apresador",
        categoria: "General",
        requisito: "Nivel 4 o más, Fuerza o Destreza 13 o más",
        resumen: "Te especializas en agarrar enemigos y moverte con ellos durante el combate.",
        beneficios: [
            "Aumenta tu Fuerza o Destreza en 1, hasta un máximo de 20.",
            "Tienes ventaja en las tiradas de ataque contra criaturas agarradas por ti.",
            "Puedes moverte a tu velocidad completa cuando arrastras o transportas a una criatura agarrada de tu tamaño o menor.",
            "Cuando golpeas a una criatura con un ataque sin armas como parte de la acción Atacar, puedes hacerle daño y agarrarla con el mismo ataque."
        ]
    },
    {
        nombre: "Atacante a la carga",
        categoria: "General",
        requisito: "Nivel 4 o más, Fuerza o Destreza 13 o más",
        resumen: "Premia los ataques realizados después de moverte en línea ofensiva hacia el enemigo.",
        beneficios: [
            "Aumenta tu Fuerza o Destreza en 1, hasta un máximo de 20.",
            "Si te mueves al menos 3 m en línea recta justo antes de impactar con un ataque cuerpo a cuerpo, puedes añadir daño adicional.",
            "El daño adicional es 1d8 si usas un arma cuerpo a cuerpo o ataque sin armas.",
            "También puedes empujar al objetivo hasta 3 m si no es más de una categoría de tamaño superior a ti.",
            "Solo puedes usar este beneficio una vez por turno."
        ]
    },
    {
        nombre: "Atacante salvaje",
        categoria: "Origen",
        requisito: "Ninguno",
        resumen: "Hace más fiable el daño de tus ataques con arma.",
        beneficios: [
            "Una vez por turno, cuando aciertes a una criatura con un arma, puedes tirar dos veces los dados de daño del arma.",
            "Usas cualquiera de los dos resultados."
        ]
    },
    {
        nombre: "Atleta",
        categoria: "General",
        requisito: "Nivel 4 o más, Fuerza o Destreza 13 o más",
        resumen: "Mejora tu movilidad física, especialmente al trepar, saltar y levantarte.",
        beneficios: [
            "Aumenta tu Fuerza o Destreza en 1, hasta un máximo de 20.",
            "Cuando estás derribado, levantarte solo cuesta 1,5 m de movimiento.",
            "Obtienes una velocidad de trepar igual a tu velocidad.",
            "Puedes realizar saltos largos o altos tras moverte solo 1,5 m, en lugar de 3 m."
        ]
    },
    {
        nombre: "Azote de magos",
        categoria: "General",
        requisito: "Nivel 4 o más, Sabiduría 13 o más",
        resumen: "Te especializas en combatir lanzadores de conjuros y resistir su magia.",
        beneficios: [
            "Aumenta tu Sabiduría en 1, hasta un máximo de 20.",
            "Si fallas una tirada de salvación de Inteligencia, Sabiduría o Carisma, puedes repetirla. Debes usar el nuevo resultado.",
            "Cuando dañes a una criatura que esté concentrándose en un conjuro, tendrá desventaja en su siguiente tirada para mantener la concentración antes del final de tu siguiente turno."
        ]
    },
    {
        nombre: "Centinela",
        categoria: "General",
        requisito: "Nivel 4 o más",
        resumen: "Te permite controlar el movimiento de los enemigos y castigar a quienes ignoran tu presencia.",
        beneficios: [
            "Cuando impactas con un ataque de oportunidad, la velocidad del objetivo pasa a ser 0 hasta el final del turno actual.",
            "Las criaturas provocan ataques de oportunidad tuyos incluso si realizan la acción Destrabarse.",
            "Cuando una criatura a 1,5 m de ti ataque a otro objetivo, puedes usar tu reacción para realizar un ataque cuerpo a cuerpo contra ella."
        ]
    },
    {
        nombre: "Chef",
        categoria: "General",
        requisito: "Nivel 4 o más, Constitución o Sabiduría 13 o más",
        resumen: "Preparas comidas especiales que ayudan a tus aliados a recuperarse y resistir mejor.",
        beneficios: [
            "Aumenta tu Constitución o Sabiduría en 1, hasta un máximo de 20.",
            "Durante un descanso corto puedes cocinar comida especial para mejorar la recuperación de tus aliados.",
            "Tras un descanso largo puedes preparar varios tentempiés especiales.",
            "Una criatura puede consumir un tentempié como acción adicional para obtener puntos de golpe temporales."
        ]
    },
    {
        nombre: "Combatiente con dos armas",
        categoria: "General",
        requisito: "Nivel 4 o más, Destreza 13 o más",
        resumen: "Mejora el combate utilizando un arma en cada mano.",
        beneficios: [
            "Aumenta tu Destreza en 1, hasta un máximo de 20.",
            "Obtienes una acción adicional extra que solo puede utilizarse para realizar el ataque adicional del combate con dos armas.",
            "Puedes desenfundar o guardar dos armas cuando normalmente podrías hacerlo con una sola."
        ]
    },
    {
        nombre: "Combatiente montado",
        categoria: "General",
        requisito: "Nivel 4 o más, Fuerza, Destreza o Sabiduría 13 o más",
        resumen: "Te conviertes en un jinete experto capaz de proteger y aprovechar mejor a tu montura.",
        beneficios: [
            "Aumenta tu Fuerza, Destreza o Sabiduría en 1, hasta un máximo de 20.",
            "Tienes ventaja en tiradas para evitar caer de tu montura.",
            "Si tu montura es objetivo de un efecto que permita una tirada de salvación de Destreza para recibir solo la mitad de daño, no recibe daño si supera la tirada y solo la mitad si la falla."
        ]
    },
    {
        nombre: "Combate con armas a dos manos",
        categoria: "Estilo de combate",
        requisito: "Rasgo Estilo de combate",
        resumen: "Aumenta la fiabilidad del daño de las armas grandes.",
        beneficios: [
            "Cuando tires daño con un arma cuerpo a cuerpo empuñada a dos manos, cualquier resultado de 1 o 2 en los dados de daño se trata como un 3.",
            "El arma debe tener la propiedad A dos manos o Versátil."
        ]
    },
    {
        nombre: "Combate con armas arrojadizas",
        categoria: "Estilo de combate",
        requisito: "Rasgo Estilo de combate",
        resumen: "Mejora el uso de armas que se lanzan a distancia.",
        beneficios: [
            "Cuando impactas con un ataque realizado con un arma arrojadiza, obtienes un bonificador de +2 al daño.",
            "Puedes desenvainar un arma con la propiedad Arrojadiza como parte del ataque realizado con ella."
        ]
    },
    {
        nombre: "Combate con dos armas",
        categoria: "Estilo de combate",
        requisito: "Rasgo Estilo de combate",
        resumen: "Potencia el daño de los ataques realizados con un arma en cada mano.",
        beneficios: [
            "Cuando realizas el ataque adicional del combate con dos armas, puedes añadir el modificador de característica al daño de ese ataque."
        ]
    },
    {
        nombre: "Combate sin armas",
        categoria: "Estilo de combate",
        requisito: "Rasgo Estilo de combate",
        resumen: "Mejora tus ataques sin armas y tu capacidad para dañar criaturas apresadas.",
        beneficios: [
            "Cuando impactas con un ataque sin armas y no tienes armas ni escudo en las manos, el daño puede ser 1d8 + tu modificador de Fuerza.",
            "Si tienes algo en una mano, el daño puede ser 1d6 + tu modificador de Fuerza.",
            "Al comienzo de cada uno de tus turnos, puedes infligir 1d4 de daño contundente a una criatura agarrada por ti."
        ]
    },
    {
        nombre: "Defensa",
        categoria: "Estilo de combate",
        requisito: "Rasgo Estilo de combate",
        resumen: "Mejora tu protección mientras llevas armadura.",
        beneficios: [
            "Mientras lleves puesta una armadura ligera, media o pesada, recibes un bonificador de +1 a la Clase de Armadura."
        ]
    },
    {
        nombre: "Don de la fortaleza",
        categoria: "Don épico",
        requisito: "Nivel 19 o más",
        resumen: "Aumenta enormemente tu aguante físico y tu capacidad de recuperación.",
        beneficios: [
            "Aumenta una característica en 1, hasta un máximo de 30.",
            "Tus puntos de golpe máximos aumentan en 40.",
            "Cuando recuperes puntos de golpe, puedes recuperar puntos adicionales igual a tu modificador por Constitución."
        ]
    },
    {
        nombre: "Don de la habilidad",
        categoria: "Don épico",
        requisito: "Nivel 19 o más",
        resumen: "Te convierte en un personaje excepcionalmente competente en habilidades.",
        beneficios: [
            "Aumenta una característica en 1, hasta un máximo de 30.",
            "Obtienes competencia en todas las habilidades.",
            "Cuando falles una prueba de característica usando una habilidad o herramienta con la que tengas competencia, puedes tratar la tirada de d20 como un 20.",
            "Puedes usar este beneficio una vez por descanso corto o largo."
        ]
    },
    {
        nombre: "Don de la pericia en combate",
        categoria: "Don épico",
        requisito: "Nivel 19 o más",
        resumen: "Mejora tu capacidad ofensiva con armas y ataques sin armas.",
        beneficios: [
            "Aumenta una característica en 1, hasta un máximo de 30.",
            "Cuando falles una tirada de ataque con un arma o ataque sin armas, puedes impactar en su lugar.",
            "Puedes usar este beneficio una vez por descanso corto o largo."
        ]
    },
    {
        nombre: "Don de la recuperación",
        categoria: "Don épico",
        requisito: "Nivel 19 o más",
        resumen: "Te permite resistir mejor la muerte y recuperarte en momentos críticos.",
        beneficios: [
            "Aumenta una característica en 1, hasta un máximo de 30.",
            "Cuando fueras a quedar reducido a 0 puntos de golpe, puedes quedar reducido a 1 punto de golpe en su lugar.",
            "Puedes usar este beneficio una vez por descanso largo.",
            "Además, cuando recibes curación, puedes tratar cualquier dado de curación como si hubiera obtenido su resultado máximo."
        ]
    },
    {
        nombre: "Don de la resistencia a energías",
        categoria: "Don épico",
        requisito: "Nivel 19 o más",
        resumen: "Te protege frente a varios tipos de daño elemental o energético.",
        beneficios: [
            "Aumenta una característica en 1, hasta un máximo de 30.",
            "Obtienes resistencia a dos tipos de daño a elegir entre ácido, frío, fuego, fuerza, relámpago, necrótico, veneno, psíquico, radiante o trueno.",
            "Al finalizar un descanso largo, puedes cambiar los tipos de daño elegidos."
        ]
    },
    {
        nombre: "Don de la velocidad",
        categoria: "Don épico",
        requisito: "Nivel 19 o más",
        resumen: "Aumenta mucho tu movilidad y te permite escapar con facilidad del peligro.",
        beneficios: [
            "Aumenta una característica en 1, hasta un máximo de 30.",
            "Tu velocidad aumenta en 9 m.",
            "Puedes usar Destrabarse como acción adicional."
        ]
    },
    {
        nombre: "Don de la visión verdadera",
        categoria: "Don épico",
        requisito: "Nivel 19 o más",
        resumen: "Tus sentidos atraviesan ilusiones, oscuridad mágica y transformaciones.",
        beneficios: [
            "Aumenta una característica en 1, hasta un máximo de 30.",
            "Obtienes visión verdadera con un alcance de 18 m."
        ]
    },
    {
        nombre: "Don del ataque imparable",
        categoria: "Don épico",
        requisito: "Nivel 19 o más",
        resumen: "Tus ataques pueden convertir impactos normales en golpes devastadores.",
        beneficios: [
            "Aumenta una característica en 1, hasta un máximo de 30.",
            "Cuando impactas con un arma o ataque sin armas, puedes convertir el impacto en un impacto crítico.",
            "Puedes usar este beneficio una vez por descanso corto o largo."
        ]
    },
    {
        nombre: "Don del destino",
        categoria: "Don épico",
        requisito: "Nivel 19 o más",
        resumen: "Puedes alterar momentos decisivos mediante una reserva limitada de suerte.",
        beneficios: [
            "Aumenta una característica en 1, hasta un máximo de 30.",
            "Obtienes 2 puntos de destino.",
            "Puedes gastar 1 punto de destino para repetir una tirada de d20 realizada por ti o contra ti.",
            "Recuperas todos los puntos de destino al finalizar un descanso largo."
        ]
    },
    {
        nombre: "Don del espíritu de la noche",
        categoria: "Don épico",
        requisito: "Nivel 19 o más",
        resumen: "Te vuelves extremadamente difícil de detectar y puedes desplazarte entre sombras.",
        beneficios: [
            "Aumenta una característica en 1, hasta un máximo de 30.",
            "Obtienes visión en la oscuridad con un alcance de 18 m o aumentas su alcance en 18 m si ya la poseías.",
            "Mientras estés en penumbra u oscuridad, eres invisible para criaturas que dependan de la vista.",
            "Puedes lanzar Paso brumoso sin gastar espacio de conjuro. Recuperas este uso al finalizar un descanso corto o largo."
        ]
    },
    {
        nombre: "Don del recuerdo de conjuros",
        categoria: "Don épico",
        requisito: "Nivel 19 o más, rasgo Lanzamiento de conjuros o Magia de pacto",
        resumen: "Recuperas con facilidad parte de tu poder mágico gastado.",
        beneficios: [
            "Aumenta una característica en 1, hasta un máximo de 30.",
            "Cuando finalizas un descanso corto, puedes recuperar un espacio de conjuro gastado de nivel 1 a 4.",
            "El espacio recuperado no puede ser de nivel superior a 4."
        ]
    },
    {
        nombre: "Don del viaje dimensional",
        categoria: "Don épico",
        requisito: "Nivel 19 o más",
        resumen: "Puedes atravesar el espacio de forma casi instantánea.",
        beneficios: [
            "Aumenta una característica en 1, hasta un máximo de 30.",
            "Como acción adicional puedes teletransportarte hasta 9 m a un espacio que puedas ver.",
            "Puedes usar este beneficio un número de veces igual a tu bonificador por competencia.",
            "Recuperas todos los usos al finalizar un descanso largo."
        ]
    },
    {
        nombre: "Duelista defensivo",
        categoria: "General",
        requisito: "Nivel 4 o más, Destreza 13 o más",
        resumen: "Usas tu arma para desviar ataques dirigidos contra ti.",
        beneficios: [
            "Aumenta tu Destreza en 1, hasta un máximo de 20.",
            "Cuando una criatura te impacta con un ataque cuerpo a cuerpo mientras empuñas un arma con la que tengas competencia, puedes usar tu reacción.",
            "Añades tu bonificador por competencia a tu Clase de Armadura contra ese ataque.",
            "Si el ataque deja de impactarte, no recibes daño."
        ]
    },
    {
        nombre: "Duro",
        categoria: "Origen",
        requisito: "Ninguno",
        resumen: "Tu resistencia física es superior a la de la mayoría de aventureros.",
        beneficios: [
            "Tus puntos de golpe máximos aumentan en una cantidad igual al doble de tu nivel.",
            "Cada vez que subes de nivel, tus puntos de golpe máximos aumentan en 2 adicionales."
        ]
    },
    {
        nombre: "Duelo",
        categoria: "Estilo de combate",
        requisito: "Rasgo Estilo de combate",
        resumen: "Mejora el daño cuando luchas con un arma en una mano y sin otra arma.",
        beneficios: [
            "Cuando empuñas un arma cuerpo a cuerpo en una mano y no empuñas otra arma, obtienes un bonificador de +2 a las tiradas de daño con esa arma."
        ]
    },
    {
        nombre: "Entrenamiento con armas marciales",
        categoria: "General",
        requisito: "Nivel 4 o más",
        resumen: "Amplía tus competencias con armas de combate avanzado.",
        beneficios: [
            "Aumenta tu Fuerza o Destreza en 1, hasta un máximo de 20.",
            "Obtienes competencia con todas las armas marciales."
        ]
    },
    {
        nombre: "Envenenador",
        categoria: "General",
        requisito: "Nivel 4 o más",
        resumen: "Te especializas en crear y usar venenos de forma eficaz.",
        beneficios: [
            "Aumenta tu Destreza o Inteligencia en 1, hasta un máximo de 20.",
            "Obtienes competencia con el kit de envenenador.",
            "Puedes aplicar veneno a un arma o munición como acción adicional.",
            "Puedes crear dosis de veneno durante un descanso largo si tienes un kit de envenenador."
        ]
    },
    {
        nombre: "Experto en ballestas",
        categoria: "General",
        requisito: "Nivel 4 o más, Destreza 13 o más",
        resumen: "Mejora el uso de ballestas en combate cercano y rápido.",
        beneficios: [
            "Aumenta tu Destreza en 1, hasta un máximo de 20.",
            "Ignoras la propiedad Carga de las ballestas con las que tengas competencia.",
            "Estar a 1,5 m de una criatura hostil no impone desventaja a tus tiradas de ataque a distancia.",
            "Cuando haces un ataque con un arma Ligera, puedes realizar un ataque adicional con una ballesta de mano cargada que empuñes."
        ]
    },
    {
        nombre: "Experto en habilidades",
        categoria: "General",
        requisito: "Nivel 4 o más",
        resumen: "Refuerza tus competencias y te permite destacar en una habilidad concreta.",
        beneficios: [
            "Aumenta una característica en 1, hasta un máximo de 20.",
            "Obtienes competencia en una habilidad de tu elección.",
            "Elige una habilidad con la que tengas competencia: obtienes pericia con ella."
        ]
    },
    {
        nombre: "Fabricante",
        categoria: "Origen",
        requisito: "Ninguno",
        resumen: "Te permite fabricar objetos sencillos con herramientas de artesano durante un descanso largo.",
        beneficios: [
            "Obtienes competencia con tres herramientas de artesano de tu elección.",
            "Cuando finalizas un descanso largo, puedes fabricar un objeto no mágico si tienes las herramientas apropiadas.",
            "El objeto debe estar entre los permitidos por la herramienta usada y se fabrica sin coste.",
            "El objeto dura hasta que finalices otro descanso largo."
        ],
        fabricacionRapida: [
            ["Albañil", "Palpasto"],
            ["Alfarero", "Jarra, lámpara"],
            ["Carpintero", "Antorcha, escalera"],
            ["Curtidor", "Bolsa, estuche"],
            ["Ebanista", "Bastón, garrote, garrote grande"],
            ["Herrero", "Abrojos, bolas de metal, cubo, garfio de escalada, olla de hierro"],
            ["Manitas", "Campana, pala, yesca"],
            ["Tejedor", "Cesta, cuerda, red, tienda"]
        ]
    },
    {
        nombre: "Habilidoso",
        categoria: "Origen",
        requisito: "Ninguno",
        resumen: "Amplía tus competencias en habilidades y herramientas.",
        beneficios: [
            "Obtienes competencia en cualquier combinación de tres habilidades o herramientas de tu elección."
        ]
    },
    {
        nombre: "Influencia feérica",
        categoria: "General",
        requisito: "Nivel 4 o más",
        resumen: "Tu conexión feérica mejora una característica mental y te concede magia feérica.",
        beneficios: [
            "Aumenta tu Inteligencia, Sabiduría o Carisma en 1, hasta un máximo de 20.",
            "Aprendes Paso brumoso y otro conjuro de nivel 1 de la escuela de Adivinación o Encantamiento.",
            "Puedes lanzar cada conjuro aprendido con esta dote una vez sin gastar espacio de conjuro.",
            "También puedes lanzarlos usando espacios de conjuro apropiados.",
            "Recuperas los lanzamientos gratuitos al finalizar un descanso largo."
        ]
    },
    {
        nombre: "Influencia sombría",
        categoria: "General",
        requisito: "Nivel 4 o más",
        resumen: "Obtienes magia vinculada a la oscuridad y al Plano Sombrío.",
        beneficios: [
            "Aumenta tu Inteligencia, Sabiduría o Carisma en 1, hasta un máximo de 20.",
            "Aprendes Invisibilidad y otro conjuro de nivel 1 de la escuela de Ilusión o Nigromancia.",
            "Puedes lanzar cada conjuro aprendido con esta dote una vez sin gastar espacio de conjuro.",
            "También puedes lanzarlos usando espacios de conjuro apropiados.",
            "Recuperas los lanzamientos gratuitos al finalizar un descanso largo."
        ]
    },
    {
        nombre: "Iniciado en la magia",
        categoria: "Origen",
        requisito: "Ninguno",
        resumen: "Obtienes una pequeña formación mágica procedente de una clase lanzadora de conjuros.",
        beneficios: [
            "Elige una lista de conjuros entre Bardo, Clérigo, Druida, Hechicero, Brujo o Mago.",
            "Aprendes dos trucos de esa lista.",
            "Aprendes un conjuro de nivel 1 de esa lista.",
            "Puedes lanzar ese conjuro una vez sin gastar espacio de conjuro.",
            "Recuperas ese uso al finalizar un descanso largo.",
            "También puedes lanzarlo usando espacios de conjuro apropiados."
        ]
    },
    {
        nombre: "Intercepción",
        categoria: "Estilo de combate",
        requisito: "Rasgo Estilo de combate",
        resumen: "Proteges a tus aliados reduciendo el daño que reciben.",
        beneficios: [
            "Cuando una criatura que puedas ver golpee a un objetivo situado a 1,5 m o menos de ti, puedes usar tu reacción.",
            "Debes estar empuñando un escudo o un arma sencilla o marcial.",
            "Reduces el daño recibido en 1d10 + tu bonificador por competencia."
        ]
    },
    {
        nombre: "Lanzador en combate",
        categoria: "General",
        requisito: "Nivel 4 o más, rasgo Lanzamiento de conjuros o Magia de pacto",
        resumen: "Te permite mantener la concentración y lanzar magia con más seguridad en combate.",
        beneficios: [
            "Aumenta tu Constitución, Inteligencia, Sabiduría o Carisma en 1, hasta un máximo de 20.",
            "Tienes ventaja en las tiradas de salvación de Constitución para mantener la concentración.",
            "Puedes realizar componentes somáticos incluso cuando tengas armas o escudos en las manos.",
            "Cuando una criatura provoque un ataque de oportunidad tuyo, puedes lanzar un conjuro contra ella en lugar de realizar un ataque."
        ]
    },
    {
        nombre: "Lanzador preciso",
        categoria: "General",
        requisito: "Nivel 4 o más, rasgo Lanzamiento de conjuros o Magia de pacto",
        resumen: "Tu magia ofensiva es más fiable y difícil de resistir.",
        beneficios: [
            "Aumenta tu Inteligencia, Sabiduría o Carisma en 1, hasta un máximo de 20.",
            "Ignoras media cobertura al realizar ataques de conjuro.",
            "Ignoras cobertura tres cuartos al realizar ataques de conjuro.",
            "Tus enemigos obtienen menos protección al intentar evitar tus conjuros."
        ]
    },
    {
        nombre: "Lanzador ritual",
        categoria: "General",
        requisito: "Nivel 4 o más, Inteligencia, Sabiduría o Carisma 13 o más",
        resumen: "Aprendes magia ritual que puedes lanzar sin gastar espacios de conjuro.",
        beneficios: [
            "Aumenta tu Inteligencia, Sabiduría o Carisma en 1, hasta un máximo de 20.",
            "Obtienes un libro ritual con dos conjuros rituales de nivel 1.",
            "Puedes lanzar los conjuros del libro como rituales.",
            "Puedes añadir nuevos conjuros rituales al libro cuando los encuentres."
        ]
    },
    {
        nombre: "Ligeramente acorazado",
        categoria: "General",
        requisito: "Nivel 4 o más",
        resumen: "Aprendes a combatir utilizando armaduras ligeras y escudos.",
        beneficios: [
            "Aumenta tu Fuerza o Destreza en 1, hasta un máximo de 20.",
            "Obtienes competencia con armaduras ligeras.",
            "Obtienes competencia con escudos."
        ]
    },
    {
        nombre: "Lucha a ciegas",
        categoria: "Estilo de combate",
        requisito: "Rasgo Estilo de combate",
        resumen: "Te permite percibir criaturas cercanas aunque no puedas verlas normalmente.",
        beneficios: [
            "Obtienes visión ciega con un alcance de 3 m."
        ]
    },
    {
        nombre: "Líder inspirador",
        categoria: "General",
        requisito: "Nivel 4 o más, Carisma 13 o más",
        resumen: "Tus palabras fortalecen la moral y la resistencia de tus aliados.",
        beneficios: [
            "Aumenta tu Carisma en 1, hasta un máximo de 20.",
            "Tras un descanso corto o largo, puedes inspirar a tus aliados durante 10 minutos.",
            "Tú y varias criaturas aliadas obtenéis puntos de golpe temporales.",
            "Una criatura no puede beneficiarse de esta dote de nuevo hasta finalizar un descanso corto o largo."
        ]
    },
    {
        nombre: "Maestro de armas",
        categoria: "General",
        requisito: "Nivel 4 o más",
        resumen: "Obtienes acceso adicional a propiedades de maestría con armas.",
        beneficios: [
            "Aumenta tu Fuerza o Destreza en 1, hasta un máximo de 20.",
            "Obtienes una propiedad de maestría adicional para un arma con la que tengas competencia.",
            "Puedes cambiar la propiedad elegida cuando finalizas un descanso largo."
        ]
    },
    {
        nombre: "Maestro en armaduras medias",
        categoria: "General",
        requisito: "Nivel 4 o más, competencia con armaduras ligeras",
        resumen: "Te permite sacar mayor partido a las armaduras medias.",
        beneficios: [
            "Aumenta tu Fuerza o Destreza en 1, hasta un máximo de 20.",
            "Obtienes competencia con armaduras medias.",
            "Puedes añadir hasta +3 de tu modificador de Destreza a la Clase de Armadura cuando lleves armadura media."
        ]
    },
    {
        nombre: "Maestro en armaduras pesadas",
        categoria: "General",
        requisito: "Nivel 4 o más, competencia con armaduras medias",
        resumen: "Mejora tu resistencia cuando utilizas armaduras pesadas.",
        beneficios: [
            "Aumenta tu Fuerza en 1, hasta un máximo de 20.",
            "Obtienes competencia con armaduras pesadas.",
            "Mientras lleves armadura pesada, el daño contundente, cortante y perforante no mágico que recibes se reduce en una cantidad igual a tu bonificador por competencia."
        ]
    },
    {
        nombre: "Maestro en armas de asta",
        categoria: "General",
        requisito: "Nivel 4 o más, Fuerza o Destreza 13 o más",
        resumen: "Te especializas en combatir con alabardas, lanzas y otras armas de asta.",
        beneficios: [
            "Aumenta tu Fuerza o Destreza en 1, hasta un máximo de 20.",
            "Cuando realizas la acción Atacar con determinadas armas de asta, puedes realizar un ataque adicional con el extremo opuesto del arma.",
            "Las criaturas provocan ataques de oportunidad tuyos cuando entran en tu alcance."
        ]
    },
    {
        nombre: "Maestro en armas pesadas",
        categoria: "General",
        requisito: "Nivel 4 o más, Fuerza 13 o más",
        resumen: "Aumenta el potencial ofensivo de las armas más grandes.",
        beneficios: [
            "Aumenta tu Fuerza en 1, hasta un máximo de 20.",
            "Cuando impactas con un arma pesada, puedes infligir daño adicional igual a tu bonificador por competencia.",
            "Cuando obtienes un impacto crítico o reduces a una criatura a 0 puntos de golpe con un arma pesada, puedes realizar un ataque adicional como acción adicional."
        ]
    },
    {
        nombre: "Maestro en escudos",
        categoria: "General",
        requisito: "Nivel 4 o más, competencia con escudos",
        resumen: "Convierte tu escudo en una herramienta ofensiva y defensiva más eficaz.",
        beneficios: [
            "Aumenta tu Fuerza en 1, hasta un máximo de 20.",
            "Si impactas con un ataque cuerpo a cuerpo durante tu turno, puedes empujar a una criatura situada a 1,5 m como acción adicional usando el escudo.",
            "Si superas una tirada de salvación de Destreza contra un efecto que permite recibir la mitad de daño, puedes usar tu reacción para no recibir daño si llevas un escudo."
        ]
    },
    {
        nombre: "Matón de taberna",
        categoria: "Origen",
        requisito: "Ninguno",
        resumen: "Te vuelves especialmente peligroso en peleas improvisadas y combates cuerpo a cuerpo.",
        beneficios: [
            "Aumenta tu Fuerza o Constitución en 1, hasta un máximo de 20.",
            "Obtienes competencia con armas improvisadas.",
            "Tus ataques sin armas causan 1d4 de daño contundente.",
            "Cuando impactas con un ataque sin armas o arma improvisada, puedes intentar agarrar al objetivo como parte del mismo ataque."
        ]
    },
    {
        nombre: "Mejora de característica",
        categoria: "General",
        requisito: "Nivel 4 o más",
        resumen: "Incrementa una o varias características de tu personaje.",
        beneficios: [
            "Aumenta una característica en 2 puntos, hasta un máximo de 20.",
            "Alternativamente, aumenta dos características diferentes en 1 punto cada una, hasta un máximo de 20."
        ]
    },
    {
        nombre: "Mente aguda",
        categoria: "General",
        requisito: "Nivel 4 o más, Inteligencia 13 o más",
        resumen: "Mejora tu memoria, razonamiento y capacidad para orientarte.",
        beneficios: [
            "Aumenta tu Inteligencia en 1, hasta un máximo de 20.",
            "Siempre sabes dónde está el norte.",
            "Siempre sabes cuántas horas faltan para el siguiente amanecer o anochecer.",
            "Puedes recordar con precisión lo que has visto u oído durante el último mes."
        ]
    },
    {
        nombre: "Moderadamente acorazado",
        categoria: "General",
        requisito: "Nivel 4 o más, competencia con armaduras ligeras",
        resumen: "Amplía tu entrenamiento defensivo con armaduras medias y escudos.",
        beneficios: [
            "Aumenta tu Fuerza o Destreza en 1, hasta un máximo de 20.",
            "Obtienes competencia con armaduras medias.",
            "Obtienes competencia con escudos."
        ]
    },
    {
        nombre: "Muy acorazado",
        categoria: "General",
        requisito: "Nivel 4 o más, competencia con armaduras medias",
        resumen: "Te entrena para utilizar armaduras pesadas.",
        beneficios: [
            "Aumenta tu Fuerza en 1, hasta un máximo de 20.",
            "Obtienes competencia con armaduras pesadas."
        ]
    },
    {
        nombre: "Músico",
        categoria: "Origen",
        requisito: "Ninguno",
        resumen: "Tu música inspira a tus aliados al comienzo de la aventura.",
        beneficios: [
            "Obtienes competencia con tres instrumentos musicales de tu elección.",
            "Al finalizar un descanso corto o largo, puedes tocar música para inspirar a varios aliados.",
            "Las criaturas inspiradas obtienen Inspiración heroica."
        ]
    },
    {
        nombre: "Observador",
        categoria: "General",
        requisito: "Nivel 4 o más, Inteligencia o Sabiduría 13 o más",
        resumen: "Mejora tu percepción, atención al detalle y capacidad para leer a otros.",
        beneficios: [
            "Aumenta tu Inteligencia o Sabiduría en 1, hasta un máximo de 20.",
            "Tienes ventaja en pruebas de Sabiduría (Percepción) o Inteligencia (Investigación) que dependan de la vista.",
            "Si puedes ver la boca de una criatura mientras habla un idioma que conoces, puedes leer sus labios."
        ]
    },
    {
        nombre: "Perforador",
        categoria: "General",
        requisito: "Nivel 4 o más",
        resumen: "Mejora el daño de tus ataques que perforan al enemigo.",
        beneficios: [
            "Aumenta tu Fuerza o Destreza en 1, hasta un máximo de 20.",
            "Una vez por turno, cuando infliges daño perforante, puedes repetir uno de los dados de daño y usar el nuevo resultado.",
            "Cuando consigues un impacto crítico que inflige daño perforante, puedes tirar un dado de daño adicional."
        ]
    },
    {
        nombre: "Protección",
        categoria: "Estilo de combate",
        requisito: "Rasgo Estilo de combate",
        resumen: "Usas tu escudo para dificultar los ataques contra aliados cercanos.",
        beneficios: [
            "Cuando una criatura que puedas ver ataque a un objetivo que no seas tú y esté a 1,5 m de ti, puedes usar tu reacción.",
            "Debes estar empuñando un escudo.",
            "El ataque se realiza con desventaja."
        ]
    },
    {
        nombre: "Rebanador",
        categoria: "General",
        requisito: "Nivel 4 o más",
        resumen: "Tus ataques cortantes dificultan la respuesta del enemigo.",
        beneficios: [
            "Aumenta tu Fuerza o Destreza en 1, hasta un máximo de 20.",
            "Una vez por turno, cuando infliges daño cortante, reduces la velocidad del objetivo en 3 m hasta el comienzo de tu siguiente turno.",
            "Cuando consigues un impacto crítico que inflige daño cortante, el objetivo tiene desventaja en sus tiradas de ataque hasta el comienzo de tu siguiente turno."
        ]
    },
    {
        nombre: "Resiliente",
        categoria: "General",
        requisito: "Nivel 4 o más",
        resumen: "Refuerza una característica y mejora tus salvaciones asociadas.",
        beneficios: [
            "Aumenta una característica en 1, hasta un máximo de 20.",
            "Obtienes competencia en las tiradas de salvación de la característica aumentada."
        ]
    },
    {
        nombre: "Resistente",
        categoria: "General",
        requisito: "Nivel 4 o más",
        resumen: "Te vuelves más resistente frente a un tipo concreto de daño.",
        beneficios: [
            "Aumenta tu Constitución en 1, hasta un máximo de 20.",
            "Elige un tipo de daño entre ácido, frío, fuego, fuerza, relámpago, necrótico, veneno, psíquico, radiante o trueno.",
            "Obtienes resistencia al tipo de daño elegido.",
            "Puedes cambiar la resistencia elegida cuando subes de nivel."
        ]
    },
    {
        nombre: "Sanador",
        categoria: "Origen",
        requisito: "Ninguno",
        resumen: "Te permite proporcionar primeros auxilios y mejorar la recuperación de tus aliados.",
        beneficios: [
            "Obtienes competencia con el kit de sanador.",
            "Puedes usar una carga de un kit de sanador para que una criatura recupere puntos de golpe.",
            "Cuando una criatura recupera puntos de golpe gracias a esta dote, también obtiene puntos de golpe temporales.",
            "Una criatura solo puede beneficiarse de esta curación una vez por descanso corto o largo."
        ]
    },
    {
        nombre: "Telepático",
        categoria: "General",
        requisito: "Nivel 4 o más, Inteligencia, Sabiduría o Carisma 13 o más",
        resumen: "Desarrollas capacidades mentales que te permiten comunicarte mediante telepatía.",
        beneficios: [
            "Aumenta tu Inteligencia, Sabiduría o Carisma en 1, hasta un máximo de 20.",
            "Puedes comunicarte telepáticamente con criaturas situadas a 18 m que compartan un idioma contigo.",
            "Aprendes Detectar pensamientos.",
            "Puedes lanzar Detectar pensamientos una vez sin gastar espacio de conjuro y recuperas este uso tras un descanso largo."
        ]
    },
    {
        nombre: "Telequinético",
        categoria: "General",
        requisito: "Nivel 4 o más, Inteligencia, Sabiduría o Carisma 13 o más",
        resumen: "Desarrollas poderes mentales que te permiten manipular objetos y criaturas a distancia.",
        beneficios: [
            "Aumenta tu Inteligencia, Sabiduría o Carisma en 1, hasta un máximo de 20.",
            "Aprendes la mano de mago o aumentas su alcance si ya la conocías.",
            "Puedes lanzar la mano de mago sin componentes.",
            "Como acción adicional puedes intentar mover una criatura voluntaria o involuntaria 1,5 m mediante fuerza telequinética."
        ]
    },
    {
        nombre: "Tirador de primera",
        categoria: "General",
        requisito: "Nivel 4 o más, Destreza 13 o más",
        resumen: "Destacas en el uso de armas a distancia y disparos de precisión.",
        beneficios: [
            "Aumenta tu Destreza en 1, hasta un máximo de 20.",
            "Ignoras media cobertura y cobertura tres cuartos al realizar ataques a distancia.",
            "Disparar a larga distancia no impone desventaja a tus ataques.",
            "Tus ataques a distancia pueden infligir daño adicional igual a tu bonificador por competencia."
        ]
    },
    {
        nombre: "Tiro con arco",
        categoria: "Estilo de combate",
        requisito: "Rasgo Estilo de combate",
        resumen: "Mejora tu precisión con armas de ataque a distancia.",
        beneficios: [
            "Obtienes un bonificador de +2 a las tiradas de ataque realizadas con armas a distancia."
        ]
    },
    {
        nombre: "Triturador",
        categoria: "General",
        requisito: "Nivel 4 o más",
        resumen: "Tus ataques contundentes desequilibran y debilitan a tus enemigos.",
        beneficios: [
            "Aumenta tu Fuerza o Constitución en 1, hasta un máximo de 20.",
            "Una vez por turno, cuando infliges daño contundente, puedes mover al objetivo 1,5 m a un espacio desocupado.",
            "Cuando consigues un impacto crítico que inflige daño contundente, las tiradas de ataque contra el objetivo tienen ventaja hasta el comienzo de tu siguiente turno."
        ]
    },
    {
        nombre: "Veloz",
        categoria: "General",
        requisito: "Nivel 4 o más",
        resumen: "Incrementa tu movilidad y facilita desplazarte por el campo de batalla.",
        beneficios: [
            "Aumenta tu velocidad en 3 m.",
            "Tu movimiento no provoca ataques de oportunidad de criaturas a las que hayas atacado durante el turno.",
            "Al realizar la acción Correr, el terreno difícil no te cuesta movimiento adicional durante ese turno."
        ]
    },
    {
        nombre: "Versado en un elemento",
        categoria: "General",
        requisito: "Nivel 4 o más, rasgo Lanzamiento de conjuros o Magia de pacto",
        resumen: "Dominas mejor los conjuros de un tipo concreto de energía.",
        beneficios: [
            "Aumenta tu Inteligencia, Sabiduría o Carisma en 1, hasta un máximo de 20.",
            "Elige un tipo de daño entre ácido, frío, fuego, relámpago o trueno.",
            "Los conjuros que lanzas ignoran la resistencia al tipo de daño elegido.",
            "Cuando tires daño de ese tipo, puedes tratar cualquier resultado de 1 en un dado de daño como un 2."
        ]
    }
];