const PAGE_DATA = {
    game_set_1: [
        {
            name: "Fallout 76",
            image: "images/220px-Fallout_76_cover.jpg",
            stock: 5,
            price: 25
        },
        {
            name: "Red Dead Redemption 2",
            image: "images/Red-Dead-Redemption-2.jpeg",
            stock: 5,
            price: 25
        },
        {
            name: "Monster Hunter World",
            image: "images/220px-Monster_Hunter_World_cover_art.jpg",
            stock: 5,
            price: 20
        }
    ],
    game_set_2: [
        {
            name: "The Elder Scrolls V: Skyrim",
            image: "images/skyrim.jpeg",
            stock: 5,
            price: 5
        },
        {
            name: "Fallout 4",
            image: "images/Fallout-4-cover-art.jpg",
            stock: 5,
            price: 10
        },
        {
            name: "The Witcher 3: The Wild Hunt",
            image: "images/220x-Witcher_3_cover_art.jpg",
            stock: 5,
            price: 15
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
            image: data[game].image
        });
        document.getElementById("items").insertAdjacentHTML("afterbegin", html);
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
            image: data[game].image
        });
        document.getElementById("items").insertAdjacentHTML("afterbegin", html);
    }
}
renderItemSetTwo();
