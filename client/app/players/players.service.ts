namespace app {
  interface IPlayerResourceClass extends IPlayer, ng.resource.IResource<IPlayerResourceClass> {}
  interface IPlayerResource extends ng.resource.IResourceClass<IPlayerResourceClass> {
    update(params: Object);
    update(params: Object, body: Object);}



  export class PlayerService {
    private playerResource: IPlayerResource;
    // getAll lets us retrieve every index in the player array as denoted by the .query
    public getAll() {
      return this.playerResource.query();
    }
    // getOne lets us retrieve a single index from the player array by its id number
    public getOne(id) {
      return this.playerResource.get({id: id});
    }
    // we establish the remove function here but we refer to it in the details controller, we identify the index to remove by its id
    public remove(id: number) {
      return this.playerResource.remove({id: id}).$promise;
    }
    // we establish the create function here but we call it in the create controller
    public create(player: IPlayer) {
      return this.playerResource.save(player).$promise
    }
    public update(player: IPlayer) {
      return this.playerResource.update({id: player.id}, player).$promise
    }


    constructor(
      $resource: ng.resource.IResourceService
    ) {
      // this line of code allows us to place a specific id number in the url to travel directly to it
      this.playerResource = <IPlayerResource>$resource('/api/v1/players/:id', null, {'update': {'method': 'PUT'}})
    }
  }

  angular.module('app').service('PlayerService', PlayerService);
}
