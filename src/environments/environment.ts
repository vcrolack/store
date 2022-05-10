// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url_api: 'http://platzi-store.herokuapp.com/products/',
  firebase: {
    apiKey: "AIzaSyCCYsO_StZ_rkyRQn3npvstOM45Vxn5wAA",
    authDomain: "platzi-store-1cde9.firebaseapp.com",
    projectId: "platzi-store-1cde9",
    storageBucket: "platzi-store-1cde9.appspot.com",
    messagingSenderId: "124191184174",
    appId: "1:124191184174:web:7aa25fd88e52f8550396bf"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
