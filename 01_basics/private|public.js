"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, email) {
        this.city = "Geruwa";
        this.password = "1234@123";
        this.name = name;
        this.email = email;
    }
    return User;
}());
var user1 = new User("Subash Tharu", "chysubash15963@gmail.com");
user1.city;
