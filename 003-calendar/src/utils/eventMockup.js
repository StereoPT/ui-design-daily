import { v4 as uuidv4 } from 'uuid';
import random from 'random';

import {
  faUtensils, faShoppingCart, faHeart, faHandshake 
} from '@fortawesome/free-solid-svg-icons';

const EVENTS = [
  {
    name: 'Dinner with Dad',
    icon: faUtensils
  },
  {
    name: 'Pay Phone Bills',
    icon: faShoppingCart
  },
  {
    name: 'Special Day :)',
    icon: faHeart
  },
  {
    name: 'Meeting with John',
    icon: faHandshake
  }
];

export const getRandomEvent = () => {
  const randomEvent = {
    id: uuidv4(),
    ...random.choice(EVENTS)
  };

  return randomEvent;
}

export default EVENTS;