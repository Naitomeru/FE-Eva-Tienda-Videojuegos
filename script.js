"use strict";
// Global variables
const cartStorageName = "videogames-cart";

const db = {
    consoles: [
        {
            id: 1,
            nombre: "Nintendo Switch",
            categoria: "Nintendo",
            path_imagen: "images/nintendo/consoles/switch.jpg",
            precio: 289990,
            oferta: 0.85
        },
        {
            id: 2,
            nombre: "Nintendo Switch OLED Neon Black",
            categoria: "Nintendo",
            path_imagen: "images/nintendo/consoles/switch_oled_neon_black.jpg",
            precio: 369990
        },
        {
            id: 3,
            nombre: "Nintendo Switch OLED Neon White",
            categoria: "Nintendo",
            path_imagen: "images/nintendo/consoles/switch_oled_neon_white.jpg",
            precio: 369990
        },
        {
            id: 4,
            nombre: "Nintendo Switch 2",
            categoria: "Nintendo",
            path_imagen: "images/nintendo/consoles/switch_2.jpg",
            precio: 599990
        },
        {
            id: 5,
            nombre: "Playstation 5 Slim",
            categoria: "Playstation",
            path_imagen: "images/playstation/consoles/ps5_slim.jpeg",
            precio: 649990,
            oferta: 0.85
        },
        {
            id: 6,
            nombre: "Playstation 5 Slim Digital",
            categoria: "Playstation",
            path_imagen: "images/playstation/consoles/ps5_slim_digital.jpg",
            precio: 529990
        },
        {
            id: 7,
            nombre: "Playstation 5 Slim Digital - Astrobot",
            categoria: "Playstation",
            path_imagen: "images/playstation/consoles/ps5_slim_digital_astrobot.jpeg",
            precio: 569990
        },
        {
            id: 8,
            nombre: "Xbox One S",
            categoria: "Xbox",
            path_imagen: "images/xbox/consoles/xbox_one_s.jpg",
            precio: 529990
        },
        {
            id: 9,
            nombre: "Xbox One X",
            categoria: "Xbox",
            path_imagen: "images/xbox/consoles/xbox_one_x.jpg",
            precio: 579990,
            oferta: 0.85
        },
        {
            id: 10,
            nombre: "Xbox Series S",
            categoria: "Xbox",
            path_imagen: "images/xbox/consoles/xbox_series_s.jpg",
            precio: 649990
        },
        {
            id: 11,
            nombre: "Xbox Series X",
            categoria: "Xbox",
            path_imagen: "images/xbox/consoles/xbox_series_x.jpg",
            precio: 699990
        }
    ],
    games: [
        {
            id: 1,
            nombre: "Super Mario Odyssey",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_super_mario_odyssey.jpg",
            precio: 64990
        },
        {
            id: 2,
            nombre: "The Legend of Zelda: Breath of the Wild",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_zelda_botw.jpg",
            precio: 64990
        },
        {
            id: 3,
            nombre: "Mario Kart 8 Deluxe",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_mario_kart_8_deluxe.jpg",
            precio: 69990
        },
        {
            id: 4,
            nombre: "Super Mario 3D World + Bowser's Fury",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_super_mario_3d_world.jpg",
            precio: 64990
        },
        {
            id: 5,
            nombre: "Animal Crossing: New Horizons",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_animal_crossing.jpg",
            precio: 64990,
            oferta: 0.85
        },
        {
            id: 6,
            nombre: "Dragon Quest I & II HD-2D Remake",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_dragon_quest_2d_remake.jpg",
            precio: 69990
        },
        {
            id: 7,
            nombre: "Live a live",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_live_a_live.jpg",
            precio: 52990
        },
        {
            id: 8,
            nombre: "Luigi's Mansion 3",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_luigis_mansion_3.jpg",
            precio: 69990,
            oferta: 0.85
        },
        {
            id: 9,
            nombre: "New Super Mario Bros U Deluxe",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_new_super_mario_bros_u_deluxe.jpg",
            precio: 64990
        },
        {
            id: 10,
            nombre: "Pikmin 3 Deluxe",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_pikmin_3_deluxe.jpg",
            precio: 59990
        },
        {
            id: 11,
            nombre: "Triangle Strategy",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_triangle_strategy.jpg",
            precio: 59990
        },
        {
            id: 12,
            nombre: "Grand Theft Auto V",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_gta_5.jpg",
            precio: 21990
        },
        {
            id: 13,
            nombre: "Marvel's Spider-man Miles Morales",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_marvels_spiderman_miles_morales.jpg",
            precio: 34990,
            oferta: 0.85
        },
        {
            id: 14,
            nombre: "Ghostwire Tokyo",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_ghostwire_tokyo.jpg",
            precio: 49990
        },
        {
            id: 15,
            nombre: "Godfall",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_godfall.jpg",
            precio: 39990
        },
        {
            id: 16,
            nombre: "Demon Slayer (Kimetsu no yaiba): Hinokami Chronicles",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_demon_slayer_hinokami_chronicles.jpg",
            precio: 59990
        },
        {
            id: 17,
            nombre: "Lego Star Wars: The Skywalker Saga",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_lego_star_wars_the_skywalker_saga.jpg",
            precio: 39990,
            oferta: 0.85
        },
        {
            id: 18,
            nombre: "Life is Strange 3: True Colors",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_life_is_strange_true_colors.jpg",
            precio: 34990
        },
        {
            id: 19,
            nombre: "Nickelodeon All Stars Brawl",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_nickelodeon_all_stars_brawl.jpg",
            precio: 39990,
            oferta: 0.85
        },
        {
            id: 20,
            nombre: "Outriders",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_outriders.jpg",
            precio: 29990
        },
        {
            id: 21,
            nombre: "The Quarry",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_the_quarry.jpg",
            precio: 39990
        },
        {
            id: 22,
            nombre: "Hades",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_hades.jpg",
            precio: 17990,
            oferta: 0.9
        },
        {
            id: 23,
            nombre: "Life is Strange 3: True Colors",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_life_is_strange_true_colors.jpg",
            precio: 54990,
            oferta: 0.5
        },
        {
            id: 24,
            nombre: "Marvel's Guardians of the Galaxy",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_marvels_guardians_of_the_galaxy.jpg",
            precio: 59990,
            oferta: 0.75
        },
        {
            id: 25,
            nombre: "Wild Hearts",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_wild_hearts.jpg",
            precio: 24990,
        },
        {
            id: 26,
            nombre: "The Quarry",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_the_quarry.jpg",
            precio: 19990,
        },
        {
            id: 27,
            nombre: "Chivalry 2",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_chivalry_2.jpg",
            precio: 14990
        },
        {
            id: 28,
            nombre: "Demon Slayer (Kimetsu no yaiba): Hinokami Chronicles",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_demon_slayer_hinokami_chronicles.jpg",
            precio: 59990,
            oferta: 0.5
        },
        {
            id: 29,
            nombre: "Hot Wheels Unleashed",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_hotwheels_unleashed.jpg",
            precio: 19990
        },
        {
            id: 30,
            nombre: "Mortal Kombat 1",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_mortal_kombat_1.jpg",
            precio: 74990,
            oferta: 0.75
        },
        {
            id: 31,
            nombre: "Nickelodeon All Stars Brawl",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_nickelodeon_all_stars_brawl.jpg",
            precio: 19990
        },
        {
            id: 32,
            nombre: "Yoshi and the Mysterious Book",
            categoria: "Nintendo",
            consola: "Nintendo Switch 2",
            path_imagen: "images/nintendo/games/switch2_yoshi_and_the_mysterious_book.jpg",
            precio: 82990,
            preventa: true
        },
        {
            id: 33,
            nombre: "Star Fox",
            categoria: "Nintendo",
            consola: "Nintendo Switch 2",
            path_imagen: "images/nintendo/games/switch2_star_fox.jpg",
            precio: 79990,
            preventa: true
        }
    ]
}

