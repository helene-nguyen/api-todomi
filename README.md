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
├── logs
|  ├── 2022-11-21.log
|  ├── 2022-11-22.log
|  └── 2022-11-9.log
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
|  |  |     |  ├── article.ts
|  |  |     |  ├── data
|  |  |     |  ├── mongo.datamappers
|  |  |     |  |  ├── article.ts
|  |  |     |  |  └── coreDatamapper.ts
|  |  |     |  └── pg.datamappers
|  |  |     |     ├── article.ts
|  |  |     |     ├── coreDatamapper.ts
|  |  |     |     └── user.ts
|  |  |     └── swagger
|  |  ├── core
|  |  |  ├── gateways
|  |  |  |  ├── middlewares
|  |  |  |  ├── repositories
|  |  |  |  |  ├── articleRepository.ts
|  |  |  |  |  ├── categoryRepository.ts
|  |  |  |  |  └── userRepository.ts
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
|  |  |     └── article
|  |  |        ├── create.ts
|  |  |        └── read.ts
|  |  └── Types
|  |     ├── custom.ts
|  |     └── express
|  |        └── index.d.ts
|  ├── index.ts
|  └── __tests__
|     └── user.test.ts
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
