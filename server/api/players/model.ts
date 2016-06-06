export let players: IPlayer[] = [];
export function reset() {
  players.length = 0
}
export function remove(id: number) {
 players = players.filter ((identifier) => identifier.id !== id);
}

export function update(player: IPlayer) {
  
}
export function seed() {

  players.push(
  { id: 1,
    firstName: 'Torpedo',
    lastName: 'Vegas',
    age: 11,
    sport: 'Bull Jousting',
    position: 'Leader',
    height: ' 4ft 9in',
    weight: 200,
    number: 900,
    image: 'http://content.clickbooq.com/181/photos/82bf6d00ba.jpg',
    team: 'self employed',
    college: 'London School Of Economics',
    nationality: 'Norwegian'},

  {
    id: 2,
    firstName: 'Clint',
    lastName: 'Beastwood',
    age: 50,
    sport: 'Biathlon',
    position: 'Front Mid',
    height: ' 5ft 9in',
    weight: 90,
    number: 3,
    image: 'http://i.imgur.com/TVSe4.jpg',
    team: 'self employed',
    college: 'The Streets',
    nationality: 'Martian'
  },
    {
      id: 3,
      firstName: 'Carol',
      lastName: 'Margrave',
      age: 19,
      sport: 'Meditation',
      position: 'Third Center Left',
      height: ' 7ft 9in',
      weight: 90,
      number: 8,
      image: 'http://www.veganbodybuilding.org/people/pat/main/pat-panoramic-a.jpg',
      team: 'Yountville Scaddlers',
      college: 'James Sprunt Community College',
      nationality: 'Adopted'

    },
    {id: 4,
    firstName: 'Reince',
    lastName: 'Preibus',
    age: 3,
    sport: 'Breakdancing',
    position: 'up top',
    height: ' 3ft 3in',
    weight: 20,
    number: 1,
    image: 'https://hipsandtips.files.wordpress.com/2011/02/elderly_breakdancer.jpg',
    team: 'Harmard Ligers',
    college: 'Harmard',
    nationality: 'Pakistani',

  },
  {id: 5,
  firstName: 'Darfid',
  lastName: 'Junz',
  age: 93,
  sport: 'Olympics',
  position: 'bottom',
  height: '6ft',
  weight: 150,
  number: 88,
  image: 'https://hipsandtips.files.wordpress.com/2011/02/elderly_breakdancer.jpg',
  team: 'Blueskins',
  college: 'Books',
  nationality: 'Maldovan'

  }

)
}
