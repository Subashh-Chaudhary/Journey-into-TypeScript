let User: [number, string, boolean];

User = [2, "Subash Tharu", false];
// need to set the value in strict pattern
// like(in this case)
//        at
//           1st => number
//           2nd => string
//           3rd => boolean
// Order of the array matters

type work = [number, string];
const newUser: work = [1001, "Facebook[META]"];
newUser.push(13212);
export {};
