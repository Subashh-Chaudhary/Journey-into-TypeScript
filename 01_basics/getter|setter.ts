class User {
  private password: string = "1234@123";
  protected userId: number = 122342;
  constructor(public name: string, public email: string) {
    this.name = name;
    this.email = email;
  }

  get getAppleEmail(): string {
    return `Apple${this.email}`;
  }

  get getPassword(): string {
    return this.password;
  }

  set setPassword(pass: string) {
    this.password = "fancyword123";
  }
  // getter | setter are designed so that any private method can exposed outside with some additional logic|restrictions.
}

class SubUser extends User {
  isFamily: boolean = false;
  changePassword() {
    // this.password = "namnam";
    this.userId = 234;

    // private => not allowed to set as well as access directly but get access and set values through setter | getter && only use property within the class.
    // protected => not allowed to set as well as access directly but get access and set values through setter | getter && can use property within class and extende class.
  }
}

export {};
