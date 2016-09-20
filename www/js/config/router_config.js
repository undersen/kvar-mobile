'use strict';

(function(){
  this.app.config(function($stateProvider,$urlRouterProvider, $httpProvider){

    $stateProvider.state("/",{
      cache:true,
      url: "/",
      templateUrl: "templates/splash.html",
      controller: "SplashController"
    });

    

  });
});
