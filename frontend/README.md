# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# Step by step development process
   The following steps were followed to create invoice-mine!

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

## Connect To Backend
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


## Login Page
    1.  Generate Component
        1.  Add to routes
        2.  Add ts 
        3.  Add html
            1.  Import Reactive Forms Module
        4.  Add Css
    2.  Add Login Api
        1.  Use json
        2.  Add jsonwebtoken
        3.  Test Using Postman

##  Generate User Service
        1.  Generate User model
        2.  Add User Subject
        3.  Add Login Method   
            1.  Add User Urls
            2.  Generate IUserLogin interface
            3.  Add ngx-toastr
                1.  Import Module
                2.  Import BrowserAnimationsModule
                3.  Add styles in angular.json
            4.  Add to Header
        1. Add Local Storage methods
        2. Add Logout Method
           1. Add to Header 

## Make Components For Login Page
    1. Input Container
    2. Input Validation
    3. Text Input
    4. Default Button

## Connect Login API To MongoDB Atlas
    1. Moving Apis into routers
    2. Create MongoDB Atlas
    3. Create .env file
    4. Install
       1. mongoose
       2. dotenv
       3. bcryptjs
       4. express-async-handler
    5. Connect to MongoDB Atlas
    6. Use MongoDB instead of data.ts in apis

 ## Register User
    1.  Add Register api
    2.  Add Register service method
    3.  Add Register link 
    4.  Add Register Component    

## Checkout Page
    1.  Create Order Model
    2.  Create Checkout Page Component
        1.  Add To Router   
    3.  Add User to User Service 
    4.  Add Cart to Cart Service 
    5.  Create Order Items List Component

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
