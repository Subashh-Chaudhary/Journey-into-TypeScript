type User = {
  name: string,
  email: string,
  isActive: boolean,
};

function createUser(user: User):User {
          return {name : "Subash", email : "chysubash15963@gmail.com", isActive : true}
}
createUser({name : "Subash", email : "chysubash15963@gmail.com", isActive : true})

export {}
