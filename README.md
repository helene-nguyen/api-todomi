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
|  └── __tests__
|     ├── user.test.js
|     └── user.test.js.map
├── jest.config.js
├── logs
├── package-lock.json
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
|  |  |     |  ├── datamappers
|  |  |     |  └── userRepository.ts
|  |  |     └── swagger
|  |  ├── gateways
|  |  |  ├── middlewares
|  |  |  ├── schema
|  |  |  ├── services
|  |  |  |  ├── errorHandler.ts
|  |  |  |  └── errorLoggerHandler.ts
|  |  |  └── utils
|  |  |     └── formattedDate.ts
|  |  ├── models
|  |  |  └── userModel.ts
|  |  ├── Types
|  |  |  ├── custom.ts
|  |  |  ├── express
|  |  |  |  └── index.d.ts
|  |  |  └── repositories
|  |  |     ├── articleRepository.ts
|  |  |     ├── categoryRepository.ts
|  |  |     └── userRepository.ts
|  |  └── use-cases
|  └── index.ts
├── tsconfig.json
├── __docs__
|  ├── media
|  |  └── test.png
|  └── test-jest.md
└── __tests__
   └── user.test.ts
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