/**
 * Formatea el precio para mostrarlo en pesos chilenos.
 *
 * @param {number} price El precio a formatear
 * @returns {string} El precio formateado
 */
function priceToString(price) {
    const price_number = price.toString();
    const total_digits = price_number.length;
    const modulo = total_digits % 3;

    let price_text = "$";

    if (modulo != 0) {
        price_text = price_text.concat(price_number.substring(0, modulo));
        price_text = price_text.concat(".");
    }

    const iterations = (total_digits - modulo) / 3
    for (let i = 0; i < iterations; i++) {
        price_text = price_text.concat(price_number.substring(modulo + i * 3, modulo + i * 3 + 3));
        if (i < iterations - 1) {
            price_text = price_text.concat(".");
        }
    }
    price_text = price_text.concat(" CLP");

    return price_text;
}

/**
 * Trunca el valor a la unidad.
 *
 * @param {number} price El precio a truncar
 * @returns {string} El precio truncado
 */
function priceWithSale(price, sale) {
    const final_price = Math.floor(price * sale);
    return final_price - (final_price % 10);
}

/**
 * Crea un item con la información de un juego y lo añade a un contenedor.
 * 
 * @param {*} game Objeto con información del juego
 * @param {HTMLElement} container Contenedor donde se guardará el item 
 * @param {HTMLElement} original_item Plantilla de item 
 * @param {HTMLElement} original_item_label Plantilla de label del item (para ofertas o preventas) 
 * @param {number} type Tipo de item: 0 = consola, 1 = videojuego 
 */
