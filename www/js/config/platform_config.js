'use strict';

(function() {
  this.app.run([$ionicPlatform,function($ionicPlatform){

    $ionicPlatform.ready(function(){

      if(window.cordova && window.cordova.plugins.Keyboard && windows.cordova.plugins) {

      };

      if(window.StatusBar){
        StatusBar.styleDefault();
      }
    });
  }]);
});
