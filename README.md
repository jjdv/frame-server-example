# [Frame Server](https://www.npmjs.com/package/frame-server) Implementation Example

## Installation
Assuming you have [Node.js](https://nodejs.org/en/) installed, which includes npm, please copy this repository to a dedicated project folder. Start a terminal, change the working directory to the project folder and run:
```
npm install
```
Stay in the project main directory for all the following commands.

## Server start
To start the [Frame Server](https://www.npmjs.com/package/frame-server) hit in your terminal:
```
npm start
```
After the server started, you can see how it works in your browser under: <http://localhost:3000>.

## Server start with automatic server reload
If you plan to play with the server configuration file and the site middleware files it's more conveniet to enable automatic server reload after file change. To achive that start the server with the command:
```
npm run nodemon
```
Please note that the nodemon service, in it's default configuration, restarts the server only after changes of javascript files. Consult [nodemon documentation](https://github.com/remy/nodemon#nodemon) for more tailored configuration.

## Server configuration
Check the server configuration file:
```
./server/server.config.js
```
Feel free to play with it to test different configuration options.

## Site middlewares
The files related to the site middlewares can be found in two folders:
```
./server/middlewares
./server/views          // holding middleware complemetary pug files
```
You can play with them or write your own to get more familiar with the middleware implemetation.

## Licence
MIT