function createItem(game, container, original_item, original_item_label, type) {
    const new_item = original_item.cloneNode(true);

    // Imagen
    new_item.children[0].children[0].src = game.path_imagen;

    // Título
    new_item.children[1].innerHTML = game.nombre;

    // Precio
    new_item.children[2].innerHTML = priceToString(game.precio);

    // Oferta
    if (game.oferta !== undefined) {
        const item_label = original_item_label.cloneNode();
        item_label.innerHTML = "OFERTA";
        new_item.children[0].appendChild(item_label);

        new_item.children[2].style.textDecoration = "line-through 2px";
        new_item.children[3].innerHTML = priceToString(priceWithSale(game.precio, game.oferta));
    } else if (game.preventa !== undefined) {
        const item_label = original_item_label.cloneNode();
        item_label.innerHTML = "PREVENTA";
        new_item.children[0].appendChild(item_label);
    }

    // Link a detalles
    new_item.href = "detalles.html?tipo=" + type + "&id=" + game.id;

    container.appendChild(new_item);
}

/**
 * Función para añadir un producto al carrito de compras.
 * 
 * @param {Object} product 
 * @param {HTMLElement} cart_quantity_text 
 */
function addToCart(product, cart_quantity_text) {
    // Se obtiene el carrito desde la memoria
    // Si no existe, se pasa un arreglo vacío
    const cart = JSON.parse( localStorage.getItem(cartStorageName) ) || [];

    let exists = false;
    for (const item_in_cart of cart) {
        // Si ya está en carrito, aumentar cantidad
        if (item_in_cart.id === product.id && item_in_cart.tipo == product.tipo) {
            item_in_cart.cantidad += product.cantidad;
            exists = true;
            break;
        }
    }
    
    // Si no existe el producto, añadirlo al carrito
    if (!exists) {
        cart.push(product)
        console.log(cart);

        // Actualiza la cantidad de elementos del carrito
        cart_quantity_text.innerHTML = "(" + cart.length + ")";
    }

    // Actualiza el carrito en la memoria
    localStorage.setItem(cartStorageName, JSON.stringify(cart));
}

/**
 * Asigna la cantidad total de elementos del carrito al ícono superior derecho.
 */
function setCartQuantity(cart_quantity_text) {
    // Se consigue el texto y se asigna el total de elementos del carrito
    const cart = JSON.parse( localStorage.getItem(cartStorageName) ) || [];
    cart_quantity_text.innerHTML = "(" + cart.length + ")";
}

