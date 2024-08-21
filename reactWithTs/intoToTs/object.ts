interface Object1{
          name:string,
          age:number,
          email:string,
          gender?: string  // Optional 
}

const obj:Object1 = {
          name: "Subash Tharu",
          age: 23,
          email: "subashtharu.info@gmail.com"
}


interface UserObject{

}

let arr: UserObject[] = [];
const ob:UserObject = {};
arr.push(ob);