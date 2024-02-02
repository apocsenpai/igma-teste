import Celular1 from '@/assets/celular1.png';
import Celular2 from '@/assets/celular2.png';
import Celular3 from '@/assets/celular3.png';
import Celular4 from '@/assets/celular4.png';
import Celular5 from '@/assets/celular5.png';
import Celular6 from '@/assets/celular6.png';
import Celular7 from '@/assets/celular7.png';
import Celular8 from '@/assets/celular8.png';
import Celular9 from '@/assets/celular9.png';
import Celular10 from '@/assets/celular10.png';
import Celular11 from '@/assets/celular11.png';
import Celular12 from '@/assets/celular12.png';

import Mrv from '@/assets/mrv.svg';
import BrasilPrev from '@/assets/brasilprev.svg';
import Idb from '@/assets/idb.svg';
import Comgas from '@/assets/comgas.svg';
import Bayer from '@/assets/bayer.svg';
import Cvc from '@/assets/cvc.svg';
import Centauro from '@/assets/centauro.svg';
import NeoEnergia from '@/assets/neoenergia.svg';
import Google from '@/assets/google.svg';
import Honda from '@/assets/honda.svg';
import Ambev from '@/assets/ambev.svg';
import Hsl from '@/assets/hsl.svg';

import { ICarouselGroupItem, IClientItem } from '@/interfaces';

export const phoneImageList: ICarouselGroupItem[] = [
  {
    firstImage: {
      component: Celular1,
      alt: 'Celular mostrando um banco.',
    },
    secondImage: {
      component: Celular2,
      alt: 'Celular mostrando o aplicativo da MRV.',
    },
    thirdImage: {
      component: Celular3,
      alt: 'Celular mostrando a Season Finale.',
    },
    animation: {
      duration: '18s',
      type: 'initialToBottom',
    },
  },
  {
    firstImage: {
      component: Celular4,
      alt: 'Celular mostrando um aplicativo de viagens.',
    },
    secondImage: {
      component: Celular5,
      alt: 'Celular mostrando um aplicativo de melhoria pessoal.',
    },
    thirdImage: {
      component: Celular6,
      alt: 'Celular mostrando o site da igma.',
    },
    animation: {
      duration: '10s',
      type: 'middleToBottom',
    },
  },
  {
    firstImage: {
      component: Celular7,
      alt: 'Celular mostrando a tela de decoração do aplicativo da empresa MRV.',
    },
    secondImage: {
      component: Celular8,
      alt: 'Celular mostrando uma video chamada com um médico.',
    },
    thirdImage: {
      component: Celular9,
      alt: 'Celular mostrando uma tela de espera do aplicativo da empresa MRV.',
    },
    animation: {
      duration: '18s',
      type: 'initialToBottom',
    },
  },
  {
    firstImage: {
      component: Celular10,
      alt: 'Celular mostrando o dashboard do aplicativo Rissi.',
    },
    secondImage: {
      component: Celular11,
      alt: 'Celular mostrando o aplicativo da CVC.',
    },
    thirdImage: {
      component: Celular12,
      alt: 'Celular mostrando o aplicativo Rissi.',
    },
    animation: {
      duration: '10s',
      type: 'middleToBottom',
    },
  },
];

export const clientImageList: IClientItem[] = [
  {
    component: Mrv,
    alt: "Mrv"
  },
  {
    component: BrasilPrev,
    alt: "BrasilPrev"
  },
  {
    component: Idb,
    alt: "Idb"
  },
  {
    component: Comgas,
    alt: "Comgas"
  },
  {
    component: Bayer,
    alt: "Bayer"
  },
  {
    component: Cvc,
    alt: "Cvc"
  },
  {
    component: Centauro,
    alt: "Centauro"
  },
  {
    component: NeoEnergia,
    alt: "NeoEnergia"
  },
  {
    component: Google,
    alt: "Google"
  },
  {
    component: Honda,
    alt: "Honda"
  },
  {
    component: Ambev,
    alt: "Ambev"
  },
  {
    component: Hsl,
    alt: "Hospital Sírio-Libanês"
  },
];