// Header buttons
document.addEventListener("DOMContentLoaded", function() {

    // Se consigue el texto de la cantidad de elementos del carrito
    const cart = document.getElementById("cart-button");
    if (cart !== null) {
        const cart_quantity_text = cart.firstElementChild.lastElementChild;
        setCartQuantity(cart_quantity_text);
    }

    // Se añaden listeners a los botones del header para redireccionamiento

    const oferta_button = document.getElementById("ofertas-button");
    oferta_button.addEventListener("click", function() {
        location.replace("galeria.html?tipo=ofertas");
    });

    const preventas_button = document.getElementById("preventas-button");
    preventas_button.addEventListener("click", function() {
        location.replace("galeria.html?tipo=preventas");
    });

    // Para los botones de Nintendo, PlayStation y Xbox,
    // además, se añaden listeners para los pop-ups
    const nintendo_button = document.getElementById("nintendo-button");
    nintendo_button.addEventListener("click", function() {
        location.replace("galeria.html?tipo=marca&categoria=Nintendo");
    });
    nintendo_button.addEventListener("mouseenter", function() {
        nintendo_button.children[0].style.display = "flex";
    });
    nintendo_button.addEventListener("mouseleave", function() {
        nintendo_button.children[0].style.display = "none";
    });

    const playstation_button = document.getElementById("playstation-button");
    playstation_button.addEventListener("click", function() {
        location.replace("galeria.html?tipo=marca&categoria=Playstation");
    });
    playstation_button.addEventListener("mouseenter", function() {
        playstation_button.children[0].style.display = "flex";
    });
    playstation_button.addEventListener("mouseleave", function() {
        playstation_button.children[0].style.display = "none";
    });

    const xbox_button = document.getElementById("xbox-button");
    xbox_button.addEventListener("click", function() {
        location.replace("galeria.html?tipo=marca&categoria=Xbox");
    });
    xbox_button.addEventListener("mouseenter", function() {
        xbox_button.children[0].style.display = "flex";
    });
    xbox_button.addEventListener("mouseleave", function() {
        xbox_button.children[0].style.display = "none";
    });
});

// index.html
document.addEventListener("DOMContentLoaded", function() {
    // Si no tiene un elemento con id "index-main", salimos de la función
    if (document.getElementById("index-main") === null) return;

    // Se añade un listener al botón del hero
    const hero_button = document.getElementById("hero-button");
    hero_button.addEventListener("click", function() {
        location.replace("galeria.html?tipo=ofertas");
    });

    const containers = document.getElementsByClassName("section-content");

    // Conseguimos los contenedores donde irán los juegos con sus precios
    const nintendo_games_container = containers[0];
    const playstation_games_container = containers[1];
    const xbox_games_container = containers[2];

    // Conseguimos la plantilla del item
    const original_item = nintendo_games_container.children[0];
    original_item.remove();

    // Conseguimos el label del item (para poner oferta o preventa)
    const original_item_label = original_item.children[0].children[0];
    original_item_label.remove();

    // Separaremos los juegos por categoría
    const nintendo_games = [];
    const playstation_games = [];
    const xbox_games = [];
    for (const game of db.games) {
        if (game.categoria.toLowerCase() === "nintendo") {
            nintendo_games.push(game);
        } else if (game.categoria.toLowerCase() === "playstation") {
            playstation_games.push(game);
        } else if (game.categoria.toLowerCase() === "xbox") {
            xbox_games.push(game);
        }
    }

    // Mostramos solo los primeros cuatro juegos de cada categoría
    for (let i = 0; i < 4; i++) {
        // Juego de Nintendo
        createItem(nintendo_games[i], nintendo_games_container, original_item, original_item_label, 1);
        // Juego de Playstation
        createItem(playstation_games[i], playstation_games_container, original_item, original_item_label, 1);
        // Juego de Xbox
        createItem(xbox_games[i], xbox_games_container, original_item, original_item_label, 1);
    }

    // Añadimos listeners a los botones de "Ver más"
    const nintendo_view_more_button = document.getElementById("section1").lastElementChild.firstElementChild;
    nintendo_view_more_button.addEventListener("click", function() {
        location.replace("galeria.html?tipo=Videojuegos&categoria=Nintendo");
    });
    
    const ps_view_more_button = document.getElementById("section2").lastElementChild.firstElementChild;
    ps_view_more_button.addEventListener("click", function() {
        location.replace("galeria.html?tipo=Videojuegos&categoria=PlayStation");
    });
    
    const xbox_view_more_button = document.getElementById("section3").lastElementChild.firstElementChild;
    xbox_view_more_button.addEventListener("click", function() {
        location.replace("galeria.html?tipo=Videojuegos&categoria=Xbox");
    });

    // Añadimos listeners a los logos del carrusel
    const brands = document.getElementsByClassName("brand-item");
    for (let i = 0; i < brands.length; i++) {
        // 0: Nintendo, 1: PlayStation, 2: Xbox
        const category = i % 3;
        let category_text = "";
        switch (category) {
            case 0:
                category_text = "Nintendo";
                break;
                
            case 1:
                category_text = "PlayStation";
                break;
                
            case 2:
                category_text = "Xbox";
                break;
            }
        brands[i].addEventListener("click", function() {
            location.replace("galeria.html?tipo=marca&categoria=" + category_text)
        });
    }
});

