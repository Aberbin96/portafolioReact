import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    fab, faAdn, faLinkedin, faGoodreads, 
    faInstagram, faGithub, faPhp, faJs, 
    faHtml5, faCss3, faLaravel, faVuejs,
    faWordpress, faSass, faReact } from '@fortawesome/free-brands-svg-icons';
import { far, faMoon } from '@fortawesome/free-regular-svg-icons';
import { fas, faGlobeAmericas, faChevronDown, faMapMarkedAlt, faBars } from '@fortawesome/free-solid-svg-icons';
 
library.add(fab, 
    faMoon, faAdn, faLinkedin, faGoodreads, 
    faInstagram, faGithub, faPhp, faJs, 
    faHtml5, faCss3, faLaravel, faVuejs,
    faWordpress, faSass, faReact);
library.add(far, faMoon);
library.add(fas, faGlobeAmericas, faChevronDown, faMapMarkedAlt, faBars);