"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Subash",
    email: "chysubash15963@gmail.com",
    isActive: false,
};
function createUser(_a) {
    var name = _a.name, isActive = _a.isActive;
    console.log("name = ".concat(this.name, ", isActive = ").concat(this.isActive ? "YES" : "NO"));
}
createUser(user);
