angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $cordovaDevice, $cordovaDialogs, $state, Registration) {
    $scope.device = {};
    $scope.device.deviceId = $cordovaDevice.getUUID();
    $scope.device.devicePlatform = $cordovaDevice.getPlatform();

    if(window.localStorage['premiumUser']){
      $state.go('app.congratulation');
    }

    if(window.localStorage['objectId']){
      console.log('object id already in db');
    }
    else{
      Registration.setDevice($scope.device).then(function(response){
        
        window.localStorage['objectId'] = response.data.objectId;

        var push = PushNotification.init({ "android": {"senderID": "819455808449"},
             "ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );

        push.on('registration', function(data) {
            
            $scope.push = {};
            $scope.push.pushId = data.registrationId;

            Registration.sendPushId(response.data.objectId, $scope.push).then(function(){
              console.log("Push id registered");
            });
        
        });

        push.on('notification', function(data) {
            // data.message,
            // data.title,
            // data.count,
            // data.sound,
            // data.image,
            // data.additionalData
        });

        push.on('error', function(e) {
            console.log('error ' +e);
        });

      });
    }
})

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {

  navigator.analytics.sendAppView('Tour Page: 1', function(){
      //console.log('Page Tour traking');
  }, function(){
      console.log('Page Tour error');
  });

  // Called to navigate to the main app
  $scope.startApp = function() {
     if(window.localStorage['premiumUser']){
      $state.go('app.congratulation');
      }
      else{
        $state.go('app.scanner');
      }
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    
    $scope.pageNumber = parseInt(index)+1;

    navigator.analytics.sendAppView('Tour Page: ' +$scope.pageNumber+ '', function(){
        //console.log('Page Tour traking');
    }, function(){
        console.log('Page Tour error');
    });

    $scope.slideIndex = index;

  };
})

.controller('ScannerCtrl', function($scope, $cordovaDevice, $cordovaDialogs, $cordovaBarcodeScanner, $state, Registration) {

    navigator.analytics.sendAppView('BarCode Scanner Page', function(){
        //console.log('Page Tour traking');
    }, function(){
        console.log('Page BarCode Scanner error');
    });
    
    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
          if(imageData.cancelled){
            console.log("Cancelled -> " + imageData.cancelled);
          }
          else{
            if(imageData.text == "http://www.intandemapp.com/stores.html"){
              if(window.localStorage['code']){
                var code = window.localStorage['code'];
                $state.go('app.login');
              }
              else{
                var code = Math.floor(Math.random() * 9999) + 1000;
                window.localStorage['code'] = code;
                $state.go('app.login');
              }
            }
            else{
                navigator.notification.alert('Invalid QR CODE!');
            }
          }            
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };

})

.controller('LoginCtrl', function($scope, $state, $location, $cordovaFacebook, $ionicLoading, Registration) {

    navigator.analytics.sendAppView('Login Page', function(){
        //console.log('Page Tour traking');
    }, function(){
        console.log('Page Login error');
    });

    $scope.code = window.localStorage['code'];
    $scope.userFacebook = {};
    $scope.user = {};

    $scope.sendUnlockCode = {};
    $scope.sendUnlockCode.code = $scope.code;
    Registration.sendCode(window.localStorage['objectId'], $scope.sendUnlockCode).then(function(resp){
    });

    $scope.facebookLogin = function(){
    $ionicLoading.show({
      template: '<ion-spinner></ion-spinner>'
    }); 
    $cordovaFacebook.login(["public_profile", "email", "user_friends"])
    .then(function (data) {
      $scope.userFacebook.facebookToken = data.authResponse.accessToken;
      $cordovaFacebook.api("me?fields=first_name,last_name,email,picture", ["public_profile", "email", "user_friends"])
      .then(function (data) {
          $scope.userFacebook.deviceData = {};
          $scope.userFacebook.deviceData["___class"] = "Validation";
          $scope.userFacebook.deviceData.objectId = window.localStorage['objectId'];
          $scope.userFacebook.facebookId = data.id;
          $scope.userFacebook.firstname = data.first_name;
          $scope.userFacebook.lastname = data.last_name;
          $scope.userFacebook.email = data.email;
          $scope.userFacebook.picture = data.picture.data.url;
          $scope.userFacebook.verified = true;
          Registration.insertUser($scope.userFacebook).then(function(response){
            if(response.status === 200){
              $ionicLoading.hide();
              window.localStorage['user'] = JSON.stringify($scope.userFacebook);
              window.localStorage['premiumUser'] = true;
              $state.go('app.congratulation');
            }
            else{
              $ionicLoading.hide();
              navigator.notification.alert('An error occurred please try again later');
            }
          });
      }, function (error) {
          $ionicLoading.hide();
          navigator.notification.alert('An error occurred please try again later');
      });
    }, function (error) {
        $ionicLoading.hide();
        navigator.notification.alert('An error occurred please try again later');
    });

    };
    $scope.login = function(data) {
      $scope.user.deviceData = {};
      $scope.user.deviceData["___class"] = "Validation";
      $scope.user.deviceData.objectId = window.localStorage['objectId'];
      $scope.user.firstname = data.firstname;
      $scope.user.lastname = data.lastname;
      $scope.user.email = data.email;
      $scope.user.verified = true;
      Registration.insertUser($scope.user).then(function(response){
        if(response.status === 200){
          window.localStorage['user'] = JSON.stringify($scope.user);
          window.localStorage['premiumUser'] = true;
          $state.go('app.congratulation');
        }
        else{
          navigator.notification.alert('An error occurred please try again later');
        }
      });
    }

})

.controller('CongratulationCtrl', function($scope, $state) {

  navigator.analytics.sendAppView('Congratulation Page', function(){
        //console.log('Page Tour traking');
    }, function(){
        console.log('Page Congratulation error');
  });

  $scope.userData = JSON.parse(window.localStorage['user']);
  $scope.unlookCode = window.localStorage['code'];

  $scope.tour = function(){
    $state.go('app.intro');
  };

})