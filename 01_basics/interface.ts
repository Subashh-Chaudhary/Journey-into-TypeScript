interface User {
  readonly dbId: number;
  name: string;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

// Reopenning of interface
interface User {
  githubToken?: string;
}

interface Admin extends User {
  role: "admin" | "DA";
}

let newUser: User = {
  dbId: 112,
  name: "Subash Tharu",
  email: "chysubash15963@gmail.com",
  userId: 11102,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "Dashain Offer", off: 40) => {
    return off;
  },
  githubToken: "0012kjjfdjaejrjjjj",
};

newUser.email = "chaudharysubash15963@gmail.com";

export {};

// interface vs type
