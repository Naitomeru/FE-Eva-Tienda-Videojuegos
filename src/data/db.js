export const cartStorageName = "videogames-cart";

export const db = {
    consoles: [
        {
            id: 1,
            title: "Nintendo Switch",
            category: "Nintendo",
            path_image: "/images/nintendo/consoles/switch.jpg",
            price: 289990,
            discount: 0.85
        },
        {
            id: 2,
            title: "Nintendo Switch OLED Neon Black",
            category: "Nintendo",
            path_image: "/images/nintendo/consoles/switch_oled_neon_black.jpg",
            price: 369990
        },
        {
            id: 3,
            title: "Nintendo Switch OLED Neon White",
            category: "Nintendo",
            path_image: "/images/nintendo/consoles/switch_oled_neon_white.jpg",
            price: 369990
        },
        {
            id: 4,
            title: "Nintendo Switch 2",
            category: "Nintendo",
            path_image: "/images/nintendo/consoles/switch_2.jpg",
            price: 599990
        },
        {
            id: 5,
            title: "Playstation 5 Slim",
            category: "Playstation",
            path_image: "/images/playstation/consoles/ps5_slim.jpeg",
            price: 649990,
            discount: 0.85
        },
        {
            id: 6,
            title: "Playstation 5 Slim Digital",
            category: "Playstation",
            path_image: "/images/playstation/consoles/ps5_slim_digital.jpg",
            price: 529990
        },
        {
            id: 7,
            title: "Playstation 5 Slim Digital - Astrobot",
            category: "Playstation",
            path_image: "/images/playstation/consoles/ps5_slim_digital_astrobot.jpeg",
            price: 569990
        },
        {
            id: 8,
            title: "Xbox One S",
            category: "Xbox",
            path_image: "/images/xbox/consoles/xbox_one_s.jpg",
            price: 529990
        },
        {
            id: 9,
            title: "Xbox One X",
            category: "Xbox",
            path_image: "/images/xbox/consoles/xbox_one_x.jpg",
            price: 579990,
            discount: 0.85
        },
        {
            id: 10,
            title: "Xbox Series S",
            category: "Xbox",
            path_image: "/images/xbox/consoles/xbox_series_s.jpg",
            price: 649990
        },
        {
            id: 11,
            title: "Xbox Series X",
            category: "Xbox",
            path_image: "/images/xbox/consoles/xbox_series_x.jpg",
            price: 699990
        }
    ],
    games: [
        {
            id: 1,
            title: "Super Mario Odyssey",
            category: "Nintendo",
            console: "Nintendo Switch",
            path_image: "/images/nintendo/games/switch_super_mario_odyssey.jpg",
            price: 64990
        },
        {
            id: 2,
            title: "The Legend of Zelda: Breath of the Wild",
            category: "Nintendo",
            console: "Nintendo Switch",
            path_image: "/images/nintendo/games/switch_zelda_botw.jpg",
            price: 64990
        },
        {
            id: 3,
            title: "Mario Kart 8 Deluxe",
            category: "Nintendo",
            console: "Nintendo Switch",
            path_image: "/images/nintendo/games/switch_mario_kart_8_deluxe.jpg",
            price: 69990
        },
        {
            id: 4,
            title: "Super Mario 3D World + Bowser's Fury",
            category: "Nintendo",
            console: "Nintendo Switch",
            path_image: "/images/nintendo/games/switch_super_mario_3d_world.jpg",
            price: 64990
        },
        {
            id: 5,
            title: "Animal Crossing: New Horizons",
            category: "Nintendo",
            console: "Nintendo Switch",
            path_image: "/images/nintendo/games/switch_animal_crossing.jpg",
            price: 64990,
            discount: 0.85
        },
        {
            id: 6,
            title: "Dragon Quest I & II HD-2D Remake",
            category: "Nintendo",
            console: "Nintendo Switch",
            path_image: "/images/nintendo/games/switch_dragon_quest_2d_remake.jpg",
            price: 69990
        },
        {
            id: 7,
            title: "Live a live",
            category: "Nintendo",
            console: "Nintendo Switch",
            path_image: "/images/nintendo/games/switch_live_a_live.jpg",
            price: 52990
        },
        {
            id: 8,
            title: "Luigi's Mansion 3",
            category: "Nintendo",
            console: "Nintendo Switch",
            path_image: "/images/nintendo/games/switch_luigis_mansion_3.jpg",
            price: 69990,
            discount: 0.85
        },
        {
            id: 9,
            title: "New Super Mario Bros U Deluxe",
            category: "Nintendo",
            console: "Nintendo Switch",
            path_image: "/images/nintendo/games/switch_new_super_mario_bros_u_deluxe.jpg",
            price: 64990
        },
        {
            id: 10,
            title: "Pikmin 3 Deluxe",
            category: "Nintendo",
            console: "Nintendo Switch",
            path_image: "/images/nintendo/games/switch_pikmin_3_deluxe.jpg",
            price: 59990
        },
        {
            id: 11,
            title: "Triangle Strategy",
            category: "Nintendo",
            console: "Nintendo Switch",
            path_image: "/images/nintendo/games/switch_triangle_strategy.jpg",
            price: 59990
        },
        {
            id: 12,
            title: "Grand Theft Auto V",
            category: "Playstation",
            console: "Playstation 5",
            path_image: "/images/playstation/games/ps5_gta_5.jpg",
            price: 21990
        },
        {
            id: 13,
            title: "Marvel's Spider-man Miles Morales",
            category: "Playstation",
            console: "Playstation 5",
            path_image: "/images/playstation/games/ps5_marvels_spiderman_miles_morales.jpg",
            price: 34990,
            discount: 0.85
        },
        {
            id: 14,
            title: "Ghostwire Tokyo",
            category: "Playstation",
            console: "Playstation 5",
            path_image: "/images/playstation/games/ps5_ghostwire_tokyo.jpg",
            price: 49990
        },
        {
            id: 15,
            title: "Godfall",
            category: "Playstation",
            console: "Playstation 5",
            path_image: "/images/playstation/games/ps5_godfall.jpg",
            price: 39990
        },
        {
            id: 16,
            title: "Demon Slayer (Kimetsu no yaiba): Hinokami Chronicles",
            category: "Playstation",
            console: "Playstation 5",
            path_image: "/images/playstation/games/ps5_demon_slayer_hinokami_chronicles.jpg",
            price: 59990
        },
        {
            id: 17,
            title: "Lego Star Wars: The Skywalker Saga",
            category: "Playstation",
            console: "Playstation 5",
            path_image: "/images/playstation/games/ps5_lego_star_wars_the_skywalker_saga.jpg",
            price: 39990,
            discount: 0.85
        },
        {
            id: 18,
            title: "Life is Strange 3: True Colors",
            category: "Playstation",
            console: "Playstation 5",
            path_image: "/images/playstation/games/ps5_life_is_strange_true_colors.jpg",
            price: 34990
        },
        {
            id: 19,
            title: "Nickelodeon All Stars Brawl",
            category: "Playstation",
            console: "Playstation 5",
            path_image: "/images/playstation/games/ps5_nickelodeon_all_stars_brawl.jpg",
            price: 39990,
            discount: 0.85
        },
        {
            id: 20,
            title: "Outriders",
            category: "Playstation",
            console: "Playstation 5",
            path_image: "/images/playstation/games/ps5_outriders.jpg",
            price: 29990
        },
        {
            id: 21,
            title: "The Quarry",
            category: "Playstation",
            console: "Playstation 5",
            path_image: "/images/playstation/games/ps5_the_quarry.jpg",
            price: 39990
        },
        {
            id: 22,
            title: "Hades",
            category: "Xbox",
            console: "Xbox Series X",
            path_image: "/images/xbox/games/xbox_hades.jpg",
            price: 17990,
            discount: 0.9
        },
        {
            id: 23,
            title: "Life is Strange 3: True Colors",
            category: "Xbox",
            console: "Xbox Series X",
            path_image: "/images/xbox/games/xbox_life_is_strange_true_colors.jpg",
            price: 54990,
            discount: 0.5
        },
        {
            id: 24,
            title: "Marvel's Guardians of the Galaxy",
            category: "Xbox",
            console: "Xbox Series X",
            path_image: "/images/xbox/games/xbox_marvels_guardians_of_the_galaxy.jpg",
            price: 59990,
            discount: 0.75
        },
        {
            id: 25,
            title: "Wild Hearts",
            category: "Xbox",
            console: "Xbox Series X",
            path_image: "/images/xbox/games/xbox_wild_hearts.jpg",
            price: 24990,
        },
        {
            id: 26,
            title: "The Quarry",
            category: "Xbox",
            console: "Xbox Series X",
            path_image: "/images/xbox/games/xbox_the_quarry.jpg",
            price: 19990,
        },
        {
            id: 27,
            title: "Chivalry 2",
            category: "Xbox",
            console: "Xbox Series X",
            path_image: "/images/xbox/games/xbox_chivalry_2.jpg",
            price: 14990
        },
        {
            id: 28,
            title: "Demon Slayer (Kimetsu no yaiba): Hinokami Chronicles",
            category: "Xbox",
            console: "Xbox Series X",
            path_image: "/images/xbox/games/xbox_demon_slayer_hinokami_chronicles.jpg",
            price: 59990,
            discount: 0.5
        },
        {
            id: 29,
            title: "Hot Wheels Unleashed",
            category: "Xbox",
            console: "Xbox Series X",
            path_image: "/images/xbox/games/xbox_hotwheels_unleashed.jpg",
            price: 19990
        },
        {
            id: 30,
            title: "Mortal Kombat 1",
            category: "Xbox",
            console: "Xbox Series X",
            path_image: "/images/xbox/games/xbox_mortal_kombat_1.jpg",
            price: 74990,
            discount: 0.75
        },
        {
            id: 31,
            title: "Nickelodeon All Stars Brawl",
            category: "Xbox",
            console: "Xbox Series X",
            path_image: "/images/xbox/games/xbox_nickelodeon_all_stars_brawl.jpg",
            price: 19990
        },
        {
            id: 32,
            title: "Yoshi and the Mysterious Book",
            category: "Nintendo",
            console: "Nintendo Switch 2",
            path_image: "/images/nintendo/games/switch2_yoshi_and_the_mysterious_book.jpg",
            price: 82990,
            presale: true
        },
        {
            id: 33,
            title: "Star Fox",
            category: "Nintendo",
            console: "Nintendo Switch 2",
            path_image: "/images/nintendo/games/switch2_star_fox.jpg",
            price: 79990,
            presale: true
        }
    ]
}
