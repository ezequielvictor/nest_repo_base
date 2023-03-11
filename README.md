## Description

Personal base repository to use NestJS

## Installation

```bash
$ npm install
```

## Running the app

- Create your own .env file, we have an example published.
- run the following command to create our containers.

```bash
$ docker-compose up
```

```bash
# development (make sure you are running the DB container and using localhost:3306 as your DB URL)
$ npm run start

# watch mode (make sure you are running the DB container and using localhost:3306 as your DB URL)
$ npm run start:dev

# production mode (DB URL = mysql:3306)
$ docker-compose up
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
