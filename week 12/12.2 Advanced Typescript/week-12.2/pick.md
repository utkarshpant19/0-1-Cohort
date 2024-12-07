## Pick

- The `Pick` utility type is part of TypeScript's mapped types, which enable you to create new types based on the keys of an existing type. The syntax for Pick is as follows:

```Ts
Pick<Type, Keys>
```
- `Type`: The original type you want to pick properties from
- `Keys`: The keys (property names) you want to pick from the Type, separated by `| (the union operator)`.