// Detalles
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("details-container");
    if (container === null) return;

    // Se consiguen el parámetro "id" del URL
    const urlParams = new URLSearchParams(location.search);
    const type = urlParams.get("tipo");
    const id = urlParams.get("id");

    const cart_quantity_text = document.getElementById("cart-button").firstElementChild.lastElementChild;

    // Se busca el elemento en la colección de juegos
    let item = null;
    // Se selecciona la colección a buscar de acuerdo al parámetro 'tipo'
    // 0: consolas, 1: videojuegos
    const collection = type == 0 ? db.consoles : db.games;
    for (const element_db of collection) {
        if (element_db.id == id) {
            item = element_db;
            break;
        }
    }
    if (item === null) return;

    // Imagen
    const image = container.children[0].children[0];
    image.src = item.path_imagen;

    // Título del videojuego
    const title = document.getElementById("title");
    title.innerHTML = item.nombre;

    // Precio
    const price = document.getElementById("price");
    price.innerHTML = priceToString(item.precio);

    // Botones que modifican la cantidad a comprar
    const buttons = document.getElementById("buttons").children[0].children;
    // El texto donde se muestra la cantidad a comprar
    const quantity_text = buttons[1];

    // Botón -
    buttons[0].addEventListener("click", function() {
        let quantity = parseInt(quantity_text.innerHTML);
        quantity--;
        if (quantity < 1) quantity = 1;

        quantity_text.innerHTML = quantity;
    });

    // Botón +
    buttons[2].addEventListener("click", function() {
        let quantity = parseInt(quantity_text.innerHTML);
        quantity++;
        if (quantity > 100) quantity = 100;

        quantity_text.innerHTML = quantity;
    });

    // Se añade listener al botón "Agregar al carrito"
    document.getElementById("add-to-cart-button").addEventListener("click", function() {
        const item_to_push = {
            "id": item.id,
            "nombre": item.nombre,
            "tipo": type == 0 ? "consola" : "videojuego",
            "precio": item.precio,
            "path_imagen": item.path_imagen,
            "cantidad": parseInt(quantity_text.innerHTML)
        }
        addToCart(item_to_push, cart_quantity_text);
    });
});

