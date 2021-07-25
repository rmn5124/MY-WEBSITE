import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/toDo.png';
import UTrackerImg from '../images/tour.png';
import GreenCtgImg from '../images/2-d.png';
import CoinTrackerImg from '../images/tracker.png';
import CavinImg from '../images/simon.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Tour-IND',
    desc:
      'Tourism responsive website build using  ReactJs, Javascript, CSS3, contains highlights of some important places along with high-quality photography.',
    img: UTrackerImg,
    link: new URL('https://djp-tourism.web.app/'),
  },
  {
    id: uuidv4(),
    name: '2-D Breakout Game',
    desc:
      'In the 2D Breakout game, you need to break all the bricks using a bouncing ball, a ball that you need to prevent from leaving the game area using the paddle.',
    img: GreenCtgImg,
    link: 'https://rmn5124.github.io/Hackathon-2-D-Breakout/',
  },
  {
    id: uuidv4(),
    name: 'Map My Run',
    desc:
      'Developed a Location Tracking Web app that Keeps track of your everyday workout-running /cycling,after pressing on pinned location You can get your old data',
    img: CoinTrackerImg,
    link: 'https://rmn5124.github.io/Map-My-Run/',
  },
  {
    id: uuidv4(),
    name: 'Simon Game',
    desc:
      'Game Developed in Javascript In which you have to play by memorizing all the blinking in the present as well as in past, one wrong turn and You will loose.',
    img: CavinImg,
    link: 'https://rmn5124.github.io/simon-game/',
  },
  {
    id: uuidv4(),
    name: 'DoIt',
    desc:
      'This is a Todolist web application that uses ejs templating for front-end and uses Node.js and Express for backend. The todo items are stored on a MongoDB database.',
    img: ProjectImg,
    link: 'https://calm-wave-26059.herokuapp.com/',
  },
];

export default projects;
