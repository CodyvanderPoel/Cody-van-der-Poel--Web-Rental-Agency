//ID's are assigned by acronyms of the names
const PAGE_DATA = {
    game_set_1: [
        {
            name: "Monster Hunter World",
            image: "images/220px-Monster_Hunter_World_cover_art.jpg",
            stock: 1,
            price: 20,
            id: "MHW",
            description:
                "Monster Hunter World introduces a living, breathing ecosystem in which players take on the role of a hunter that seeks and slays ferocious beasts in heart-pounding battles that unfold across the vast ever-changing terrain"
        },
        {
            name: "Fallout 76",
            image: "images/220px-Fallout_76_cover.jpg",
            stock: 1,
            price: 25,
            id: "F76",
            description:
                "Fallout 76 is an upcoming online multiplayer action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks."
        },
        {
            name: "Red Dead Redemption 2",
            image: "images/Red-Dead-Redemption-2.jpeg",
            stock: 1,
            price: 25,
            id: "RDR2",
            description:
                "Red Dead Redemption 2 is a Western-themed action-adventure game set in an open world environment. It is played from either a third or first-person perspective and the player controls Arthur Morgan, an outlaw and a member of the Van der Linde gang."
        }
    ],
    game_set_2: [
        {
            name: "The Witcher 3: The Wild Hunt",
            image: "images/220px-Witcher_3_cover_art.jpg",
            stock: 1,
            price: 15,
            id: "TW3TWH",
            description:
                "The Witcher 3: Wild Hunt is a story-driven, next-generation open world role-playing game, set in a visually stunning fantasy universe, full of meaningful choices and impactful consequences. You play as Geralt of Rivia, a monster hunter tasked with finding a child from an ancient prophecy."
        },
        {
            name: "Fallout 4",
            image: "images/Fallout-4-cover-art.jpg",
            stock: 1,
            price: 10,
            id: "F4",
            description:
                "Fallout 4 is a post-apocalyptic action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. The player explores the game's dilapidated world, complete various quests, help out factions, and acquire experience points to level up and increase the abilities of their character."
        },
        {
            name: "The Elder Scrolls V: Skyrim",
            image: "images/skyrim.jpeg",
            stock: 1,
            price: 5,
            id: "TESVS",
            description:
                "The Elder Scrolls V: Skyrim is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. The game's main story revolves around the player character's quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world. The game is set 200 years after the events of Oblivion and takes place in the fictional province of Skyrim."
        }
    ]
};

function renderItemSetOne() {
    var source = document.getElementById("stockTemplate").innerHTML;
    var template = Handlebars.compile(source);
    var data = PAGE_DATA.game_set_1;
    for (game in data) {
        var html = template({
            name: data[game].name,
            image: data[game].image,
            stock: data[game].stock,
            price: data[game].price,
            id: data[game].id,
            description: data[game].description
        });
        document
            .getElementById("item_set_1")
            .insertAdjacentHTML("afterbegin", html);
    }
}
renderItemSetOne();

function renderItemSetTwo() {
    var source = document.getElementById("stockTemplate").innerHTML;
    var template = Handlebars.compile(source);
    var data = PAGE_DATA.game_set_2;
    for (game in data) {
        var html = template({
            name: data[game].name,
            image: data[game].image,
            stock: data[game].stock,
            price: data[game].price,
            id: data[game].id,
            description: data[game].description
        });
        document
            .getElementById("item_set_2")
            .insertAdjacentHTML("afterbegin", html);
    }
}
renderItemSetTwo();

function submitMessage() {
    alert("Thank you for renting this item!")
}
