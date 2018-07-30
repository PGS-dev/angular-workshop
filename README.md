# Angular 6 Boilerplate application

This is an example application written in Angular 6 with 85% of code coverage in unit tests. The app has 2 modules. UsersModule with list of users. UserModule with CRUD implementation.

The application consists of:
- Firebase noSQL database implementation with angularfire2/firestore module - see [Confluence description page](https://confluence.pgs-soft.com/display/FRON/Spotkanie+4+-+Integracja+z+Firebase).
- Firebase authentication (OAuth implementation) with angularfire2/auth module - see [Confluence description page](https://confluence.pgs-soft.com/display/FRON/Spotkanie+4+-+Integracja+z+Firebase).
- Storybook implementation - see [Confluence description page](https://confluence.pgs-soft.com/pages/viewpage.action?pageId=98740272).
- CRUD with Reactive Forms - see [Confluence description page](https://confluence.pgs-soft.com/pages/viewpage.action?pageId=98740272).
- Lazy Loading implementation - see [Confluence description page](https://confluence.pgs-soft.com/display/FRON/Spotkanie+6+-+Angular+performance).
- Performance adjustments - see [Confluence description page](https://confluence.pgs-soft.com/display/FRON/Spotkanie+6+-+Angular+performance).
- Lots of RXJS examples - see [Confluence description page](https://confluence.pgs-soft.com/pages/viewpage.action?pageId=98730626).
- Redux implementation with NGRX library - Auth State and User Edit State - see [Confluence description page](https://confluence.pgs-soft.com/display/FRON/Spotkanie+7+-+NGRX)
- Additionally tha application takes leverage of Domain Model design pattern for user and users creation.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## Dev & build
Run `ng build  --prod` to generate production version within dist/ directory.

Run `ng serve` to run Webpack dev server.

Run `npm run storybook` to fire Storybook.

Run `ng test --code-coverage` to run Karma server and generate coverage directory.

Use steps described in [Confluece Angular Performance page](https://confluence.pgs-soft.com/display/FRON/Spotkanie+6+-+Angular+performance) to serve optimized production version.
