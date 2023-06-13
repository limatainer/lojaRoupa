import BlueDr from '/assets/gallery/blueDress.jpg';
import BlueD from '/assets/gallery/blueD.jpg';
import GirlD from '/assets/gallery/girlDress.jpg';
import Jeans from '/assets/gallery/jeans.jpg';
import RedDress from '/assets/gallery/redD.jpg';
import Roupas from '/assets/gallery/roupas.jpg';
import RoupasD from '/assets/gallery/roupas2.jpg';
import SpringRed from '/assets/gallery/springRed.jpg';
import RedD from '/assets/gallery/redDress.jpg';
import WhiteD from '/assets/gallery/whiteDress.jpg';

const clas = 'w-full h-full rounded shadow-sm min-h-48 aspect-square object-cover'

const galeria = [
  {
    id: 1,
    image: RoupasD,
    classe: 'w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1  aspect-square'
  },
  {
    id: 2,
    classe: clas,
    image: GirlD,
  },
  {
    id: 3,
    classe: clas,
    image: BlueDr,
  },
  {
    id: 4,
    classe: clas,
    image: RedD,
  },
  {
    id: 5,
    classe: clas,
    image: SpringRed,
  },
  {
    id: 6,
    classe: clas,
    image: Jeans,
  },
  {
    id: 7,
    classe: clas,
    image: RedDress,
  },
  {
    id: 8,
    classe: clas,
    image: BlueD,
  },
  {
    id: 9,
    classe: clas,
    image: WhiteD,
  },
  {
    id: 10,
    classe: 'w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3  aspect-square',
    image: Roupas,
  },
];

export default galeria;
