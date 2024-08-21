"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 35;
score = 23;
score = "99";
var subash = {
    name: "Subash Tharu",
    id: 112,
};
subash = { userName: "Subbu", id: 223 };
function getDbId(id) {
    //   // Some API calls
    //   console.log(`Your id is ${id}`);
    if (typeof id === "string") {
        id.toUpperCase();
    }
    if (typeof id === "number") {
        id + 2;
    }
}
getDbId("34");
getDbId(12);
