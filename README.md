# Assessment

This is a repository for a REST API using Node, Express, Typescript, MongoDB and Swagger-UI

### Install packages

```shell
npm i
```

### Setup MongoDB URL

In `src/index.ts`:

```js
const MONGO_URL = ''; // DB URI
```

### Start the app

```shell
npm start
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `start`         | Starts a development instance of the app |


## Swagger-UI is implemented : http://localhost:8080/api-docs

## Enpoints:
### 1. register : http://localhost:8080/auth/register
#### username,email,password must be provided for new user registeration.

### 2. login : http://localhost:8080/auth/register
#### email,password must be provided for log in.

### 3. get all registered users : http://localhost:8080/users/

### 4. delete user by userId : http://localhost:8080/users/delete/{id}

### 5. update username by userId : http://localhost:8080/users/update/{id}
