import Titulo from '../components/Titulo';
import Ejercicio1 from '../components/Ejercicio1';
import Ejercicio2 from '../components/Ejercicio2';
import Api from '../components/Api';
import Ejercicio3 from '../components/Ejercicio3';

export const PaginasApp = [
  {
    id: 1,
    path: '/',
    title: 'Título',
    component: Titulo,
  },
  {
    id: 1,
    path: '/ejercicio1',
    title: 'Ejercicio 1',
    component: Ejercicio1,
  },
  {
    id: 2,
    path: '/ejercicio2',
    title: 'Ejercicio 2',
    component: Ejercicio2,
  },
  {
    id: 3,
    path: '/ejercicio3',
    title: 'Ejercicio 3',
    component: Ejercicio3,
  },
  {
    id: 4,
    path: '/Api',
    title: 'Ejercicio 2 Api',
    component: Api,
  },
];
