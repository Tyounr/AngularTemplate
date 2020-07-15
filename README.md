# Angular project template

This application is a work in progress to become the perfect template of whatever the Angular web application needs to be. Standard styling (and how to change it), used dependencies and other dependencies that might prove themselves useful can all be found in this `README`.

## Frontend

Since Angular is a frontend framework, it will only contain dependencies, code and information for frontend development.

* This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

### Built With

* [Visual Studio Code](https://code.visualstudio.com/Download) - Used for Angular - Frontend

### First time starting up

**NOTE**: For a Windows environment, make sure to execute the `Set-ExecutionPolicy ByPass` in Powershell as administrator on your device.

* Make sure that you have [Node.JS](https://nodejs.org/en/download/) installed.
* For some packages it might be necessary to have [Git](https://git-scm.com/downloads) installed.
* Install the [Angular CLI](https://cli.angular.io/) with the `npm i -g @angular/cli`.
* Execute the `npm install` command, this wil install all the dependencies and create the `node_modules` folder.
* Run `ng serve -o` for a dev server. The `-o` will automatically open the browser. The app will automatically reload if you change any of the source files. Errors can be seen in the console.

### Build

Run `ng build --prod` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. You can view the working version of the build on `http-server -p 8080 -c-1 .\dist\your-projectName\`. This is only necessary to test the [PWA](https://angular.io/guide/service-worker-getting-started) or to build your project when you want to put it on a hosting.

**NOTE**: It's not useful to use the `--watch=true` flag for the build command because this is not compatible with [PWA](https://angular.io/guide/service-worker-getting-started).

### Running tests

#### Unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### End-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Dependencies that are in this project

* [@angular/material](https://material.angular.io/guide/getting-started) for easier UI creation
* [@angular/google-maps](https://github.com/angular/components/tree/master/src/google-maps), from [Angular Components team](https://github.com/angular/components), to easier work with the [Google Maps API](https://cloud.google.com/maps-platform/).
* [@angular/youtube-player](https://www.npmjs.com/package/@angular/youtube-player), from [Angular Components team](https://github.com/angular/components), to easier work with the [YouTube player API](https://developers.google.com/youtube/iframe_api_reference).
* [ngx-meta](https://www.npmjs.com/package/@ngx-meta/core) to easier implement SEO support in your SPA.

#### Other dependencies that might be useful to add for your project

* [angular-epic-spinners](https://github.com/hackafro/angular-epic-spinners) to have animated loaders.
* [AngularFire](https://www.npmjs.com/package/@angular/fire) to work with [Firebase](https://firebase.google.com/) in Angular.
* [apollo-angular](https://www.apollographql.com/docs/angular/) to easily work with [GraphQL](https://graphql.org/).
* [Cloudinary](https://cloudinary.com/documentation/cloudinary_get_started) is a SaaS for managing media assets.
* [ng2-file-upload](https://github.com/valor-software/ng2-file-upload) to easier work with file uploading.
* [ng2-pdf-viewer](https://www.npmjs.com/package/ng2-pdf-viewer) to visualize PDFs easily and user friendly.
* [ng-bootstrap](https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap) to work with bootstrap inside of Angular.
* [ngx-auth](https://www.npmjs.com/package/ngx-auth) to easily work with authentication.
* [ngx-charts](https://github.com/swimlane/ngx-charts) to easily create charts.
* [ngx-cache](https://github.com/fulls1z3/ngx-cache) to easier implement caching in a SPA.
* [ngx-moment](https://github.com/urish/ngx-moment) to easier manipulate time using pipes.
* [ngx-pipes](https://github.com/danrevah/ngx-pipes) adds more pipes.
* [ngx-translate](https://www.npmjs.com/package/@ngx-translate/core) to create a multilangual SPA.

### Best practices to keep in mind whils programming in Angular

A very detailed, up-to-date guide on how to program in Angular can be found in the [Angular offical coding style guide](https://angular.io/guide/styleguide).

* "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live." - Woods
* Make use of the Angular CLI.
* Avoid comments in code ﬁles.
* Make correct use of the RxJS library.
* Use path aliases for the imports.
* Avoid the ’any’-datatype within TypeScript programming
* Do follow a pattern that describes the symbol’s feature then its type. The recommended pattern is `feature.type.ts`.
* Separate ﬁle names with dots and dashes
* Use dashed-case or kebab-case for naming the element selectors of components.
* Unit test ﬁles should contain the `spec`-sufﬁx in the test ﬁles.
* End-to-end test ﬁles should use the `e2e`-sufﬁx instead. 
* Use consistent names for services.
* Be consistent with the ﬁle structure conventions.
* Apply the SRP (Single Responsibility Principle) throughout a project.
* Deﬁne small functions (no more than 75 lines of code).
* Directive (components and other directives) selectors should be lowercase and have a custom preﬁx that identiﬁes the feature area of the application.
* Pipe names should use PascalCase.
* Angular’s design is made for one asset per ﬁle.
* Every ﬁle that is written by the team goes under the `src`-folder and every other script that comes from a third party should be stored in another folder.
* Do extract templates and styles into a separate ﬁle, when more than 3 lines.
* Make use of the `@Output`- and `@Input`-decorators for properties of a component.
* Do not add the `on` preﬁx for output properties. 
* Place members in a consistent sequence.
* Delegate complex component logic to services.
* Respect the LIFT design principle .
* * Locate code quickly.
* * Identify the code.
* * Keep the Flattest structure.
* * Try to be DRY (Don't Repeat Yourself).

## FAQ

### How to use Angular Material in this template?

There's an `AngularMaterialModule` added. It imports and exports all the components from the [Angular Material](https://material.angular.io/) dependency. Whenever you want to use Angular Material, you can simply add `AngularMaterialModule` to the `imports` array from the module that will be using Angular Material. In this template it's added to `app.module.ts`.

### How to change to CSS / SASS / LESS / Stylus?

This template comes with my personal prefrence of SCSS. However, you can change it to whatever styling you'd like by executing the following steps.
https://sass-lang.com/documentation/syntax#scss
https://sass-lang.com/documentation/
http://lesscss.org/
https://stylus-lang.com/

### How to get my PWA up and running?

The PWA dependency is already added to this project. However, if you're stuck somewhere, then check [this guide on alligator.io](https://alligator.io/angular/angular-pwa/).

### How to get my authentication to work?

### How do I put my project on Github pages?

### How do I put my project on Netlify?

This guide is based on the [Getting started guide from Netlify CLI](https://docs.netlify.com/cli/get-started/).

* First of all, execute the `npm i netlify-cli -g` commando to install the [Netlify CLI](https://docs.netlify.com/cli/get-started/).
* Execute the command ``netlify deploy --dir="dist/{the project folder's name}" --prod` to put the Angular website online.
* * The first time executing this command you'll have to authorize the [Netlify CLI](https://docs.netlify.com/cli/get-started/) by logging in in your standard brower.
* * Nextly you'll have to link the project to a site on netlify and assign a team, as told by the CLI.
* * Choose a site name.
* * The SPA will now be put online (mosly) for testing purposes. However, it is also possible to have put the SPA online this way.

**NOTE**: The SPA's version that is put online is from the last `ng build`.

## Useful extra's

* [Angular Cheat sheet](https://angular.io/guide/cheatsheet)
* [Angular resources overview](https://angular.io/resources?category=development) to get a full overview of most, well-supported resources that can be used with Angular.
* [Augury](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd) to easily debug the Angular SPA.
* [botmap.surge.sh](http://botmap.surge.sh/) to crawl pages ofe the SPA (Single Page Application).
* [Flexbox Cheat sheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Notepad++](https://notepad.plus/) is a useful notepad that adds more functions over the standard notepad on your Windows device.

## Useful extensions for Visual Studio Code

* **Angular Snippets (Version 9)** by *John Papa* - Allows you to use snippets so that you can program faster.
* **Prettier** by *Prettier* - Useful to format documents whilst coding.
* **TODO Tree** by *Gruntfuggly* - Useful to set TODOs all over the project and locate them easily.

## Authors

* **Ruben Szekér** - *Frontend developer* - [Tyounr](https://github.com/Tyounr)

## License

Not avalaible yet.

## Acknowledgments

* **Ruben Szekér** - [tyounr](https://github.com/tyounr) - Created this template
