// El styles lo importamos aquí, ya se carga después al compilar todo

// import catImage from '../assets/images/cat.jpeg'
import '../scss/styles.scss';
import { allTrendingRequest } from './trending-slider.js';
import { sectionsbucle, sectionsArray } from './sections-landing';

allTrendingRequest();
sectionsbucle(sectionsArray);
