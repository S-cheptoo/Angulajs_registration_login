(function () {
    'use strict';
  
    angular
      .module('app')
      .controller('ProfileController',ProfileController);
  
    ProfileController.$inject = ['UserService', '$rootScope','$location','FlashService'];
    function ProfileController(UserService, $rootScope, FlashService) {
      var vm = this;
  
      vm.user = null;
      vm.alertLogout=alertLogout;
  
      initController();
  
      function initController() {
        loadCurrentUser();
      }
  
      function loadCurrentUser() {
        UserService.GetByUsername($rootScope.globals.currentUser.username)
          .then(function (user) {
            vm.user = user;
          });
      }
      function alertLogout(){
        FlashService.Success("You have successfully logged out!", true);
        $location.path('/login');
      }
  
    }
  
  })();
  