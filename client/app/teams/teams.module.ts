namespace app {
  angular.module('app').config((
    $stateProvider: ng.ui.IStateProvider
  ) => {
    $stateProvider.state('teams', {
      url: '/teams',
      templateUrl: '/client/app/teams/team.jade',
      controller: 'TeamController as vm'
    })
  })
}