// Galería
document.addEventListener("DOMContentLoaded", function() {
    const gallery_main = document.getElementById("gallery-main");
    if (gallery_main === null) return;

    // Se consiguen el parámetro "id" del URL
    const urlParams = new URLSearchParams(location.search);
    const type = urlParams.get("tipo");
    const category = urlParams.get("categoria");

    // Se consigue el título de la galería
    const title = gallery_main.children[0];
    const gallery = document.getElementById("gallery");

    // Se consigue la plantilla de los items
    const original_item = gallery.children[0];
    original_item.remove();

    // Conseguimos el label del item (para poner oferta o preventa)
    const original_item_label = original_item.children[0].children[0];
    original_item_label.remove();

    // Se crean los items dependiendo del tipo de item y, opcionalmente, su categoría
    if (type.toLowerCase() === "ofertas") {
        title.innerHTML = "Ofertas";
        for (const item of db.consoles) {
            // Solo crear item con 'oferta' definido
            if (item.oferta !== undefined) {
                createItem(item, gallery, original_item, original_item_label, 0);
            }
        }
        for (const item of db.games) {
            // Solo crear item con 'oferta' definido
            if (item.oferta !== undefined) {
                createItem(item, gallery, original_item, original_item_label, 1);
            }
        }
    } else if (type.toLowerCase() === "preventas") {
        title.innerHTML = "Preventas";
        for (const item of db.consoles) {
            // Solo crear item con 'preventa' definido
            if (item.preventa !== undefined) {
                createItem(item, gallery, original_item, original_item_label, 0);
            }
        }
        for (const item of db.games) {
            // Solo crear item con 'preventa' definido
            if (item.preventa !== undefined) {
                createItem(item, gallery, original_item, original_item_label, 1);
            }
        }
    } else if (type.toLowerCase() === "marca") {
        title.innerHTML = category;
        for (const item of db.consoles) {
            if (item.categoria.toLowerCase() === category.toLowerCase()) {
                createItem(item, gallery, original_item, original_item_label, 0);
            }
        }
        for (const item of db.games) {
            if (item.categoria.toLowerCase() === category.toLowerCase()) {
                createItem(item, gallery, original_item, original_item_label, 1);
            }
        }
    } else if (type.toLowerCase() === "consolas") {
        if (category === null) {
            title.innerHTML = "Consolas";
            for (const item of db.consoles) {
                createItem(item, gallery, original_item, original_item_label, 0);
            }
        } else {
            title.innerHTML = "Consolas de " + category;
            for (const item of db.consoles) {
                if (item.categoria.toLowerCase() === category.toLowerCase()) {
                    createItem(item, gallery, original_item, original_item_label, 0);
                }
            }
        }
    } else if (type.toLowerCase() === "videojuegos") {
        if (category === null) {
            title.innerHTML = "Videojuegos";
            for (const item of db.games) {
                createItem(item, gallery, original_item, original_item_label, 1);
            }
        } else {
            title.innerHTML = "Videojuegos de " + category;
            for (const item of db.games) {
                if (item.categoria.toLowerCase() === category.toLowerCase()) {
                    createItem(item, gallery, original_item, original_item_label, 1);
                }
            }
        }
    }
});

