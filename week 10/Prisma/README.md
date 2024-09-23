# HOW TO USE PRISMA

- Create a schema.prisma file,
```js
npx primsa init
```
- After writing schema.prisma file , we've to write 2 commands

```js
npx prisma migrate dev --name "Name of the migration"
// It will create a migrations folder with transpiled SQL commands written in schema.prisma
```
- Run command for `Autogenerate Clients` 

```js
npx prisma generate // Generate the Clients
```