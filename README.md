# Welcome to Baby Twitter

## Cloning Repo

```
  $ git clone https://github.com/guimochila/baby-twitter.git
```

## Install dependencies

```
  $ cd baby-twitter
  $ yarn
```

## Start application

The application is complete dockerized for development. You can start the backend, frontend and database with the command:

```
  $ docker-compose --env-file ./apps/api/.env up
```

## Load sample data

To load data sample, use the command:

```
  $ cd apps/api
  $ yarn run load:data
```

| User              | Password |
| :---------------- | :------: |
| john@example.com  | testing  |
| james@example.com | testing  |

## Delete sample data

To load data sample, use the command:

```
  $ cd apps/api
  $ yarn run delete:data
```

## Tests

You can run the tests for backend using the command:

```
  $ cd apps/api
  $ yarn test
```

## Authentication

The authentication method is by JWT. The application uses **passportjs** for modular authentication, which accepts different strategies for authentication in the future if needed.
