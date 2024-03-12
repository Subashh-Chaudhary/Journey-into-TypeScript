"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
        this.password = "1234@123";
        this.name = name;
        this.email = email;
    }
    Object.defineProperty(User.prototype, "getAppleEmail", {
        get: function () {
            return "Apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getPassword", {
        get: function () {
            return this.password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setPassword", {
        set: function (pass) {
            this.password = "fancyword123";
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
