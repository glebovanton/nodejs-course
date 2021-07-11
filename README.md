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
Requests | [total, rate, throughput] | 65584, 6558.34, 6558.26
Duration | [total, attack, wait] | 10s, 10s, 130.149µs
Latencies | [min, mean, 50, 90, 95, 99, max]	 | 122.225µs, 151.803µs, 147.911µs, 160.265µs, 164.189µs, 194.74µs, 3.094ms
Success | [ratio] | 100.00%
Status Codes | [code:count] | 200:65584

### Fastify
-- | #1 | #2
--- | --- | --- 
Requests | [total, rate, throughput] | 118489, 11848.94, 11848.84
Duration | [total, attack, wait] | 10s, 10s, 80.298µs
Latencies | [min, mean, 50, 90, 95, 99, max] | 63.858µs, 83.763µs, 81.544µs, 88.909µs, 92.922µs, 136.839µs, 8.852ms
Success | [ratio] | 100.00%
Status Codes | [code:count] | 200:118489

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
