"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.attack = function () {
        console.log("attacking");
    };
    Player.prototype.move = function () {
        console.log("moving");
    };
    return Player;
}());
exports.default = Player;
exports.PI = 3.13;
