# First

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run to generate a new directive and skip the test file `ng g d directives/simple-str-1 --skip-tests=true`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

You can add strictPropertyInitialization  to tsconfig.json

This flag performs checks to ensure that each instance property of a class gets initialized in the constructor body, or by a property initializer.

`strictPropertyInitialization": false`

## Deploy to a test server 

https://surge.sh/

run `npm install --global surge`

And then run `surge`
## Install and run JSON Server

You can start JSON Server on other ports with the --port flag:

`npm install -g json-server`

`json-server --watch db.json --port 3004`

## Install both JSON Server and JSON Server Auth :

# NPM
`npm install -g json-server json-server-auth`

# Yarn
`yarn add -g json-server json-server-auth`

Create a db.json file with a users collection :

`{`
 ` "users": []`
`}`

## Start JSON server (with JSON server Auth as middleware) :

if `json-server-auth db.json` is not running insatll 

`npm install express` in case you see this error : `Error: Cannot find module 'express'`

`json-server db.json -m ./node_modules/json-server-auth`

with json-server installed globally and json-server-auth installed locally

https://github.com/jeremyben/json-server-auth

## ng-animate

https://github.com/jiayihu/ng-animate

`npm install ng-animate --save`

## Bootstrap 

if you want to use bootstrap in your project

run `npm i bootstrap`

After installing got to your angular.json file and add the following to your build

 `"architect": {"build": { "options": {"styles": ["node_modules/bootstrap/dist/css/bootstrap.min.css",`

## Generate pipe

run `ng g pipe pipes/filter --skip-tests=true`

## we need to install jwt-decode when we work with json

Run `npm install jwt-decode` or `yarn add jwt-decode` to install the library.

https://www.npmjs.com/package/jwt-decode

## useful angular Libraries

https://valor-software.com/ngx-bootstrap/#/

https://material.angular.io/

https://hackafro.github.io/angular-epic-spinners/