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

// Transactions

type UserAddress = {
  username: string;
  email: string;
  password: string;
  street: string;
  city: string;
  country: string;
};

async function insertUserAndAddress(userAddress: UserAddress) {
  try {
    await client.connect();

    // Start Transction
    await client.query("BEGIN");

    const { username, email, password, street, city, country } = userAddress;

    // Insert into users table

    const insertUserQuery = `
  INSERT INTO users (username, email, password)
  VALUES ($1, $2, $3);
  `;
    const usersRes = await client.query(insertUserQuery, [
      username,
      email,
      password,
    ]);

    // const userId = usersRes.rows[0].id;

    console.log("User result ", usersRes);

    const insertAddQuery = `
  INSERT INTO addresses (user_id, street, city, country)
  VALUES($1, $2, $3);
  `;

    const addResult = await client.query(insertAddQuery, [
      // userId,
      street,
      city,
      country,
    ]);

    console.log("Add result ", addResult);

    // Commit transaction
    await client.query("COMMIT");

    console.log("User and address inserted successfully");
  } catch (err) {
    await client.query("ROLLBACK"); // Roll back the transaction on error
    console.error("Error during transaction, rolled back.", err);
    throw err;
  } finally {
    await client.end(); // Close the client connection
  }
}

insertUserAndAddress({
  username: "tanmay_bhatt",
  email: "tanmay@gmail.com",
  password: "tanmay@123",
  street: "Bandra",
  city: "Mumbai",
  country: "India",
});

// createUsersTable();

// insertIntoTable("roger_federer", "roger@gmail.com", "@123Roger");
// SQL Injection
// insertIntoTable("andy_murray';DELETE FROM users; --", "", "");
