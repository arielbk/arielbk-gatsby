import habitTracker from '../images/habittracker/main-screen.jpg';
import filmBase from '../images/filmbase/main-screen.jpg';
import arielBk from '../images/arielbk/main-screen.png';
import bpmCount from '../images/bpmcount/main-screen.png';
import lucid from '../images/lucid/main-screen.png';
import pomodoroTimer from '../images/pomodoro/main-screen.png';
import marijaP from '../images/marijap/main-screen.png';
import dateFacts from '../images/datefacts/main-screen.png';
import wordCounter from '../images/wordCounter/main-screen.png';
import kalender from '../images/kalender/main-screen.png';

const projects = [
  {
    name: 'Habit Tracker',
    image: habitTracker,
    blurb: [
      'A project undertaken with other developers as part of a Chingu build-to-learn project.',
      'I have picked up lots of best practices along the way and got to really focus on design and testing.',
    ],
    skills: ['JavaScript', 'React', 'Express', 'MongoDB'],
    date: 'In Progress',
    repo: 'https://github.com/chingu-voyages/bears-project-8',
    demo: 'https://chingu-habit-tracker.herokuapp.com',
  },
  {
    name: 'Film Base',
    image: filmBase,
    blurb: [
      'A fullstack website where users can browse films and save their favourites.',
      'This is my first full stack project, and one where I began to incorporate testing into my workflow.',
    ],
    skills: ['JavaScript', 'React', 'Express', 'MongoDB'],
    date: 'January 2019',
    repo: 'https://github.com/arielbk/filmbase',
    demo: 'https://film-base.herokuapp.com',
  },
  {
    name: 'arielbk',
    image: arielBk,
    blurb: [
      'This website. A platform to showcase my web development projects.',
      'It has been a great introduction to server-side rendering using Next.js.',
    ],
    skills: ['JavaScript', 'React', 'Nextjs', 'Figma'],
    date: 'October 2018',
    repo: 'https://github.com/arielbk/arielbk',
    demo: 'https://arielbk.com/',
  },
  {
    name: 'BPM Count',
    image: bpmCount,
    blurb: [
      'An app to tap along with music and discover the tempo — measured in Beats Per Minute (BPM).',
      'I was inspired to make this because it is a tool that I find helpful and use frequently.',
    ],
    skills: ['JavaScript', 'React', 'Sketch'],
    date: 'September 2018',
    repo: 'https://github.com/arielbk/BPM-Counter',
    demo: 'https://arielbk.com/bpmcount',
  },
  {
    name: 'Lucid',
    image: lucid,
    blurb: [
      'A project undertaken as part of a \'Chingu Cohort\', a community coding \'build-to-learn\' project.',
      'This was great UI design and code practice, and working with other coders was invaluable.',
    ],
    skills: ['JavaScript', 'React', 'Sketch'],
    date: 'August 2018',
    repo: 'https://github.com/chingu-voyage6/Geckos-Team-03/tree/master',
    demo: 'https://arielbk.com/lucid/',
  },
  {
    name: 'Pomodoro Timer',
    image: pomodoroTimer,
    blurb: [
      'A timer to track work and break periods with the Pomodoro productivity hack.',
      'A pet project that has gone through uncountable rewrites as I continue learning.',
    ],
    skills: ['JavaScript', 'React', 'Sketch'],
    date: 'July 2018',
    repo: 'https://github.com/arielbk/pomodoro-timer',
    demo: 'https://arielbk.com/pomodorotimer',
  },
  {
    name: 'UX Portfolio',
    image: marijaP,
    blurb: [
      'A design/coding collaboration for the UX designer Marija Peraic\'s portfolio.',
      'Working together with a designer was insightful — design first, and then code.',
    ],
    skills: ['Bootstrap', 'Sass', 'JavaScript', 'jQuery'],
    date: 'June 2018',
    repo: 'https://github.com/arielbk/portfolio-marija',
    demo: 'https://marijap.com/',
  },
  {
    name: 'Date Facts',
    image: dateFacts,
    blurb: ['Shows facts for any date based on data fetched from the \'Number Facts\' API.',
      'This was great practice for communicating with an API and building out a simple frontend.',
    ],
    skills: ['JavaScript', 'React'],
    date: 'June 2018',
    repo: 'https://github.com/arielbk/react-apps/tree/master/date-facts-react',
    demo: 'http://datefacts.glitch.me/',
  },
  {
    name: 'Word Counter',
    image: wordCounter,
    blurb: [
      'This was made to practice modern JavaScript, before reconstructing it in React.',
      'Migrating a simple app like this was a great introduction to the framework.'],
    skills: ['JavaScript', 'React'],
    date: 'May 2018',
    repo: 'https://github.com/arielbk/react-apps/tree/master/word-counter-react',
    demo: 'https://arielbk.com/word-counter-react/',
  },
  {
    name: 'Kalender',
    image: kalender,
    blurb: [
      'Final showcase for an online computer science course, Harvard\'s CS50X.',
      'An open project to bring together twelve weeks of valuable study.',
    ],
    skills: ['Python', 'Flask', 'JavaScript', 'PostgreSQL'],
    date: 'May 2018',
    repo: 'https://github.com/arielbk/kalender-heroku',
    demo: 'https://kalender-deploy.herokuapp.com/',
  },
];

export default projects;
