## Setting up postgres using docker

- `RUN DOCKER IMAGE`

```js
docker run -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_USER=utkarsh -d -p 5432:5432 postgres
```

- Connection string for this postgres will be

```js
postgresql://utkarsh:mysecretpassword@localhost:5432/utkarsh
```
- `The name of the db is by default same as username`