# RS School REST service

## Running application with docker

1. run docker
2. change directory to project's root
3. ```docker-compose up --build``` OR ```docker-compose build``` + ```docker-compose up```

After starting the app on port (8080 as default) you can open
in your browser OpenAPI documentation by typing ``http://localhost:8080/doc/``

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm start
```

After starting the app on port (8080 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:8080/doc/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

## Compare Express and Fastify

### Express
-- | #1 | #2 
--- | --- | --- 
Mean | [response/sec] | 206.75
Response time (msec) | [min, max, median, p95, p99] | 1, 5312, 6, 4123.5, 5071
Scenario counts | [amount (%)]	 | 600 (100%)
Success | [ratio] | 100.00%
Codes | [code:count] | 200: 1198, 201: 600, 204: 477, 404: 662, 500: 64

### Fastify
-- | #1 | #2
--- | --- | --- 
Mean | [response/sec] | 192.8
Response time (msec) | [min, max, median, p95, p99] | 1, 4893, 3, 3978, 4701.5
Scenario counts | [amount (%)]	 | 600 (100%)
Success | [ratio] | 100.00%
Codes | [code:count] | 200: 1205, 201: 600, 204: 494, 404: 638, 500: 63

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging
