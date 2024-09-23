// Write a function to create a users table in db
import { Client } from "pg";

// const client = new Client({
//   connectionString:
//     "postgres://utkarsh-postgres:mysecretpassword@localhost:5432/postgres",
//   // const conString = "postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName";
// });

const client = new Client({
  user: "postgres",
  database: "postgres",
  port: 5432,
  host: "localhost",
  password: "mysecretpassword",
});

async function getUser(email: string) {
  try {
    await client.connect();

    // const SELECT_QUERY = `SELECT * FROM users where email=${email}`; // Prone to SQL injection
    const SELECT_QUERY = `SELECT * FROM users where email= $1`;
    const selRes = await client.query(SELECT_QUERY, [email]);

    if (selRes.rows.length > 0) {
      // console.log("User Found ", selRes.rows[0]);
      return selRes.rows[0];
    } else {
      console.error("No user found with email " + email);
    }
  } catch (err) {
    console.error("Could not connect to db ", err);
  } finally {
    await client.end();
  }
}

getUser("utkarsh@gmail.com").then((user) => {
  console.log("User found ", user);
});

async function createUsersTable() {
  try {
    await client.connect();
    // Create users Table
    const result = await client.query(
      `
         CREATE TABLE users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `
    );
    console.log(result);

    //   const INSERT_QUERY =
    //     "INSERT INTO users (username, email, password) VALUES ('utkarsh_pant', 'utkarsh@gmail.com', 123456)";
    // const result = await client.query(INSERT_QUERY); // This insert query is prone to SQL Injection attack,
    // Dont directly put user entered fields into SQL query

    // const SECURE_INSERT_QUERY =
    //   "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    // const values = ["utkarsh_pant", "utkarsh@gmail.com", 123456];

    // const result = await client.query(SECURE_INSERT_QUERY, values);
    // //   // const result = await client.query(SECURE_INSERT_QUERY, values);

    // console.log("Insertion Success ", result);
    // } catch (err) {
    //   console.error("Error during Insertion");
    // } finally {
    //   await client.end();
    // }
  } catch (err) {
    console.error("Error during insertion ", err);
  } finally {
    await client.end();
  }
}

createUsersTable();
