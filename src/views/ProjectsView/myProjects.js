import icecreamImg from '../../assets/images/previewProjects/icecream.png';
import eventboosterImg from '../../assets/images/previewProjects/eventbooster.png';

import webStudioImg from '../../assets/images/previewProjects/webStudio.png';
import webDevImg from '../../assets/images/previewProjects/webDev.png';
import imageFinder from '../../assets/images/previewProjects/imageFinder.png';
import weatherImg from '../../assets/images/previewProjects/weather.png';
import moviesImg from '../../assets/images/previewProjects/movies.png';
import phonebookImg from '../../assets/images/previewProjects/phonebook.png';

export const ownProjects = [
  {
    id: 'id-4',
    label: 'Phonebook',
    link: 'https://yer-phonebook.netlify.app/',
    repo: 'https://github.com/yermakovaa/goit-react-hw-08-phonebook',
    preview: phonebookImg,
    info: 'Phonebook application with the ability to register users and work with private collections of contacts.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'Redux' },
      { id: 'id-5', name: 'AJAX' },
      { id: 'id-6', name: 'REST API' },
      { id: 'id-7', name: 'Axios' },
      { id: 'id-8', name: 'Material-UI' },
      { id: 'id-9', name: 'Framer Motion' },
    ],
  },
  {
    id: 'id-3',
    label: 'Movies',
    link: 'https://yer-movies.netlify.app/',
    repo: 'https://github.com/yermakovaa/goit-react-hw-05-movies',
    preview: moviesImg,
    info: 'App for watching popular and searching films. The application uses themoviedb.org API.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'AJAX' },
      { id: 'id-5', name: 'REST API' },
      { id: 'id-6', name: 'Material-UI' },
      { id: 'id-7', name: 'Slugify' },
    ],
  },
  // {
  //   id: 'id-4',
  //   label: 'Weather',
  //   link: 'https://yermakovaa.github.io/weather/',
  //   repo: 'https://github.com/yermakovaa/weather',
  //   preview: weatherImg,
  //   info: 'Weather App. Shows the current weather in the city. The application uses Weather API.',
  //   tech: [
  //     { id: 'id-1', name: 'HTML5' },
  //     { id: 'id-2', name: 'CSS3' },
  //     { id: 'id-3', name: 'React.js' },
  //     { id: 'id-4', name: 'AJAX' },
  //     { id: 'id-5', name: 'REST API' },
  //   ],
  // },
  {
    id: 'id-2',
    label: 'Image Finder',
    link: 'https://yermakovaa.github.io/image-finder/',
    repo: 'https://github.com/yermakovaa/image-finder',
    preview: imageFinder,
    info: 'Keyword search image app. The public image search service Pixabay was used for HTTP requests.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'AJAX' },
      { id: 'id-5', name: 'REST API' },
      { id: 'id-6', name: 'Axios' },
    ],
  },
  {
    id: 'id-1',
    label: 'Web Studio',
    link: 'https://yer-web-studio.netlify.app/',
    repo: 'https://github.com/yermakovaa/web-studio',
    preview: webStudioImg,
    info: 'Responsive web page layout Web Studio - effective solutions for your business.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
    ],
  },
  // {
  //   id: 'id-1',
  //   label: 'WebDev',
  //   link: 'https://yermakovaa.github.io/WebDev/',
  //   repo: 'https://github.com/yermakovaa/WebDev',
  //   preview: webDevImg,
  //   info: 'Layout of a web page (only desktop version).',
  //   tech: [
  //     { id: 'id-1', name: 'HTML5' },
  //     { id: 'id-2', name: 'SCSS' },
  //     { id: 'id-3', name: 'BEM' },
  //   ],
  // },
];

export const commandProjects = [
  {
    id: 'id-2',
    label: 'EventBooster',
    repo: 'https://github.com/andrii-telishko/event-boostert-team-project',
    preview: eventboosterImg,
    info: 'Team project EventBooster - help yourself with choosing a movie.',
    link: 'https://andrii-telishko.github.io/event-boostert-team-project/',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
      { id: 'id-3', name: 'JavaScript' },
      { id: 'id-4', name: 'Handlebars' },
      { id: 'id-5', name: 'REST API' },
      { id: 'id-6', name: 'AJAX' },
    ],
  },
  {
    id: 'id-1',
    label: 'IceCream',
    link: 'https://2f4s7.github.io/goit-ice-cream/',
    repo: 'https://github.com/2F4S7/goit-ice-cream',
    preview: icecreamImg,
    info: 'Responsive web page layout for IceCream - teamlead',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
      { id: 'id-3', name: 'JavaScript' },
      { id: 'id-4', name: 'Parcel' },
    ],
  },
];
