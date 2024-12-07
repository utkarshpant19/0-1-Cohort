## CREATE TABLE users
```postgresql
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)
```

## INSERT INTO users 

```postgresql
INSERT INTO users(
username, email, password
) VALUES (
    'utkarsh_pant',
    'utkarsh@gmail.com',
    'password@123
)

```

## RELATIONSHIPS

- `Storing a users address / addresses, we can't store it in a single table.`

- Create an addresses table with user_id as foreign key

```postgres
CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL, /* Address cannot exist without user hence not null */
    street VARCHAR(250) NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id) OND DELETE CASCADE
    /*
    There are two was to define a foregin key
    1) ON DELETE CASCASE: If a user gets deleted, then delete the corresponding addresses of that user from Addresses table as well

    2) ON DELETE RESTRICT: Postgres won't let you delete a user ,if that user_id is being referenced inside addresses table

    */
);
```

## Joining two tables,
- Show the users with their addresses

```postgres
SELECT u.id, u.username, a.street, a.city, a.country FROM users a JOIN addresses a ON u.id = a.user_id
```