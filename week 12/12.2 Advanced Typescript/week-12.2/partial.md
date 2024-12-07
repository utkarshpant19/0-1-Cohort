## Partial

- `Partial` lets you mark every property of an interface or a Type as optional

```ts
Converts

interface User{
name: string, 
email: string,
age: number
}

To 

interface User {
    name:? string,
    email?: string,
    age?: number
}

```