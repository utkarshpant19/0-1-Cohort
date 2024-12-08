
```js
npx prisma init
```

# Relationships in Prisma

- `Prisma keeps the record of changes in the database schema`

## `Create a users and todos table model`

```prisma
    model Users {
        id Int @id @default(autoIncrement())
        username String @unique
        email String @unique
        firstName String
        lastName String
}

// Todo's table model

    model Todo {
        id Int @id @default(autoIncrement())
        title String
        description String
        isDone Boolean @default(false)
        user_id Int
    }
```

- Run prisma migration command

```cmd
npx prisma migrate dev --name init_todo_schema
```

- Auto-generate Prisma client

```js
npx prisma generate
```

## Complile and Run Typescript File
```ts
npx ts-node src/index.ts

```

