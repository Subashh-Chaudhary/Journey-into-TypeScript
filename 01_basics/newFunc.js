"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addTwo = function (num) {
    // return "Hello";
    return num + 2;
};
addTwo(2);
function getVal(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
getVal(22);
var getHello = function (s) {
    return "";
};
getHello("My name is khan");
var myHeros = ["thor", "spiderman", "ironman"];
myHeros.map(function (hero) {
    return "Hero is ".concat(hero);
});
var consoleError = function (s) {
    console.log(s);
    //   return 1;
};
consoleError("Error : 404");
var handleError = function (err) {
    throw new Error(err);
    // return 1;
};
handleError("Error handled");
