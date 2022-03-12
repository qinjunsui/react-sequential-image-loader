import ReactDOM from 'react-dom';
import Animator from './Animator';
import Mouse0 from './assets/img/mouse_sequence/00000.webp';
import Mouse1 from './assets/img/mouse_sequence/00001.webp';
import Mouse2 from './assets/img/mouse_sequence/00002.webp';
import Mouse3 from './assets/img/mouse_sequence/00003.webp';
import Mouse4 from './assets/img/mouse_sequence/00004.webp';
import Mouse5 from './assets/img/mouse_sequence/00005.webp';
import Mouse6 from './assets/img/mouse_sequence/00006.webp';
import Mouse7 from './assets/img/mouse_sequence/00007.webp';
import Mouse8 from './assets/img/mouse_sequence/00008.webp';
import Mouse9 from './assets/img/mouse_sequence/00009.webp';
import Mouse10 from './assets/img/mouse_sequence/00010.webp';
import Mouse11 from './assets/img/mouse_sequence/00011.webp';
import Mouse12 from './assets/img/mouse_sequence/00012.webp';
import Mouse13 from './assets/img/mouse_sequence/00013.webp';
import Mouse14 from './assets/img/mouse_sequence/00014.webp';
import Mouse15 from './assets/img/mouse_sequence/00015.webp';
import Mouse16 from './assets/img/mouse_sequence/00016.webp';
import Mouse17 from './assets/img/mouse_sequence/00017.webp';
import Mouse18 from './assets/img/mouse_sequence/00018.webp';
import Mouse19 from './assets/img/mouse_sequence/00019.webp';
import Mouse20 from './assets/img/mouse_sequence/00020.webp';
import Mouse21 from './assets/img/mouse_sequence/00021.webp';
import Mouse22 from './assets/img/mouse_sequence/00022.webp';
import Mouse23 from './assets/img/mouse_sequence/00023.webp';
import Mouse24 from './assets/img/mouse_sequence/00024.webp';
import Mouse25 from './assets/img/mouse_sequence/00025.webp';
import Mouse26 from './assets/img/mouse_sequence/00026.webp';
import Mouse27 from './assets/img/mouse_sequence/00027.webp';
import Mouse28 from './assets/img/mouse_sequence/00028.webp';
import Mouse29 from './assets/img/mouse_sequence/00029.webp';
import Mouse30 from './assets/img/mouse_sequence/00030.webp';
import Mouse31 from './assets/img/mouse_sequence/00031.webp';
import Mouse32 from './assets/img/mouse_sequence/00032.webp';
import Mouse33 from './assets/img/mouse_sequence/00033.webp';
import Mouse34 from './assets/img/mouse_sequence/00034.webp';
import Mouse35 from './assets/img/mouse_sequence/00035.webp';
import Mouse36 from './assets/img/mouse_sequence/00036.webp';
import Mouse37 from './assets/img/mouse_sequence/00037.webp';
import Mouse38 from './assets/img/mouse_sequence/00038.webp';
import Mouse39 from './assets/img/mouse_sequence/00039.webp';
import Mouse40 from './assets/img/mouse_sequence/00040.webp';
import Mouse41 from './assets/img/mouse_sequence/00041.webp';
import Mouse42 from './assets/img/mouse_sequence/00042.webp';
import Mouse43 from './assets/img/mouse_sequence/00043.webp';
import Mouse44 from './assets/img/mouse_sequence/00044.webp';
import Mouse45 from './assets/img/mouse_sequence/00045.webp';
import Mouse46 from './assets/img/mouse_sequence/00046.webp';
import Mouse47 from './assets/img/mouse_sequence/00047.webp';
import Mouse48 from './assets/img/mouse_sequence/00048.webp';
import Mouse49 from './assets/img/mouse_sequence/00049.webp';
import Mouse50 from './assets/img/mouse_sequence/00050.webp';
import Mouse51 from './assets/img/mouse_sequence/00051.webp';
import Mouse52 from './assets/img/mouse_sequence/00052.webp';
import Mouse53 from './assets/img/mouse_sequence/00053.webp';
import Mouse54 from './assets/img/mouse_sequence/00054.webp';
import Mouse55 from './assets/img/mouse_sequence/00055.webp';
import Mouse56 from './assets/img/mouse_sequence/00056.webp';
import Mouse57 from './assets/img/mouse_sequence/00057.webp';
import Mouse58 from './assets/img/mouse_sequence/00058.webp';
import Mouse59 from './assets/img/mouse_sequence/00059.webp';

const mouses = [
  Mouse0,
  Mouse1,
  Mouse2,
  Mouse3,
  Mouse4,
  Mouse5,
  Mouse6,
  Mouse7,
  Mouse8,
  Mouse9,
  Mouse10,
  Mouse11,
  Mouse12,
  Mouse13,
  Mouse14,
  Mouse15,
  Mouse16,
  Mouse17,
  Mouse18,
  Mouse19,
  Mouse20,
  Mouse21,
  Mouse22,
  Mouse23,
  Mouse24,
  Mouse25,
  Mouse26,
  Mouse27,
  Mouse28,
  Mouse29,
  Mouse30,
  Mouse31,
  Mouse32,
  Mouse33,
  Mouse34,
  Mouse35,
  Mouse36,
  Mouse37,
  Mouse38,
  Mouse39,
  Mouse40,
  Mouse41,
  Mouse42,
  Mouse43,
  Mouse44,
  Mouse45,
  Mouse46,
  Mouse47,
  Mouse48,
  Mouse49,
  Mouse50,
  Mouse51,
  Mouse52,
  Mouse53,
  Mouse54,
  Mouse55,
  Mouse56,
  Mouse57,
  Mouse58,
  Mouse59
];

ReactDOM.render(
  <Animator images={mouses} interval={50} turn={true} />,
  document.getElementById('root')
);
