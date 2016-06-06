namespace app {
  // Controller is an angular application that store functions and objects that are referenced by the module and service
  export class TeamController {
    public teams: ITeam[];

    constructor(
      private TeamService: app.TeamService
    ) {
      this.teams = TeamService.getAll();
    }

  }
  angular.module('app').controller('TeamController', TeamController);
}
