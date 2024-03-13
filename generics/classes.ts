interface Database {
  connection: string;
  username: string;
  password: string;
}

function getConnection<T, U extends Database>(conn: T, details: U): object {
  return {
          conn,
          details
  }
}
getConnection("!23123", {connection:"123", username:"123", password: "13"})