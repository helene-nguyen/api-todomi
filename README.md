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
- MongoDB for testing adapter)

## Folder structure

```
├── package-lock.json
├── package.json
├── README.md
├── restClient.http
├── src
|  ├── app
|  |  ├── adapters
|  |  |  ├── primary.driver
|  |  |  |  ├── controllers
|  |  |  |  |  ├── article.ts
|  |  |  |  |  ├── coreController.ts
|  |  |  |  |  └── main.ts
|  |  |  |  └── routes
|  |  |  |     ├── article.ts
|  |  |  |     ├── index.ts
|  |  |  |     └── main.ts
|  |  |  └── secondary.driven
|  |  |     ├── database
|  |  |     |  ├── mongodb.ts
|  |  |     |  └── postgresql.ts
|  |  |     ├── repositories
|  |  |     |  ├── articleRepository.ts
|  |  |     |  ├── data
|  |  |     |  |  └── migration.sql
|  |  |     |  ├── mongo.datamappers
|  |  |     |  |  ├── article.ts
|  |  |     |  |  └── coreDatamapper.ts
|  |  |     |  └── pg.datamappers
|  |  |     |     ├── article.ts
|  |  |     |     └── coreDatamapper.ts
|  |  |     └── swagger
|  |  ├── core
|  |  |  ├── gateways
|  |  |  |  ├── interfaces
|  |  |  |  |  └── articleInterface.ts
|  |  |  |  ├── middlewares
|  |  |  |  ├── schema
|  |  |  |  ├── services
|  |  |  |  |  ├── errorHandler.ts
|  |  |  |  |  └── errorLoggerHandler.ts
|  |  |  |  └── utils
|  |  |  |     └── formattedDate.ts
|  |  |  ├── models
|  |  |  |  ├── articleModel.ts
|  |  |  |  └── coreModel.ts
|  |  |  └── use-cases
|  |  |     └── articleCRUD.ts
|  |  └── Types
|  |     ├── custom.ts
|  |     └── express
|  |        └── index.d.ts
|  ├── index.ts
|  └── __tests__
|     └── article.test.ts
├── tsconfig.json
└── __docs__
   ├── media
   |  └── test.png
   └── test-jest.md
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

- Training [Wealcome](https://wealcomecompany.com/) with [Michaël Azerhad](https://www.linkedin.com/in/%E2%9A%A1%EF%B8%8Fmicha%C3%ABl-azerhad-9058a044/)
- Thanks to [Alistair Cockburn](https://github.com/totheralistair/SmallerWebHexagon) for taking time to help me and let me redraw the diagram :)