# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Step by step development process

## Add Header
   1. Generate Component
   2. Add Html
   3. Add CSS

## List Clothes
    1. Create Cloth model
    2. Create data.ts
       1. Add sample foods
    3. Add images to assets
    4. Create Cloth service
    5. Create Home component
       1. Add ts
       2. Add html
       3. Add css

## Search
   1. Add method to Cloth service
   2. Add search route
   3. Show search result in Home component
   4. Generate search component
      1. Add to home component
      2. Add ts
      3. Add html
      4. Add css

 ## Cloth Page
   1. Add method to cloth service
   2. Generate Cloth Page component
      1. Add Route
      2. Add ts
      3. Add html
      4. Add css
     
## Cart Page
   1. Create CartItem Model
   2. Create Cart Model
   3. Generate Cart service
   4. Add to Cart Button in Cloth Page
   5. Generate Cart page component
      1. Add Route
      2. Add ts
      3. Add html
      4. Add css
     
## Not Found
    1. Generate Component
       a. Add ts
       b. Add html
       c. Add css
    2. Add To Pages
       a. Home Page
       b. Cloth Page
       c. Cart Page

# Connect To Backend
    1.  Create backend folder
    2.  npm init
    3.  npm install typescript
    4.  Create tsconfig.json
    5.  Create .gitignore
    6.  Copy data.ts to backend/src
    7.  npm install express cors
    8.  Create server.ts
        1. install @types
        2. Add Apis
    9.  npm install nodemon ts-node --save-dev
    10. Add urs.ts to frontend
    11. Add HttpClient module
    12. Update cloth service


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
