import icecreamImg from '../../assets/images/previewProjects/icecream.png';
import eventboosterImg from '../../assets/images/previewProjects/eventbooster.png';

import webStudioImg from '../../assets/images/previewProjects/webStudio.png';
import l2C4WImg from '../../assets/images/previewProjects/l2c4wiki.png';
// import barberShopImg from '../../assets/images/previewProjects/barberShop.png';
import imageFinder from '../../assets/images/previewProjects/imageFinder.png';
import moviesImg from '../../assets/images/previewProjects/movies.png';
import phonebookImg from '../../assets/images/previewProjects/phonebook.png';

export const ownProjects = [
  {
    id: 'id-5',
    label: 'Phonebook',
    link: 'https://telbook4u.netlify.app/',
    repo: 'https://github.com/2F4S7/react-phonebook-top',
    preview: phonebookImg,
    info: 'Application "Notebook online".Fast and convenient for storing contacts online!',
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
    id: 'id-4',
    label: 'Movies',
    link: 'https://search-movies-top.netlify.app',
    repo: 'https://github.com/2F4S7/react-movies',
    preview: moviesImg,
    info: 'Real-time movie search application. Used by themoviedb.org API.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'AJAX' },
      { id: 'id-5', name: 'REST API' },
    ],
  },
  {
    id: 'id-3',
    label: 'Image Finder',
    link: 'image-finder-top.netlify.app/',
    repo: 'https://github.com/2F4S7/image-finder-top',
    preview: imageFinder,
    info: 'Site for searching images by keyword!',
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
    id: 'id-2',
    label: 'L2C4Wiki',
    link: 'https://2f4s7.github.io/L2C4W/',
    repo: 'https://github.com/2F4S7/L2C4W',
    preview: l2C4WImg,
    info: 'Lineage 2 Wikipedia, guides, life hack - for you!',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'Bootstrap' },
      { id: 'id-4', name: 'JQuery' },
      { id: 'id-5', name: 'Fancybox' },
      { id: 'id-6', name: 'Flaticon' },
      { id: 'id-7', name: 'Open-Iconic' },
    ],
  },
  {
    id: 'id-1',
    label: 'Web Studio',
    link: 'https://2f4s7.github.io/Web-Studio/',
    repo: 'https://github.com/2F4S7/Web-Studio',
    preview: webStudioImg,
    info: 'Website for an advanced business company!',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
    ],
  },
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
