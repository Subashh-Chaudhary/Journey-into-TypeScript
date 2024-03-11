const user = {
  name: "Subash",
  email: "chysubash15963@gmail.com",
  isActive: false,
};

function createUser({
  name,
  isActive,
}: {
  name: string;
  isActive: boolean;
}): void {
  console.log(
    `name = ${this.name}, isActive = ${this.isActive ? "YES" : "NO"}`
  );
}
createUser(user);

const createCourse = (): { name: string; price: number } => {
  return { name: "reactJs", price: 399 };
};
createCourse();

export {};
