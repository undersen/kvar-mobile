'use strict';

(function() {
  this.app.run(function($ionicPlatform){

    $ionicPlatform.ready(function(){

      if(window.cordova && window.cordova.plugins.Keyboard && windows.cordova.plugins) {

        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);


      };

      if(window.StatusBar){
        StatusBar.styleDefault();
      }
    });
});
});
