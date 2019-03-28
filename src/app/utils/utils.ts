import * as moment from 'moment';

import { Car } from '../modules/car-park/models/car/car';


export const closeModal = (id: string): void => {
  id = '#' + id;
  $(id).modal('hide');
};

export const openModal = (id: string): void => {
  id = '#' + id;
  $(id).modal({
    show: true
  });
};

export const calculateTimeInCourse = (car: Car): number => {
  const end = moment(new Date());
  const init = moment(car.dateIngress);
  return (end.diff(init, 'seconds'));
};

 export const createDetailInvoice = (date, id, amount) => {
  return 'Factura generada el '.concat(date) + ' en el estacionamiento el maguary,' +
  ' perteneciente a francisco, al cliente ' + id + ', por un monto de ' + amount;
 };

