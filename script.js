
const db = {
    consoles: [
        {
            id: 1,
            nombre: "Nintendo Switch",
            categoria: "Nintendo",
            path_imagen: "images/nintendo/consoles/switch.jpg",
            precio: 20,
            oferta: 0.85
        },
        {
            id: 2,
            nombre: "Nintendo Switch OLED Neon Black",
            categoria: "Nintendo",
            path_imagen: "images/nintendo/consoles/switch_oled_neon_black.jpg",
            precio: 20
        },
        {
            id: 3,
            nombre: "Nintendo Switch OLED Neon White",
            categoria: "Nintendo",
            path_imagen: "images/nintendo/consoles/switch_oled_neon_white.jpg",
            precio: 20
        },
        {
            id: 4,
            nombre: "Playstation 5 Slim",
            categoria: "Playstation",
            path_imagen: "images/playstation/consoles/ps5_slim.jpg",
            precio: 20,
            oferta: 0.85
        },
        {
            id: 5,
            nombre: "Playstation 5 Slim Digital",
            categoria: "Playstation",
            path_imagen: "images/playstation/consoles/ps5_slim_digital.jpg",
            precio: 20
        },
        {
            id: 6,
            nombre: "Playstation 5 Slim Digital - Astrobot",
            categoria: "Playstation",
            path_imagen: "images/playstation/consoles/ps5_slim_digital_astrobot.jpg",
            precio: 20
        },
        {
            id: 7,
            nombre: "Xbox One S",
            categoria: "Xbox",
            path_imagen: "images/xbox/consoles/xbox_one_s.jpg",
            precio: 20
        },
        {
            id: 8,
            nombre: "Xbox One X",
            categoria: "Xbox",
            path_imagen: "images/xbox/consoles/xbox_one_x.jpg",
            precio: 20,
            oferta: 0.85
        },
        {
            id: 9,
            nombre: "Xbox Series S",
            categoria: "Xbox",
            path_imagen: "images/xbox/consoles/xbox_series_s.jpg",
            precio: 20
        },
        {
            id: 10,
            nombre: "Xbox Series X",
            categoria: "Xbox",
            path_imagen: "images/xbox/consoles/xbox_series_x.jpg",
            precio: 20
        }
    ],
    games: [
        {
            id: 1,
            nombre: "Super Mario Odyssey",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_super_mario_odyssey.jpg",
            precio: 20
        },
        {
            id: 2,
            nombre: "The Legend of Zelda: Breath of the Wild",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_zelda_botw.jpg",
            precio: 20
        },
        {
            id: 3,
            nombre: "Mario Kart 8 Deluxe",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_mario_kart_8_deluxe.jpg",
            precio: 20
        },
        {
            id: 4,
            nombre: "Super Mario 3D World + Bowser's Fury",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_super_mario_3d_world.jpg",
            precio: 20
        },
        {
            id: 5,
            nombre: "Animal Crossing: New Horizons",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_animal_crossing.jpg",
            precio: 20,
            oferta: 0.85
        },
        {
            id: 6,
            nombre: "Dragon Quest I & II HD-2D Remake",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_dragon_quest_2d_remake.jpg",
            precio: 20
        },
        {
            id: 7,
            nombre: "Live a live",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_live_a_live.jpg",
            precio: 20
        },
        {
            id: 8,
            nombre: "Luigi's Mansion 3",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_luigis_mansion_3.jpg",
            precio: 20,
            oferta: 0.85
        },
        {
            id: 9,
            nombre: "New Super Mario Bros U Deluxe",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_new_super_mario_bros_u_deluxe.jpg",
            precio: 20
        },
        {
            id: 10,
            nombre: "Pikmin 3 Deluxe",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_pikmin_3_deluxe.jpg",
            precio: 20
        },
        {
            id: 11,
            nombre: "Triangle Strategy",
            categoria: "Nintendo",
            consola: "Nintendo Switch",
            path_imagen: "images/nintendo/games/switch_triangle_strategy.jpg",
            precio: 20
        },
        {
            id: 12,
            nombre: "Grand Theft Auto V",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_gta_5.jpg",
            precio: 20
        },
        {
            id: 13,
            nombre: "Marvel's Spider-man Miles Morales",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_marvels_spiderman_miles_morales.jpg",
            precio: 20,
            oferta: 0.85
        },
        {
            id: 14,
            nombre: "Ghostwire Tokyo",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_ghostwire_tokyo.jpg",
            precio: 20
        },
        {
            id: 15,
            nombre: "Godfall",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_godfall.jpg",
            precio: 20
        },
        {
            id: 16,
            nombre: "Demon Slayer (Kimetsy no yaiba): Hinokami Chronicles",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_demon_slayer_hinokami_chronicles.jpg",
            precio: 20
        },
        {
            id: 17,
            nombre: "Lego Star Wars: The Skywalker Saga",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_lego_star_wars_the_skywalker_saga.jpg",
            precio: 20,
            oferta: 0.85
        },
        {
            id: 18,
            nombre: "Life is Strange: True Colors",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_life_is_strange_true_colors.jpg",
            precio: 20
        },
        {
            id: 19,
            nombre: "Nickelodeon All Stars Brawl",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_nickelodeon_all_stars_brawl.jpg",
            precio: 20,
            oferta: 0.85
        },
        {
            id: 20,
            nombre: "Outriders",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_outriders.jpg",
            precio: 20
        },
        {
            id: 21,
            nombre: "The Quarry",
            categoria: "Playstation",
            consola: "Playstation 5",
            path_imagen: "images/playstation/games/ps5_the_quarry.jpg",
            precio: 20
        },
        {
            id: 22,
            nombre: "Hades",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_hades.jpg",
            precio: 20
        },
        {
            id: 23,
            nombre: "Life is Strange: True Colors",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_life_is_strange_true_colors.jpg",
            precio: 20
        },
        {
            id: 24,
            nombre: "Marvel's Guardians of the Galaxy",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_marvels_guardians_of_the_galaxy.jpg",
            precio: 20
        },
        {
            id: 25,
            nombre: "Wild Hearts",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_wild_hearts.jpg",
            precio: 20,
        },
        {
            id: 26,
            nombre: "The Quarry",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_the_quarry.jpg",
            precio: 20,
        },
        {
            id: 27,
            nombre: "Chivalry 2",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_chivalry_2.jpg",
            precio: 20,
            oferta: 0.85
        },
        {
            id: 28,
            nombre: "Demon Slayer (Kimetsy no yaiba): Hinokami Chronicles",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_demon_slayer_hinokami_chronicles.jpg",
            precio: 20
        },
        {
            id: 29,
            nombre: "Hotwheels Unleashed",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_hotwheels_unleashed.jpg",
            precio: 20
        },
        {
            id: 30,
            nombre: "Mortal Kombat 1",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_mortal_kombat_1.jpg",
            precio: 20,
            oferta: 0.85
        },
        {
            id: 31,
            nombre: "Nickelodeon All Stars Brawl",
            categoria: "Xbox",
            consola: "Xbox Series X",
            path_imagen: "images/xbox/games/xbox_nickelodeon_all_stars_brawl.jpg",
            precio: 20
        },
        {
            id: 32,
            nombre: "Yoshi and the Mysterious Book",
            categoria: "Nintendo",
            consola: "Nintendo Switch 2",
            path_imagen: "images/nintendo/games/switch2_yoshi_and_the_mysterious_book.jpg",
            precio: 20,
            preventa: true
        },
        {
            id: 33,
            nombre: "Star Fox",
            categoria: "Nintendo",
            consola: "Nintendo Switch 2",
            path_imagen: "images/nintento/games/switch2_star_fox.jpg",
            precio: 20,
            preventa: true
        }
    ]
}

