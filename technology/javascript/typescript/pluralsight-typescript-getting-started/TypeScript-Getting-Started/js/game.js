"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scoreboard_1 = require("./scoreboard");
var utility_1 = require("./utility");
var Game = (function () {
    function Game(player, problemCount, factor) {
        this.player = player;
        this.problemCount = problemCount;
        this.factor = factor;
        this.scoreboard = new scoreboard_1.Scoreboard();
    }
    Game.prototype.displayGame = function () {
        this.getGameElement().innerHTML = this.buildGameHtml();
        this.enableCalculateScoreButton();
    };
    Game.prototype.calculateScore = function () {
        var score = 0;
        for (var idx = 1; idx <= this.problemCount; idx++) {
            var answer = Number(utility_1.getValue("answer-" + idx));
            if (idx * this.factor === answer) {
                score++;
            }
        }
        var result = {
            playerName: this.player.name,
            score: score,
            problemCount: this.problemCount,
            factor: this.factor,
        };
        this.scoreboard.addResult(result);
        this.scoreboard.update();
        document.getElementById('calculate').setAttribute('disabled', 'true');
    };
    Game.prototype.getGameElement = function () {
        return document.getElementById('game');
    };
    Game.prototype.buildGameHtml = function () {
        var gameForm = '';
        for (var idx = 1; idx <= this.problemCount; idx++) {
            gameForm += "\n        <div class=\"form-group\">\n          <label class=\"col-sm-2 control-label\" for=\"answer-" + idx + "\">\n            " + String(this.factor) + "x" + idx + "\n          </label>\n\n          <div class=\"col-sm-1\">\n            <input id=\"answer-" + idx + "\" class=\"form-control\" type=\"text\" size=\"5\" />\n          </div>\n        </div>\n      ";
        }
        return gameForm;
    };
    Game.prototype.enableCalculateScoreButton = function () {
        document.getElementById('calculate')
            .removeAttribute('disabled');
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map