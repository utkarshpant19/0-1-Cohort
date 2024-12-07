import { Client } from "pg";

const client = new Client({
  connectionString: "postgres://utkarsh:mysecretpassword@localhost/utkarsh",
});

async function createUsersTable() {
  await client.connect();
  const result = await client.query(`
        CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(250) UNIQUE NOT NULL,
        password VARCHAR(250) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        `);

  console.log(result);
}

async function insertIntoTable(
  username: string,
  email: string,
  password: string
) {
  await client.connect();

  // Prone to SQL Injection
  //   const result = await client.query(`
  //         INSERT INTO users (username, email, password)
  //          VALUES ('${username}', '${email}', '${password}');
  //         `);

  //   VALUES ('andy_murray';DELETE FROM users; --', '','')

  // **** Secure to SQL Injection ***************
  const result = await client.query(
    `
    INSERT INTO users(username, email, password)
    VALUES($1, $2, $3) 
    `,
    // $ tells SQL that whatever is passed treat it as a String and not SQL query
    [username, email, password]
  );

  console.log(result);
}

// createUsersTable();

// insertIntoTable("roger_federer", "roger@gmail.com", "@123Roger");
// SQL Injection
// insertIntoTable("andy_murray';DELETE FROM users; --", "", "");
