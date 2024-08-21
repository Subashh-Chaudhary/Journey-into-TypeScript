enum UserRole{
          ADMIN = "admin",
          SELLER = "seller"
}

interface Role{
          role : UserRole,
          email: string | null,
          name ?: string  // name can be optional
}

const userObj:Role = {
          role : UserRole.ADMIN,
          email : "subashtharu.info@gmail.com",
}