let addTwo = (num: number): number => {
  // return "Hello";
  return num + 2;
};
addTwo(2);

function getVal(myVal: number) {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}
getVal(22);

const getHello = (s: string): string => {
  return "";
};
getHello("My name is khan");

let myHeros = ["thor", "spiderman", "ironman"];
myHeros.map((hero): string => {
  return `Hero is ${hero}`;
});

const consoleError = (s: string): void => {
  console.log(s);
  //   return 1;
};
consoleError("Error : 404");

const handleError = (err: string): never => {
  throw new Error(err);
  // return 1;
};
handleError("Error handled");

export {};
