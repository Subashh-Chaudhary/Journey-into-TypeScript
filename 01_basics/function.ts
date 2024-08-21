function addTwo(num: number) {
  return num + 2;
}

addTwo(2);

function toUpper(val: string) {
          return val.toUpperCase();
}

toUpper("Subash");


function signUpUser(name: string, email: string, isPaid: boolean){
          return `Name : ${name}, Email : ${email}`
}

signUpUser("Subash", "chysubash15963@gmail.com", true);


function logInUser(name: string, email: string, isPaid: boolean = true){
          return `Name : ${name}, Email : ${email}`
}

logInUser("Subash", "chysubash15963@gmail.com");













export {}