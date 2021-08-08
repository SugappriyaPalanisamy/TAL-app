# Monthly premium calcualtor

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0, bootstrap v5.0, Typescript 4.3.5, HTML5 and SCSS 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Added 5  test cases for the app
1. should create the app
2. should have as title 'Monthly premium calcualtor
3. form invalid when empty
4. name field validity
5. calculate premium amount if form is valid

## Features

1. App layout is build with Responsiveness and Cross-Browser Compatibility by using bootstrap
2. Datepicker is pluged in for Date of birth field
3. Age is getting calucalted based DOB value
4. Added required and in valid validation for all the fields in the form
5. Death premium amount is calucalted as formula provided(Death Premium = (Death Cover amount * Occupation Rating Factor * Age) /1000 * 12)
6. Currency pipe is used to display the value in currency format
7. Added 'Reset' button to clear the form fields
9. Created a model object to save values using API/Angualr services if required
8. Two way binding is used to bind the model values if required



