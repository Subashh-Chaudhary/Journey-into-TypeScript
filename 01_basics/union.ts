let score: number | string = 35;
score = 23;
score = "99";

type User = {
  name: string,
  id: number
};

type Admin = {
  userName: string,
  id: number
};

let subash: User | Admin = {
  name: "Subash Tharu",
  id: 112,
};

subash = { userName: "Subbu", id: 223 };

function getDbId(id: number | string) {
//   // Some API calls
//   console.log(`Your id is ${id}`);
          if(typeof id === "string"){
                    id.toUpperCase();
          }
          if(typeof id === "number"){
                    id + 2;
          }
}
getDbId("34");
getDbId(12);

export {};
