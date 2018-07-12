import './style.css';
import numeral from 'numeral';

const courseVal = numeral(1000).format('$0, 0.00');
//debugger; // Source Map. only loads when you open the dev tools.
console.log(`I would pay ${courseVal} for this awesome course!`);
