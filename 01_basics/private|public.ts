// access modifier

class User {
  public name: string;
  email: string;
  readonly city: string = "Geruwa";
  private password: string = "1234@123";
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
const user1 = new User("Subash Tharu", "chysubash15963@gmail.com");
user1.city;
// user1.password

// readonly => not allowed to set the value to access it
// private => not allowed to set as well as access directly but get access and set values through setter | getter && only use property within the class.
// protected => not allowed to set as well as access directly but get access and set values through setter | getter && can use property within class and extende class.
// public => default value, allowed to set and access

export {};
