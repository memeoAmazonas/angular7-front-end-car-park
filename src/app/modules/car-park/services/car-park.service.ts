import { throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import { Car } from '../models/car/car';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarParkService {

  serverUrl = environment.baseUrl;
  private http: HttpClient;
  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  getCars() {
    return this.http.get<Car[]>(this.serverUrl + 'api/cars').pipe(
      catchError(this.handleError)
    );
  }
  createPositions(cant: number) {
    return this.http.post<boolean>(this.serverUrl + 'api/generate_positions/' + cant, null)
      .pipe(
        catchError(this.handleError)
      );
  }
  registerPosition(car) {
    return this.http.post<any>(this.serverUrl + 'api/register_position/', car)
      .pipe(
        catchError(this.handleError)
      );
  }
  getTopFive() {
    return this.http.get<Car[]>(this.serverUrl + 'api/get_five').pipe(
      catchError(this.handleError)
    );
  }
  getCarByLicencePlate_(id: string): any {
    return this.http.get<any>(this.serverUrl + 'api/get_by_licence_plate/' + id)
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteCar(car, id: number) {
    return this.http.post<any>( this.serverUrl + 'api/delete_car/' + id, car)
      .pipe(
        catchError(this.handleError)
      );
  }
  SetInvoiceAlegra(invoice) {
    return this.http.post<any>
    ('https://app.alegra.com/api/v1/invoices/',
      invoice, { headers: new HttpHeaders()
          .set('Authorization', 'Basic ZGF6b2hAbXlsZXR0ZXIub25saW5lOjc2NGExMjVlOGQyN2I1MmFjNWZj')
          .set(  'Accept', 'application/json')})
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteCarParking() {
    return this.http.post<boolean>(this.serverUrl + 'api/delete_car_parking','').pipe(
        catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error('err', error);
    }
    return throwError('Something bad happened. Please try again later.');
  }


}
