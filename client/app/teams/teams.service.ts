namespace app {
  interface ITeamResourceClass extends ITeam,
  ng.resource.IResource<ITeamResourceClass> {}
  interface ITeamResource extends
  ng.resource.IResourceClass<ITeamResourceClass> {}

  export class TeamService {
    private teamResource: ITeamResource;

    public getAll() {
      return this.teamResource.query();
    }

    public getOne(id) {
      return this.teamResource.get({id: id});
    }

    constructor(
      $resource: ng.resource.IResourceService
    ) {
      this.teamResource = <ITeamResource>$resource('/api/v1/teams/:id')
    }
  }
  angular.module('app').service('TeamService', TeamService);
}
