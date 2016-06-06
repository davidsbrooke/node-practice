namespace app {
    export class TeamDetailsController {
        public team: ITeam;


        constructor(
            private $state: ng.ui.IStateService,
            private TeamService: app.TeamService,
            private $stateParams: ng.ui.IStateParamsService) {

            this.team = this.TeamService.getOne($stateParams['id'])  
        }
    }
    angular.module('app').controller('TeamDetailsController', TeamDetailsController);
}
