// Namespace is a container for set of identifiers, functions, methods and all that. It gives a level of direction to its contents so that it will be well distinguished and organised.
namespace app {
  // export class Controller is an angular application that store functions and objects that are referenced by the module and service
  export class PlayerCreateController {
    // player is an arbitrary object, IPlayer is an interface, we specify public so that the player object can referenced outside of the controller
    public player: IPlayer;

    //public create is a function that allows us add to players to the players array
    public create () {
      this.PlayerService.create(this.player).then(() => {
        this.$state.go('player main');
      });
    }
// constructor is a part of the Controller that calls the Player service
// need more info on what this does
    constructor(
      // insufficient understanding of these variables to define them
      private PlayerService: app.PlayerService,
      private $state: ng.ui.IStateService
    ) {

    }
  }
  // this line of code completes every controller function, without it... PEOPLE WOULD DIE
  angular.module('app').controller('PlayerCreateController', PlayerCreateController);
}
