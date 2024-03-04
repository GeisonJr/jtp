<p align="center">
  <a href="https://geison.dev/">
    <img width="100" src="https://geison.dev/assets/icons/logo.svg" alt="Logo" />
  </a>
</p>

<h1 align="center">
	JTP (JSON Transfer Protocol)
</h1>
<div align="center">

Easy to use, fast and lightweight library for Node.js.

[![LICENSE](https://img.shields.io/github/license/geisonjr/teste?style=flat)](https://github.com/GeisonJr/teste/blob/main/LICENSE)

</div>

> :construction: This project is under development and is not yet ready for use.

## 🌱 Overview

JTP is a protocol for transferring data between systems. It facilitates communication between systems using JSON (JavaScript Object Notation) as the data format and relies on the TCP/IP protocol for data transfer.

### HTTP Example

#### Data as string

```http
POST /api/test HTTP/1.1
Host: localhost:3000
Content-Type: text/plain

Hello World!!
```

#### Data as object

```http
POST /api/test HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
  "name": "Geison",
  "age": 23
}
```

### JTP Example

#### Data as string

```json
{
  "head": {
    "host": "localhost:3000" // The domain name or IP address of the target server.
    "method": "CREATE" // Follow the CRUD operations
    "path": "/api/test" // The path of the endpoint
  }
  "body": {
    "type": "string" // The type of the body
    "data": "Hello World!!" // The data of the body
  }
}
```

#### Data as object

```json
{
  "head": {
    "host": "localhost:3000",
    "method": "CREATE",
    "path": "/api/test"
  }
  "body": {
    "type": "object",
    "data": {
      "name": "Geison",
      "age": 23
    }
  }
}
```