// Carrito carrito.html
document.addEventListener("DOMContentLoaded", function() {
    // Si no está 'cart-main' entonces salimos de la función
    if (document.getElementById("cart-main") === null) return;

    const main_container = document.getElementById("content");
    const cart_details = main_container.firstElementChild;
    const cart_container = cart_details.firstElementChild;

    // Conseguimos el carrito desde la memoria
    const cart = JSON.parse(localStorage.getItem(cartStorageName)) || [];

    if (cart.length == 0) {
        cart_details.remove();

        main_container.innerHTML = "Tu carrito está vacío."
    } else {
        // Conseguimos las plantillas componentes del item
        const product = cart_container.children[3];
        const quantity_buttons = cart_container.children[4];
        const price_text = cart_container.children[5];
        const remove_item_button = cart_container.children[6];
        product.remove();
        quantity_buttons.remove();
        price_text.remove();
        remove_item_button.remove();

        // Se consigue el texto del precio total
        const price_total_text = document.getElementById("price-total").lastElementChild;

        // Precio total para el resumen
        let total_price = 0;

        // Por cada elemento del carrito, se crea una tarjeta
        for (const item_in_cart of cart) {
            const new_product = product.cloneNode(true);

            // Imagen
            new_product.firstElementChild.firstElementChild.src = item_in_cart.path_imagen;

            // Título
            new_product.lastElementChild.firstElementChild.innerHTML = item_in_cart.nombre;

            // Precio
            new_product.lastElementChild.lastElementChild.innerHTML = priceToString(item_in_cart.precio);

            // Asignamos el subtotal del item
            const new_price_text = price_text.cloneNode(true);

            const subtotal = item_in_cart.precio * item_in_cart.cantidad;
            new_price_text.innerHTML = priceToString(subtotal);
            total_price += subtotal;

            // Se asignan listeners a los botones de cantidad
            const new_quantity_buttons = quantity_buttons.cloneNode(true);
            const quantity_text = new_quantity_buttons.children[1];
            quantity_text.innerHTML = item_in_cart.cantidad;
            // Botón -
            new_quantity_buttons.firstElementChild.addEventListener("click", function() {
                let quantity = parseInt(quantity_text.innerHTML);
                quantity--;
                if (quantity < 1) quantity = 1;

                quantity_text.innerHTML = quantity;
                item_in_cart.cantidad = quantity;
                localStorage.setItem(cartStorageName, JSON.stringify(cart));

                new_price_text.innerHTML = priceToString(quantity * item_in_cart.precio);

                let new_total_price = 0;
                for (const item_in_cart of cart) {
                    new_total_price += item_in_cart.cantidad * item_in_cart.precio;
                }
                price_total_text.innerHTML = priceToString(new_total_price);
            });

            // Botón +
            new_quantity_buttons.lastElementChild.addEventListener("click", function() {
                let quantity = parseInt(quantity_text.innerHTML);
                quantity++;
                if (quantity > 100) quantity = 100;

                quantity_text.innerHTML = quantity;
                item_in_cart.cantidad = quantity;
                localStorage.setItem(cartStorageName, JSON.stringify(cart));

                new_price_text.innerHTML = priceToString(quantity * item_in_cart.precio);

                let new_total_price = 0;
                for (const item_in_cart of cart) {
                    new_total_price += item_in_cart.cantidad * item_in_cart.precio;
                }
                price_total_text.innerHTML = priceToString(new_total_price);
            });

            const new_remove_item_button = remove_item_button.cloneNode(true);

            cart_container.append(new_product);
            cart_container.append(new_quantity_buttons);
            cart_container.append(new_price_text);
            cart_container.append(new_remove_item_button);
        }

        // Se asigna los listeners para cada botón de quitar item
        const remove_iten_buttons = Array.from(document.getElementsByClassName("fa-solid fa-trash"));
        remove_iten_buttons.forEach((btn, index) => {
            // Se añade un listener al botón
            btn.addEventListener("click", function(event) {
                // Se elimina el elemento del carrito y se guarda en memoria
                const element_removed = cart.splice(index, 1);
                localStorage.setItem(cartStorageName, JSON.stringify(cart));

                // Se recarga la página
                location.reload();
            });
        });

        // Se muestra el precio total del carrito
        price_total_text.innerHTML = priceToString(total_price);

        // Se asigna listener al boton de comprar todo
        const purchase_all_button = document.getElementById("purchase-all-button");
        purchase_all_button.addEventListener("click", function() {
            localStorage.removeItem(cartStorageName);
            location.reload();
        });

        // Se asigna listener al boton de quitar todo
        const remove_all_button = document.getElementById("remove-all-button");
        remove_all_button.addEventListener("click", function() {
            localStorage.removeItem(cartStorageName);
            location.reload();
        });
    }
});

// Solo para debug
document.addEventListener("keydown", function(event) {
    if (event.key === "d") { // Elimina carrito
        localStorage.removeItem(cartStorageName);
    } else if (event.key === "c") { // Crea un carrito vacío
        localStorage.setItem(cartStorageName, JSON.stringify([]));
    } else if (event.key === "l") { // Muestra carrito en consola
        const cart = JSON.parse(localStorage.getItem(cartStorageName));
        console.log("Carrito");
        console.log(cart);
    }
});
