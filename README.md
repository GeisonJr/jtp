<p align="center">
  <a href="https://geison.dev/">
    <img width="100" src="https://geison.dev/assets/icons/logo.svg" alt="Logo" />
  </a>
</p>

<h1 align="center">
	JTP (JSON Transfer Protocol) Library
</h1>
<div align="center">

Easy to use, fast and lightweight library for Node.js.

</div>

<div align="center">

[![CI](https://github.com/GeisonJr/jtp/actions/workflows/ci.yaml/badge.svg)](https://github.com/GeisonJr/jtp/actions/workflows/ci.yaml)
[![CD](https://github.com/GeisonJr/jtp/actions/workflows/cd.yaml/badge.svg)](https://github.com/GeisonJr/jtp/actions/workflows/cd.yaml)
[![LICENSE](https://img.shields.io/github/license/geisonjr/jtp?style=flat)](https://github.com/GeisonJr/jtp/blob/main/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@geisonjr/jtp?style=flat)](https://npmjs.com/package/@geisonjr/jtp)
[![NPM downloads](https://img.shields.io/npm/dt/@geisonjr/jtp?style=flat)](https://npmjs.com/package/@geisonjr/jtp)

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
