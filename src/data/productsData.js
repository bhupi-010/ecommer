import Laptop from '../assets/laptop.webp';
import Headphones from '../assets/headphone.webp';
import Watch from '../assets/watch.webp';
import Tv from '../assets/tv.webp';
import Mobile from '../assets/mobile.webp';

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 999,
    description: 'High performance laptop with SSD storage and powerful processor.',
    imageUrl: Laptop,
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 799,
    description: 'Latest smartphone with a stunning display and advanced camera features.',
    imageUrl: Mobile,
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: 199,
    description: 'Sleek and stylish smartwatch with fitness tracking and heart rate monitor.',
    imageUrl: Watch
  },
  {
    id: 4,
    name: 'Wireless Headphones',
    price: 149,
    description: 'High-quality wireless headphones with noise cancellation technology.',
    imageUrl: Headphones,
  },
  {
    id: 5,
    name: '4K Television',
    price: 1299,
    description: 'Ultra HD 4K television with smart features and HDR support.',
    imageUrl: Tv
  },
];

export default products;
