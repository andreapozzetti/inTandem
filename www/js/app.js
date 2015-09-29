// Ionic Starter App

window.ionic.Platform.ready(function() {
    angular.bootstrap(document, ['starter']);
});


angular.module('starter', ['ionic', 'ngCordova', 'ngIOS9UIWebViewPatch', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }

    setTimeout(function() {
      //navigator.splashscreen.hide();
    }, 100);

    /* ANALITICS */

    /*
    var analytics = navigator.analytics;
    analytics.setTrackingId('UA-67938423-1');
    analytics.enableAdvertisingIdCollection(function(success){
      console.log('Success enabling demographics');
    }, function(error){
      console.log('error enabling demographics');
    });
    analytics.setDispatchInterval(2);
    */

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'AppCtrl'
  })

  .state('app.intro', {
    url: '/intro',
    cache: false,
    views: {
      'intro': {
        templateUrl: 'templates/intro.html',
        controller: 'IntroCtrl'
      }
    }
  })

  .state('app.scanner', {
    url: '/scanner',
    views: {
      'tab-scanner': {
        templateUrl: 'templates/tab-scanner.html',
        controller: 'ScannerCtrl'
      }
    }
  })

  .state('app.login', {
      url: '/login',
      views: {
        'tab-login': {
          templateUrl: 'templates/tab-login.html',
          controller: 'LoginCtrl'
        }
      }
  })

  .state('app.congratulation', {
      url: '/congratulation',
      views: {
        'tab-congratulation': {
          templateUrl: 'templates/tab-congratulation.html',
          controller: 'CongratulationCtrl'
        }
      }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/intro');

});
