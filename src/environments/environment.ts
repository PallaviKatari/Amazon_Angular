// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  // userapi:"http://localhost:3000/users",
  cartapi:"http://localhost:3000/cart",
  postsapi:"http://localhost:3000/posts",
  //postsapi:"https://fake-server-app-angular-amazon.herokuapp.com/posts",
  //userapi:"https://fake-server-app-angular-amazon.herokuapp.com/users",
  //userapi:"https://localhost:7126/api/Registrations"//.NET CORE API
  userapi:"https://localhost:44300/api/registrations2" // .NET MVC API
  //userapi:"http://localhost:3000/users",
  //cartapi:"https://fake-server-app-angular-amazon.herokuapp.com/cart"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
