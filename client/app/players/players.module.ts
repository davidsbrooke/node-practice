namespace app {
  angular.module('app').config((
    //state provider defines the location of a pages location with the project and lets us set the url.
    $stateProvider: ng.ui.IStateProvider
  ) => {
    $stateProvider.state('player main', {
      url: '/player',
      templateUrl: '/client/app/players/main/main.jade',
      // when we set a controller as vm it allows us to use the string vm instead of the controller name, which is much longer
      controller: 'PlayerMainController as vm'
    }).state('player details', {
      url: '/details/:id',
      templateUrl: '/client/app/players/details/details.jade',
      controller: 'PlayerDetailsController as vm'
    }).state ('player create', {
      url: '/create',
      templateUrl: '/client/app/players/create/create.jade',
      controller: 'PlayerCreateController as vm'
    })
  });
}
