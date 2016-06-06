import * as express from 'express';
import * as controller from './controller';
let router = express.Router();

 // base url ---- /api/v1/players

router.get('/', controller.getAll);

// get: api/v1/players/:id
// :id -> unique player ID
router.get('/:id', controller.getOne);
// deleteL api/v1/players/:id
// id -> unique player id
router.delete('/:id', controller.remove);

// POST: /api/v1/players
router.post('/', controller.create);

router.put('/:id', controller.update);


export = router;
// HOMEWORK FOR THURSDAY NIGHT: GO THROUGH ALL THE FILES AND GIVE A DEFINITION TO EVERY VARIABLE, WHERE IT COMES FROM, WHY ITS THERE, WHAT ITS DOING
// STYLE UP THE PAGES WITH SOME CSS
