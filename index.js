var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lista = /** @class */ (function () {
    function Lista() {
        this.items = [];
    }
    Lista.prototype.clear = function () {
        this.items = [];
    };
    Lista.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Lista.prototype.size = function () {
        return this.items.length;
    };
    return Lista;
}());
var Pilha = /** @class */ (function (_super) {
    __extends(Pilha, _super);
    function Pilha() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pilha.prototype.push = function (item) {
        this.items.push(item);
    };
    Pilha.prototype.pop = function () {
        return this.items.pop();
    };
    Pilha.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    return Pilha;
}(Lista));
var Fila = /** @class */ (function (_super) {
    __extends(Fila, _super);
    function Fila() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fila.prototype.push = function (item) {
        this.items.push(item);
    };
    Fila.prototype.pop = function () {
        return this.items.shift();
    };
    Fila.prototype.peek = function () {
        return this.items[0];
    };
    return Fila;
}(Lista));
