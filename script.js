class _setInterval {
    constructor(callback, interval) {
        this.callback = callback;
        this.id = setInterval(this.callback, interval);
    }

    set Interval(interval) {
        clearInterval(this.id);
        this.id = setInterval(this.callback, interval);
    }
}

var player = {
    money: 0,
    adcl: 1,
    adclcost: 64,
    auto: 0,
    autocost: 1000,
};

function add() { player.money += player.adcl }

function addclick() {
    if (player.adclcost <= player.money) {
        player.money -= player.adclcost;
        player.adcl *= 1.002;
        player.adcl = parseInt(player.adcl * 1000) / 1000;
        player.adclcost *= 2;
    }
}

function autoclick() {
    if (player.autocost <= player.money) {
        player.money -= player.autocost;
        player.auto += 1;
        a.Interval = 10000 / player.auto
        player.autocost *= 10;
    }
}

setInterval(function() {
    $("#text").html(player.money.toLocaleString());
    $("#adcl").html("upgrade <br> add click <br> now: " + player.adcl + " <br> cost: " + player.adclcost);
    $("#auto").html("upgrade <br> auto click <br> now: " + parseInt(1000000 / player.auto) / 100 + " ms <br> cost: " + player.autocost);
}, 30);

const a = new _setInterval(() => {
    if (player.auto > 0) {
        add()
    }
}, 1000);