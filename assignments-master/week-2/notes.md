## Node JS

- Node JS is a Javascript Runtime to create `HTTP Servers`.

## What is an HTTP Server ?

- `HyperText Transfer Protocol`
  - It is a protocol that is defined for machines to communicate.
  - Specifically for websites, it is the most common way for your website's to talk to it's backend.

  `HTTP Server`: Some code that follows the HTTP Protocol, and is able to communicate with clients (browser/ Client apps),
  - Similar to call app in phone which lets you communicate with friends

  ## Things `Client` needs to worry about when sending a request to `server`:
  `https://chat.openai.com/backend-api/conversation`
  - Protocol(HTTP/HTTPS)
  - Address(URL/IP/Port)
  - Route
  - Headers, Body, Query Params (`Cookies`)
  - Method (GET, POST, PUT, DELETE)
  

  ## Things `Server` needs to worry about
  - Response Headers 
  - Response Body
  - Status Codes

  ## Things happen on the server after the request is received

  - You get the inputs
  - Do some logic on the input, calculate the output
  - Return the output body, headers and status code.
