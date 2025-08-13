"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var game_1 = require("./game");
var player_1 = require("./player");
var Utility = __importStar(require("./utility"));
var newGame;
document.getElementById('startGame').addEventListener('click', function () {
    var player = new player_1.Player('fuckYou', 0);
    player.name = Utility.getValue('playername');
    var problemCount = Number(Utility.getValue('problemCount'));
    var factor = Number(Utility.getValue('factor'));
    newGame = new game_1.Game(player, problemCount, factor);
    newGame.displayGame();
});
document.getElementById('calculate').addEventListener('click', function () {
    newGame.calculateScore();
});
//# sourceMappingURL=app.js.map