const nData: number[] = [1, 2, 3, 4, 5, 6, 7];
const sDate: string[] = ["thor", "spiderman", "ironman"];
const nsData: string[] | number[] = [1, 3, 4, 5, 7, 9];
// it will be just a numbers array or strings array not both at same time;

const allData: (number | string | boolean)[] = [1, 2, "Subash Tharu", true];
// it can fit all time types in one array at the same time;

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = "crew";
