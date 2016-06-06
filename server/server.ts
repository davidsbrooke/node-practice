import * as mongoose from 'mongoose';
import * as express from 'express';
import { config } from '../config';
import * as Player from './api/players/model';
const MONGO_URL = 'mongodb://localhost/team-manager'
let app = express();
mongoose.connect(MONGO_URL, function(err){
  if (err) console.log(err)
  else console.log(`connected to ${MONGO_URL}`)})
app.get(/\/client.{0,}\/.+\.jade/, (req, res, next) => {
  res.render(config.root + req.path);
});

// access /bower_components via /scripts/...
app.use('/scripts', express.static('bower_components'));
app.use('/client', express.static('client'));

app.get('/', (req, res, next) => {
  res.sendFile(config.client + '/index.html');
});

app.use(require('body-parser')());

let teams: ITeam[] = [
{
  id: 1,
  name: 'Carolina Zazzlers',
  location: 'Memphis',
  sport: 'Jai Alai'
},
{
  id: 2,
  name: 'Bene Gesserit',
  location: 'Jackson',
  sport: 'Tea Parties'
},
{
  id: 3,
  name: 'Rockin Knights of Summer',
  location: 'Camp Firewood',
  sport: 'Freestyle Hackysack'
}
];
app.get('/api/v1/teams', (req, res, next) => {
  res.json(teams);
});
app.get('/api/v1/teams/:id', (req, res, next) => {
  let team = teams.filter((identifier) =>
  identifier.id == req.params['id'])[0]
  if (team) {
    res.json(team);
  } else {
    res.sendStatus(404);
  }
});

app.use('/api/v1/players', require('./api/players/routes'));

app.get(/\/(client|scripts|api).{0,}/, (req, res, next) => {
  res.sendStatus(404);
});

app.get('/*', (req, res, next) => {
  res.sendFile(config.client + '/index.html');
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(3000, () => {
  console.log('Server is listening on localhost:3000');
});
