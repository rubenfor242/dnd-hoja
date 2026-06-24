const introduccionEquipo = {
    titulo: "Equipo",
    texto: "En este catálogo se recoge distinto equipo que los personajes pueden conseguir y utilizar durante sus aventuras, como armas, armaduras, herramientas, objetos de aventurero, monturas y otros útiles."
};

const monedasEquipo = {
    titulo: "Monedas",
    texto: "Las monedas se usan para comprar equipo, pagar servicios y comerciar durante la aventura. La pieza de oro suele utilizarse como referencia principal. Cada moneda pesa aproximadamente 0,01 kg.",

    monedas: [
        {
            nombre: "Pieza de cobre (pc)",
            valor: "1/100 po"
        },
        {
            nombre: "Pieza de plata (pp)",
            valor: "1/10 po"
        },
        {
            nombre: "Pieza de electro (pe)",
            valor: "1/2 po"
        },
        {
            nombre: "Pieza de oro (po)",
            valor: "1 po"
        },
        {
            nombre: "Pieza de platino (ppt)",
            valor: "10 po"
        }
    ],

    nota: "Como regla general, el equipo puede venderse por la mitad de su precio de compra."
};

const armasEquipo = {
    titulo: "Armas",

    descripcion: [
        "Las armas se dividen en sencillas o marciales, y en armas cuerpo a cuerpo o a distancia.",
        "Para atacar con competencia, el personaje debe tener competencia con el arma utilizada.",
        "La tabla muestra el daño del arma, sus propiedades, la propiedad de maestría asociada y su peso."
    ],

    propiedades: [
        { nombre: "A dos manos", texto: "Requiere usar las dos manos para atacar." },
        { nombre: "Alcance", texto: "Indica el alcance normal y largo del arma a distancia." },
        { nombre: "Arrojadiza", texto: "Puede lanzarse para realizar un ataque a distancia." },
        { nombre: "Gran alcance", texto: "Aumenta el alcance cuerpo a cuerpo del arma." },
        { nombre: "Ligera", texto: "Permite realizar un ataque adicional con otra arma ligera." },
        { nombre: "Munición", texto: "Requiere munición del tipo indicado para atacar." },
        { nombre: "Pesada", texto: "Puede ser difícil de usar por criaturas pequeñas." },
        { nombre: "Recarga", texto: "Solo permite disparar una pieza de munición por acción, acción adicional o reacción." },
        { nombre: "Sutil", texto: "Permite elegir Fuerza o Destreza para ataque y daño." },
        { nombre: "Versátil", texto: "Puede usarse a una o dos manos, causando más daño a dos manos." }
    ],

    maestrias: [
        { nombre: "Debilitar", texto: "El objetivo tiene desventaja en su próxima tirada de ataque." },
        { nombre: "Derribar", texto: "Puede obligar al objetivo a superar una salvación o quedar derribado." },
        { nombre: "Empujar", texto: "Puede empujar al objetivo hasta 3 m." },
        { nombre: "Hender", texto: "Puede dañar a una segunda criatura cercana." },
        { nombre: "Mellar", texto: "El ataque adicional de Ligera puede hacerse como parte de la acción Atacar." },
        { nombre: "Molestar", texto: "Da ventaja al siguiente ataque contra el objetivo." },
        { nombre: "Ralentizar", texto: "Reduce la velocidad del objetivo." },
        { nombre: "Rozar", texto: "Si fallas, puedes causar algo de daño igualmente." }
    ],

    armas: [
        { categoria: "Armas cuerpo a cuerpo sencillas", nombre: "Bastón", danio: "1d6 contundente", propiedades: "Versátil (1d8)", maestria: "Derribar", peso: "2 kg" },
        { categoria: "Armas cuerpo a cuerpo sencillas", nombre: "Daga", danio: "1d4 perforante", propiedades: "Arrojadiza (alcance 6/18), ligera, sutil", maestria: "Mellar", peso: "0,5 kg" },
        { categoria: "Armas cuerpo a cuerpo sencillas", nombre: "Garrote", danio: "1d4 contundente", propiedades: "Ligero", maestria: "Ralentizar", peso: "1 kg" },
        { categoria: "Armas cuerpo a cuerpo sencillas", nombre: "Garrote grande", danio: "1d8 contundente", propiedades: "A dos manos", maestria: "Empujar", peso: "5 kg" },
        { categoria: "Armas cuerpo a cuerpo sencillas", nombre: "Hacha de mano", danio: "1d6 cortante", propiedades: "Arrojadiza (alcance 6/18), ligera", maestria: "Molestar", peso: "1 kg" },
        { categoria: "Armas cuerpo a cuerpo sencillas", nombre: "Hoz", danio: "1d4 cortante", propiedades: "Ligera", maestria: "Mellar", peso: "1 kg" },
        { categoria: "Armas cuerpo a cuerpo sencillas", nombre: "Jabalina", danio: "1d6 perforante", propiedades: "Arrojadiza (alcance 9/36)", maestria: "Ralentizar", peso: "1 kg" },
        { categoria: "Armas cuerpo a cuerpo sencillas", nombre: "Lanza", danio: "1d6 perforante", propiedades: "Arrojadiza (alcance 6/18), versátil (1d8)", maestria: "Debilitar", peso: "1,5 kg" },
        { categoria: "Armas cuerpo a cuerpo sencillas", nombre: "Martillo ligero", danio: "1d4 contundente", propiedades: "Arrojadiza (alcance 6/18), ligero", maestria: "Mellar", peso: "1 kg" },
        { categoria: "Armas cuerpo a cuerpo sencillas", nombre: "Maza", danio: "1d6 contundente", propiedades: "—", maestria: "Debilitar", peso: "2 kg" },

        { categoria: "Armas a distancia sencillas", nombre: "Arco corto", danio: "1d6 perforante", propiedades: "A dos manos, munición (alcance 24/96; flecha)", maestria: "Molestar", peso: "1 kg" },
        { categoria: "Armas a distancia sencillas", nombre: "Ballesta ligera", danio: "1d8 perforante", propiedades: "A dos manos, munición (alcance 24/96; virote), recarga", maestria: "Ralentizar", peso: "2,5 kg" },
        { categoria: "Armas a distancia sencillas", nombre: "Dardo", danio: "1d4 perforante", propiedades: "Arrojadizo (alcance 6/18), sutil", maestria: "Molestar", peso: "125 g" },
        { categoria: "Armas a distancia sencillas", nombre: "Honda", danio: "1d4 contundente", propiedades: "Munición (alcance 9/36; proyectil)", maestria: "Ralentizar", peso: "—" },

        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Alabarda", danio: "1d10 cortante", propiedades: "A dos manos, gran alcance, pesada", maestria: "Hender", peso: "3 kg" },
        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Cimitarra", danio: "1d6 cortante", propiedades: "Ligera, sutil", maestria: "Mellar", peso: "1,5 kg" },
        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Espada corta", danio: "1d6 perforante", propiedades: "Ligera, sutil", maestria: "Molestar", peso: "1 kg" },
        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Espada larga", danio: "1d8 cortante", propiedades: "Versátil (1d10)", maestria: "Debilitar", peso: "1,5 kg" },
        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Espadón", danio: "2d6 cortante", propiedades: "A dos manos, pesado", maestria: "Rozar", peso: "3 kg" },
        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Estoque", danio: "1d8 perforante", propiedades: "Sutil", maestria: "Molestar", peso: "1 kg" },
        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Guja", danio: "1d10 cortante", propiedades: "A dos manos, gran alcance, pesada", maestria: "Rozar", peso: "3 kg" },
        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Hacha a dos manos", danio: "1d12 cortante", propiedades: "A dos manos, pesada", maestria: "Hender", peso: "3,5 kg" },
        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Hacha de guerra", danio: "1d8 cortante", propiedades: "Versátil (1d10)", maestria: "Derribar", peso: "2 kg" },
        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Lanza de caballería", danio: "1d10 perforante", propiedades: "A dos manos (salvo montado), gran alcance, pesada", maestria: "Derribar", peso: "3 kg" },
        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Látigo", danio: "1d4 cortante", propiedades: "Gran alcance, sutil", maestria: "Ralentizar", peso: "1,5 kg" },
        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Lucero del alba", danio: "1d8 perforante", propiedades: "—", maestria: "Debilitar", peso: "2 kg" },
        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Mangual", danio: "1d8 contundente", propiedades: "—", maestria: "Debilitar", peso: "1 kg" },
        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Martillo de guerra", danio: "1d8 contundente", propiedades: "Versátil (1d10)", maestria: "Empujar", peso: "2,5 kg" },
        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Maza a dos manos", danio: "2d6 contundente", propiedades: "A dos manos, pesada", maestria: "Derribar", peso: "5 kg" },
        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Pica", danio: "1d10 perforante", propiedades: "A dos manos, gran alcance, pesada", maestria: "Empujar", peso: "9 kg" },
        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Pico de guerra", danio: "1d8 perforante", propiedades: "Versátil (1d10)", maestria: "Debilitar", peso: "1 kg" },
        { categoria: "Armas cuerpo a cuerpo marciales", nombre: "Tridente", danio: "1d8 perforante", propiedades: "Arrojadizo (alcance 6/18), versátil (1d10)", maestria: "Derribar", peso: "2 kg" },

        { categoria: "Armas a distancia marciales", nombre: "Arco largo", danio: "1d8 perforante", propiedades: "A dos manos, munición (alcance 45/180; flecha), pesado", maestria: "Ralentizar", peso: "1 kg" },
        { categoria: "Armas a distancia marciales", nombre: "Ballesta de mano", danio: "1d6 perforante", propiedades: "Ligera, munición (alcance 9/36; virote), recarga", maestria: "Molestar", peso: "1,5 kg" },
        { categoria: "Armas a distancia marciales", nombre: "Ballesta pesada", danio: "1d10 perforante", propiedades: "A dos manos, munición (alcance 30/120; virote), pesada, recarga", maestria: "Empujar", peso: "9 kg" },
        { categoria: "Armas a distancia marciales", nombre: "Cerbatana", danio: "1 perforante", propiedades: "Munición (alcance 7,5/30; dardo), recarga", maestria: "Molestar", peso: "0,5 kg" },
        { categoria: "Armas a distancia marciales", nombre: "Mosquete", danio: "1d12 perforante", propiedades: "A dos manos, munición (alcance 12/36; bala), recarga", maestria: "Ralentizar", peso: "5 kg" },
        { categoria: "Armas a distancia marciales", nombre: "Pistola", danio: "1d10 perforante", propiedades: "Munición (alcance 9/27; bala), recarga", maestria: "Molestar", peso: "1,5 kg" }
    ]
};