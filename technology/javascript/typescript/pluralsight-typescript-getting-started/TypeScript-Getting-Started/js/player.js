"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = (function () {
    function Player(name, highScore, age) {
        this.name = name;
        this.highScore = highScore;
        this.age = age;
    }
    Player.prototype.formatName = function () {
        return this.name.toUpperCase();
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=player.js.map