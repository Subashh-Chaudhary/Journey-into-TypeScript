const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: number | boolean): number | boolean {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}
identityThree(6);

function identityFour<T>(val: T): T {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}
// identityFour<Bottle>({});

function getSearchProducts<T>(product: T[]): T {
  // do some database operation.
  const myIndex = 3;
  return product[myIndex];
}

const getMoreSearchProducts = <T>(product: T[]): T => {
  // do some database operation.
  const myIndex = 4;
  return product[myIndex];
};
export {};
