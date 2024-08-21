interface iUser {
          printFunc();
          InputFunc();
}

class Admin{

}

class user extends Admin implements iUser{
          data;
          printFunc() {
              console.log("hello")
          }
          InputFunc() {
              console.log("input")
          }
}