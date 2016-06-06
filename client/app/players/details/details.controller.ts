namespace app {
  // Controller is an angular application that store functions and objects that are referenced by the module and service
  export class PlayerDetailsController {
 public player: IPlayer;
 public isEditing = false;
 public updatePlayer: IPlayer;

 public startEditing() {
   this.isEditing = true;
   this.updatePlayer = angular.copy(this.player)
 }

 // the remove function allows us to delete a player from the array
 public remove() {
   this.PlayerService.remove(this.player.id).then(() => {
     this.$state.go('player main')
  })
}
public update() {
  this.PlayerService.update(this.updatePlayer).then(() => {
    this.isEditing = false;
    this.player = angular.copy(this.updatePlayer);

  })
}
    constructor(
      private $state: ng.ui.IStateService,
      private PlayerService: app.PlayerService,
      private $stateParams: ng.ui.IStateParamsService) {
        // lets us change url parameters
        // this.player['id'] targets a specific id in the player array to delete
      this.player = this.PlayerService.getOne($stateParams['id'])


    }
  }
  angular.module('app').controller('PlayerDetailsController', PlayerDetailsController);

}
