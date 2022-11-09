# Todomi API

## Introduction

Simple API base to help with test new framework

## Technologies

Back-end

- NodeJS
- Express framework
- Typescript
- Jest & Supertest
- Swagger Express UI
- Git versioning

Database

- PostgreSQL
- pgAdmin4 (GUI)
- Sqitch versioning

## Folder structure

```
├── dist
|  ├── index.js
|  └── index.js.map
├── logs
├── package.json
├── README.md
├── restClient.http
├── src
|  ├── app
|  |  ├── adapters
|  |  |  ├── primary.driver
|  |  |  |  ├── controllers
|  |  |  |  └── routes
|  |  |  └── secondary.driven
|  |  |     ├── database
|  |  |     ├── repositories
|  |  |     |  ├── data
|  |  |     |  └── datamappers
|  |  |     └── swagger
|  |  ├── hexagon
|  |  |  ├── gateways
|  |  |  |  ├── middlewares
|  |  |  |  ├── repositories
|  |  |  |  |  ├── article
|  |  |  |  |  ├── category
|  |  |  |  |  └── user
|  |  |  |  ├── schema
|  |  |  |  ├── services
|  |  |  |  └── utils
|  |  |  ├── models
|  |  |  |  ├── article
|  |  |  |  ├── category
|  |  |  |  └── user
|  |  |  └── use-cases
|  |  |     ├── article
|  |  |     ├── category
|  |  |     └── user
|  |  └── Types
|  ├── index.ts
|  └── __test__
└── tsconfig.json
```

## Steps

Initialize

```sh
npm init
```

Install dependencies

```sh
npm i
#or
npm install
```

Launch the server in development environment

```sh
npm run dev
```

## Todolist

- Check for creating a blocklist for token ?

---

### Sources
