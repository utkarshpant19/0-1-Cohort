```
npm install
npm run dev
```

```
npm run deploy
```

## Steps

1. Initialize the backend using hono

```js
npm create hono@latest
```

2.  Initialize empty route handlers
3.  Initialize DB (Prisma)
    - Get aiven URL
    - Get connection pool url (Prisma accelerate)
    - Initialize Prisma in project
    ```js
    npm i prisma
    npx prisma init
    ```
    - Replace `DATABASE_URL` in `.env`
    ```js
    DATABASE_URL = "aiven-url";
    ```
    - REPLACE `DATABASE_URL` in `wrangler.json`
    ```js
    DATABASE_URL = "prisma accelerate connection pool url";
    ```
4.  Initialize the Schema
    ```postgres
    /* User schema */
       model User {
            id String @id @default(uuid())
            email String @unique
            name String?
            password String?
            posts Post[]
                }

    /* Post Schema */

    model Post {
        id String @id @default(uuid())
        title String @unique
        content String
        published Boolean @default(false)
        author User @relation(fields: [authorId], references: [id])
        authorId String
    }
    ```

5. Migrate database

    ```npm
    npx prisma migrate dev --name init_schema  
    ```
6. Generate Prisma Client

    ```js
    npx prisma generate --no-engine
    ```
7. Add Accelerate Extension

    ```js
    npm i prisma@extension-accelerate
    ```
8. Initialize Prisma client

    ```js
    const prisma = new PrismaClient({
        datasourceUrl: env.DATABASE_URL
    }).$extends(withAccelerate())
    ```