// index.html
document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("index-main") === null) return;

    const containers = document.getElementsByClassName("section-content");

    const nintendo_games_container = containers[0];
    const playstation_games_container = containers[1];
    const xbox_games_container = containers[2];
    const original_item = nintendo_games_container.children[0];
    original_item.remove();

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

    for (let i = 0; i < 4; i++) {
        // Juego de Nintendo
        let game = nintendo_games[i];
        let new_item = original_item.cloneNode(true);

        // Imagen
        new_item.children[0].src = game.path_imagen;

        // Título
        new_item.children[1].innerHTML = game.nombre;

        // Precio
        new_item.children[2].innerHTML = "$59.990 CLP";

        // Link a detalles
        new_item.href = "detalles.html?id=" + game.id;

        nintendo_games_container.appendChild(new_item);

        // Juego de Playstation
        game = playstation_games[i];
        new_item = original_item.cloneNode(true);

        // Imagen
        new_item.children[0].src = game.path_imagen;

        // Título
        new_item.children[1].innerHTML = game.nombre;

        // Precio
        new_item.children[2].innerHTML = "$59.990 CLP";

        // Link a detalles
        new_item.href = "detalles.html?id=" + game.id;

        playstation_games_container.appendChild(new_item);

        game = xbox_games[i];
        new_item = original_item.cloneNode(true);

        // Imagen
        new_item.children[0].src = game.path_imagen;

        // Título
        new_item.children[1].innerHTML = game.nombre;

        // Precio
        new_item.children[2].innerHTML = "$59.990 CLP";

        // Link a detalles
        new_item.href = "detalles.html?id=" + game.id;

        xbox_games_container.appendChild(new_item);
    }
});

// Detalles
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("details-container");
    if (container === null) return;

    // Se consiguen el parámetro "id" del URL
    const urlParams = new URLSearchParams(location.search);
    const game_id = urlParams.get("id");

    // Se busca el elemento en la colección de ropas
    let game = null;
    for (const element_db of db.games) {
        if (element_db.id == game_id) {
            game = element_db;
            break;
        }
    }
    if (game === null) return;

    const image = container.children[0].children[0];
    image.src = game.path_imagen;

    const title = document.getElementById("title");

    title.innerHTML = game.nombre;

    const price = document.getElementById("price");

    price.innerHTML = "$59.990 CLP";

    const buttons = document.getElementById("buttons").children[0].children;
    const quantity_text = buttons[1];

    buttons[0].addEventListener("click", function() {
        let quantity = parseInt(quantity_text.innerHTML);
        quantity--;
        if (quantity < 1) quantity = 1;

        quantity_text.innerHTML = quantity;
    });

    buttons[2].addEventListener("click", function() {
        let quantity = parseInt(quantity_text.innerHTML);
        quantity++;
        if (quantity > 100) quantity = 100;

        quantity_text.innerHTML = quantity;
    });
});
