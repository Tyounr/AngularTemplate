# Angular project template

This application is a work in progress to become the perfect template of whatever your Angular web application needs to be. It includes PWA and Angular Material. The styling used is SCSS, but it's explained down here how you could change this.

## Frontend
* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

### Built With

* [Visual Studio Code](https://code.visualstudio.com/Download) - Used for Angular - Frontend

### First time starting up

* Execute the `npm install` command, this wil install all the dependencies and create the `node_modules` folder.

### Development server

Run `ng serve -o` for a dev server. The `-o` will automatically open the browser. The app will automatically reload if you change any of the source files. Errors can be seen in the console.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build --prod` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. You can view the working version of the build on `http-server -p 8080 -c-1 .\dist\your-projectName\`. This is only necessary to test the PWA or to build your project when you want to put it on a hosting.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## FAQ

### How to use Angular Material?

There's an AngularMaterialModule added. It imports and exports all the components from the Angular Material dependency. Whenever you want to use Angular Material, you can simply add `AngularMaterialModule` to the `imports` array from the module that will be using Angular Material. In this template it's added to `app.module.ts`.

### How to change to CSS / SASS / LESS / Stylus?

This template comes with my personal prefrence of SCSS. However, you can change it to whatever styling you'd like by executing the following steps.
https://sass-lang.com/documentation/syntax#scss
https://sass-lang.com/documentation/
http://lesscss.org/
https://stylus-lang.com/

### How to get my PWA up and running?

The PWA dependency is already added to this project. However, if you're stuck somewhere, then check [this guide on alligator.io](https://alligator.io/angular/angular-pwa/).

### How to get my authentication to work?

### How do I put my project up on Github pages?

## Useful extra's

* http://botmap.surge.sh/ to crawl pages on the SPA

## Useful extensions for Visual Studio Code

* **TODO Tree** by *Name* - Useful to set TODOs all over your project and locat them easily

## Authors

* **Your name** - *Frontend developer* - [Tyounr](https://github.com/Tyounr)

## License

Not avalaible yet.

## Acknowledgments

* **Ruben Szekér** - [tyounr](https://github.com/tyounr) - Created this template
