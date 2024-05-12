## `Things to Cover in Week -03`:

- `Authentication`
- `Middlewares`
- `Global Catches`
- `Zod`

## How to handle Prechecks when a request hits the url

### Bad way: Writing all the logic inside the handler function

```javascript
app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyCount = req.query.kidneyCount;

  if (username != "Utkarsh" && password != "pass") {
    return res.status(401).json({ msg: "User does not exists" });
  }

  if (kidneyCount != 1 && kidneyCount != 2) {
    return res.status(411).json({ msg: "Wrong Inputs" });
  }

  // Check user details

  res.json({ msg: "Heart is healthy" });
});

app.put("/replace-kidney", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyCount = req.query.kidneyCount;

  if (username != "Utkarsh" && password != "pass") {
    return res.status(401).json({ msg: "User does not exists" });
  }

  if (kidneyCount != 1 && kidneyCount != 2) {
    return res.status(411).json({ msg: "Wrong Inputs" });
  }

  // Check user details

  res.json({ msg: "Heart is healthy" });
});

app.listen(PORT, () => {
  console.log("Server is listening on port 3006");
});
```

- Breaks DRY Principle

## Correct way: `Using Middlewares`

- Middleware function takes 3 arguments: `request`, `response` , `next() function`

```javascript
function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "Utkarsh" && password != "pass") {
    return res.status(401).json({ msg: "User does not exists" });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyCount = req.query.kidneyCount;
  if (kidneyCount != 1 && kidneyCount != 2) {
    return res.status(411).json({ msg: "Wrong Inputs" });
  } else {
    next();
  }
}

// userAuth, kidneyCheck are callback functions called Middlewares which takes request, response and next() as input
// Sits in middle of url and request-Response handler
app.get(
  "/health-checkup",
  userMiddleware,
  kidneyMiddleware,
  function (req, res) {
    res.json({ msg: "Kidney is healthy" });
  }
);
```

- If we want to pass a middleware on every subsequest request, we use `app.use(middleware Fn)`

```javascript
app.use(express.json()); // express.json() returns a function and internally calls next()
```

- Apart from precheck , there is another class of middleware, that are `Error Handling` Middlewares
  that take 4 arguments instead of 3  `(err, req, res, next)`.

```javascript
app.use(function (err, req, res, next) {
  res.json({ msg: "Oops! Something went wrong" });
});
```

## How to do better Input Validation (`ZOD`)

