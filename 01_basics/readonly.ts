type Users = {
  readonly _id: string,
  name: string,
  email: string,
  isActive: boolean,
  readonly creditCardDetail?: number, // Optional "?"
};

let user1: Users = {
  _id: "001s",
  name: "Subash",
  email: "chysubash15963@gmail.com",
  isActive: false,
};

user1.name = "Subash Tharu";
// user1._id = "00993"

type cardNumbers = {
  cardNumber: string
};

type cardDate = {
  cardDate: string
};

type cardDetails = cardNumbers &
  cardDate & {
    cvv: number
  };
