"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(2);
function toUpper(val) {
    return val.toUpperCase();
}
toUpper("Subash");
function signUpUser(name, email, isPaid) {
    return "Name : ".concat(name, ", Email : ").concat(email);
}
signUpUser("Subash", "chysubash15963@gmail.com", true);
function logInUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    return "Name : ".concat(name, ", Email : ").concat(email);
}
logInUser("Subash", "chysubash15963@gmail.com");
